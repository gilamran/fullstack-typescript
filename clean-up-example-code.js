const readline = require('readline');
const fs = require('fs');
const path = require('path');

function promptUser(title) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: title,
    });

    rl.prompt();
    rl.on('line', (line) => {
      rl.close();
      resolve(line);
    });
  });
}

async function getProjectName() {
  const projectName = await promptUser('How do you want to name your project> ');
  if (!projectName.trim()) {
    console.log('You must provide a project name');
    return getProjectName();
  }
  return projectName.trim();
}

function createNewReadme(projectName) {
  console.log('Creating new README.md file');
  // delete the previous README.md file
  fs.unlinkSync('README.md');
  // Create a new README.md file
  fs.writeFileSync('README.md', `# ${projectName}\n\nThis is a new project named ${projectName}`);
}

function deleteExampleFiles() {
  console.log('Deleting example files');
  const filesToDelete = [
    path.join('src', 'shared', 'IUserDTO.d.ts'),
    path.join('src', 'shared', 'utils.ts'),
    path.join('src', 'server', 'db.ts'),
    path.join('src', 'server', 'routes', 'api-router.ts'),
    path.join('src', 'client', 'components', 'UsersList.tsx'),
    path.join('src', 'client', 'components', 'User.tsx'),
    path.join('src', 'client', 'components', 'Usage.tsx'),
    path.join('src', 'client', 'components', 'StyledComponentExample.tsx'),
    path.join('src', 'client', 'components', 'RouterExample.tsx'),
    path.join('src', 'client', 'components', 'LazyLoadingExample.tsx'),
    path.join('src', 'client', 'components', 'LazilyLoadedContent.tsx'),
    path.join('assets', 'images', 'flow.png'),
    path.join('assets', 'images', 'logo.png'),
  ];
  filesToDelete.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  });

  const foldersToDelete = [path.join('src', 'client', 'utils')];
  foldersToDelete.forEach((folder) => {
    if (fs.existsSync(folder)) {
      fs.rmSync(folder, { recursive: true });
    }
  });
}

function changePackageJson(projectName) {
  console.log('Changing package.json file');
  const projectNameCababCase = projectName.toLowerCase().replace(/ /g, '-');
  console.log('Changing package.json file');
  const rawPackageJson = fs.readFileSync('package.json').toString();
  const packageJson = JSON.parse(rawPackageJson);
  packageJson.version = '1.0.0';
  packageJson.name = projectNameCababCase;
  packageJson.keywords = ['typescript', 'react', 'vite'];
  delete packageJson.repository;
  delete packageJson.author;
  delete packageJson.description;
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}

function removeLineFromFile(fileName, lineToRemove) {
  const fileContent = fs.readFileSync(fileName).toString();
  const newFileContent = fileContent
    .split('\n')
    .filter((line) => line.trim() !== lineToRemove)
    .join('\n');
  fs.writeFileSync(fileName, newFileContent);
}

function removeTextFromFileByRegex(fileName, regex) {
  const fileContent = fs.readFileSync(fileName).toString();
  const newFileContent = fileContent.replace(regex, '');
  fs.writeFileSync(fileName, newFileContent);
}

function replaceTextInFile(fileName, textToReplace, newText) {
  const fileContent = fs.readFileSync(fileName).toString();
  const newFileContent = fileContent.replace(textToReplace, newText);
  fs.writeFileSync(fileName, newFileContent);
}

function changeFiles(projectName) {
  console.log('Changing files');
  const serverPath = path.join('src', 'server', 'server.ts');
  removeLineFromFile(serverPath, `import { apiRouter } from './routes/api-router';`);
  removeLineFromFile(serverPath, `app.use(apiRouter());`);

  const pagesPath = path.join('views', 'page.ejs');
  replaceTextInFile(pagesPath, 'TypeScript and React', projectName);

  const appTsxPath = path.join('src', 'client', 'App.tsx');
  removeLineFromFile(appTsxPath, `import { LazyLoadingExample } from './components/LazyLoadingExample';`);
  removeLineFromFile(appTsxPath, `import { RouterExample } from './components/RouterExample';`);
  removeLineFromFile(appTsxPath, `import { StyledComponentExample } from './components/StyledComponentExample';`);
  removeLineFromFile(appTsxPath, `import { Usage } from './components/Usage';`);
  removeLineFromFile(appTsxPath, `import { UsersList } from './components/UsersList';`);
  removeLineFromFile(appTsxPath, `<Route path='/usage' element={<Usage />} />`);
  removeLineFromFile(appTsxPath, `<Route path='/fetch-example' element={<UsersList />} />`);
  removeLineFromFile(appTsxPath, `<Route path='/lazy-example' element={<LazyLoadingExample />} />`);
  removeLineFromFile(appTsxPath, `<Route path='/styled-example' element={<StyledComponentExample />} />`);
  removeLineFromFile(appTsxPath, `<Route path='/router-example/:slug' element={<RouterExample />} />`);

  const headerTsxPath = path.join('src', 'client', 'components', 'Header.tsx');
  replaceTextInFile(headerTsxPath, 'Fullstack TypeScript', projectName);

  const sideMenuTsxPath = path.join('src', 'client', 'components', 'SideMenu.tsx');
  removeTextFromFileByRegex(sideMenuTsxPath, / *<Divider \/>[\s\S]*?<\/List>/);
  removeLineFromFile(sideMenuTsxPath, `import FetchIcon from '@mui/icons-material/CloudDownload';`);
  removeLineFromFile(sideMenuTsxPath, `import UsageIcon from '@mui/icons-material/Code';`);
  removeLineFromFile(sideMenuTsxPath, `import RouterIcon from '@mui/icons-material/Storage';`);
  removeLineFromFile(sideMenuTsxPath, `import StyledIcon from '@mui/icons-material/Style';`);
  removeLineFromFile(sideMenuTsxPath, `import LazyIcon from '@mui/icons-material/SystemUpdateAlt';`);
  removeTextFromFileByRegex(sideMenuTsxPath, /Divider, /);
}

function removeThisScript() {
  removeLineFromFile('package.json', `"clean-up-example-code": "node clean-up-example-code.js && rimraf clean-up-example-code.js",`);
}

async function main() {
  const projectName = await getProjectName();
  createNewReadme(projectName);
  changePackageJson(projectName);
  deleteExampleFiles();
  changeFiles(projectName);
  removeThisScript();
  console.log('Clean up completed');
}

main();
