const fs = require('fs');
const path = require('path');

const layoutsPath = path.join(__dirname, '../../../../src/layouts');
const getLayoutsNames = () => {
  return fs.readdirSync(layoutsPath, { withFileTypes: true })
    .filter((dirent) => { return dirent.isDirectory() })
    .map((dirent) => { return dirent.name })
};

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the page name? (kebab-case)',
        validate: (answer) => {
            if (answer !== '') {
                return true
            }
        },
      },
      {
        type: 'select',
        name: 'useLayout',
        message: 'Use a layout?',
        choices: ['Yes', 'No'],
        validate: (answer) => {
          if (answer !== '') {
            return true
          }
        },
      },
    ];

    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name, useLayout } = answers;
        const fullName = `pages/${name}`;
        const path = `../src/${fullName}`;
        const result = { ...answers, path, name };

        if (useLayout === 'No') {
          return { ...result, useLayout: false };
        }
        
        const layouts = getLayoutsNames();

        return inquirer.prompt({
          type: 'select',
          name: 'layoutName',
          message: `'What is the layout name?`,
          choices: layouts,
          validate: (answer) => {
            if (answer !== '') {
              return true
            }
          },
        })
          .then(({ layoutName }) => {
            return { ...result, useLayout: true, layoutName }
          })
      });
  },
};
