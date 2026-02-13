import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  const distPath = path.join(__dirname, 'dist');
  const outputPath = path.join(__dirname);

  console.log('Copying dist files to vgnacedilloaircraftrental folder...');
  
  // Copy dist contents to the vgnacedilloaircraftrental folder
  const distFiles = fs.readdirSync(distPath);
  distFiles.forEach(file => {
    const srcPath = path.join(distPath, file);
    const destPath = path.join(outputPath, file);
    fs.copySync(srcPath, destPath, { overwrite: true });
  });
  
  console.log('✅ Files copied successfully');

  console.log('Committing and pushing to main...');
  // Accept commit message as argument
  const commitMessage = process.argv[2] || 'Build: Deploy React app to vgnacedilloaircraftrental';
  execSync('git add -A', { stdio: 'inherit' });
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully deployed to main branch');
  console.log('Now go to GitHub repo settings > Pages and set source to main branch / root folder');
} catch (err) {
  console.error('Deploy failed:', err.message);
  process.exit(1);
}
