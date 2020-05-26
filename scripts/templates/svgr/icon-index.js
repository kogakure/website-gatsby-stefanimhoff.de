const path = require('path');

const camelCase = require('camelcase');

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const pathName = path.basename(filePath, path.extname(filePath));
    const exportName = camelCase(pathName, { pascalCase: true });
    return `export { default as ${exportName} } from './${pathName}';`;
  });

  return `${exportEntries.join('\n')}\n`;
}

module.exports = defaultIndexTemplate;
