const fs = require('fs');
const path = require('path');

// Function to generate wrangler.toml
function generateWranglerToml(packageName) {
  const template = fs.readFileSync('wrangler.template.toml', 'utf-8');
  const wranglerConfig = template.replace('$PACKAGE_NAME', packageName);
  fs.writeFileSync('wrangler.toml', wranglerConfig);
  console.log('Generated wrangler.toml with dynamic name.');
}

// Function to update package.json name
function updatePackageName(packageName) {
  const packageJson = require('./package.json');
  packageJson.name = packageName;
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log(`Package name set to ${packageName}`);
}

// Function to generate deploy.yml
function generateDeployYml(packageName) {
  const deployYmlContent = `
  name: ${packageName}

  on: 
    workflow_dispatch:

  jobs:
    deploy:
      runs-on: ubuntu-latest
      name: Deploy
      steps:
        - uses: actions/checkout@v4
        - name: Set up Node.js
          uses: actions/setup-node@v3
          with:
            node-version: 'latest'
        - name: Install dependencies
          run: npm install
        - name: Run setup-config script
          env:
            PACKAGE_NAME: ${{ secrets.PACKAGE_NAME }}
          run: node setup-config.js
        - name: Deploy
          uses: cloudflare/wrangler-action@v3
          with:
            apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
            accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
            secrets: |
              BOT_TOKEN
              BOT_USERNAME
              EMOJI_LIST
              RESTRICTED_CHATS
          env:
            BOT_TOKEN: ${{ secrets.BOT_TOKEN }}
            BOT_USERNAME: ${{ secrets.BOT_USERNAME }}
            EMOJI_LIST: ${{ secrets.EMOJI_LIST }}
            RESTRICTED_CHATS: ${{ secrets.RESTRICTED_CHATS }}
  `;
  const workflowsDir = '.github/workflows';
  if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir, { recursive: true });
  }
  fs.writeFileSync(path.join(workflowsDir, 'deploy.yml'), deployYmlContent);
  console.log('Generated deploy.yml with dynamic name.');
}

// Main execution
const packageName = process.env.PACKAGE_NAME;

if (!packageName) {
  console.error('Error: PACKAGE_NAME environment variable is not set.');
  process.exit(1);
}

generateWranglerToml(packageName);
updatePackageName(packageName);
generateDeployYml(packageName);