var path = require('path');
var fse = require('fs-extra');

const files = [
  'README.md',
  'LICENSE'
];

Promise.all(
  files.map((file) => copyFile(file))
)
.then(() => createPackageFile());

function copyFile(file) {
  const libPath = resolveBuildPath(file);
  return new Promise((resolve) => {
    fse.copy(
      file,
      libPath,
      (err) => {
        if (err) throw err;
        resolve();
      }
    );
  })
  .then(() => console.log(`Copied ${file} to ${libPath}`));
}

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../lib/', path.basename(file));
}

function createPackageFile() {
  // read from the package.json file in our repo
  return new Promise((resolve) => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
  .then((data) => JSON.parse(data))
  .then((packageData) => {
    // store the following settings from the package.json file in our repo to reuse in new file
    const {
      author,
      version,
      description,
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies,
    } = packageData;

    const minimalPackage = {
      name: 'ps-react-joeynguyen-test',
      author,
      version,
      description,
      // not using './lib/index.js because this new package.json file will be sitting inside the lib directory
      main: './index.js',
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies
    };

    return new Promise((resolve) => {
      // write new package.json to lib directory
      const libPath = path.resolve(__dirname, '../lib/package.json');
      const data = JSON.stringify(minimalPackage, null, 2);
      fse.writeFile(libPath, data, (err) => {
        if (err) throw (err);
        console.log(`Created package.json in ${libPath}`);
        resolve();
      });
    });
  });
}
