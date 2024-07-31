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

// Main execution
const packageName = process.env.PACKAGE_NAME;

if (!packageName) {
  console.error('Error: PACKAGE_NAME environment variable is not set.');
  process.exit(1);
}

generateWranglerToml(packageName);
updatePackageName(packageName);
