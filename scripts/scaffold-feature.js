const fs = require('fs');
const path = require('path');

// Grab the feature name passed in the terminal command line
const featureName = process.argv[2];

if (!featureName) {
  console.error('\x1b[31m%s\x1b[0m', 'Coding Error: Please provide a feature name! Example: pnpm run generate-feature water-tracker');
  process.exit(1);
}

// Define the root target location for our application domains
const targetDir = path.join(__dirname, '..', 'src', 'features', featureName);

// Check if the feature already exists to prevent overwriting
if (fs.existsSync(targetDir)) {
  console.error('\x1b[33m%s\x1b[0m', `Warning: Feature "${featureName}" already exists at this path location.`);
  process.exit(1);
}

// Subfolders we want to enforce uniformly inside every feature module
const subFolders = ['pages', 'hooks', 'ui'];

try {
  // 1. Create the main feature root directory
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`\x1b[36m%s\x1b[0m`, `Creating feature structure: [${featureName}]`);

  // 2. Loop through and establish the subdirectories
  subFolders.forEach(folder => {
    fs.mkdirSync(path.join(targetDir, folder));
    console.log(`  ├── Created: ${folder}/`);
  });

  // 3. Create a clean root public gateway index.ts file
  const indexContent = `// Public API Gateway for the ${featureName} feature\n// Export screens or primary modules cleanly here\n`;
  fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent);
  console.log(`  └── Created: index.ts (Gateway file)`);

  console.log('\x1b[32m%s\x1b[0m', `\n✓ Feature "${featureName}" successfully scaffolded at src/features/${featureName}!\n`);

} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', 'Failed to generate structure layout trees:', error);
}