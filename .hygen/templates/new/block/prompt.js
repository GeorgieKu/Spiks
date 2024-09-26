const CATEGORIES = ['ui-kit', 'components'];

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
        {
            type: 'select',
            name: 'categoryName',
            message: 'What is the directory name?',
            choices: CATEGORIES,
            validate: (answer) => {
                if (answer !== '') {
                    return true
                }
            },
        },
      {
        type: 'input',
        name: 'name',
        message: 'What is the block name? (kebab-case)',
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
        const { categoryName, name } = answers;
        const isUiKitCategory = categoryName === 'ui-kit';
        const fullName = `${categoryName}/${name}`;
        const path = isUiKitCategory ? `../src/core/${fullName}` : `../src/${fullName}`;
        const styleConfigPath = isUiKitCategory ? '../../config/css' : '../../core/config/css';
        const styleLibPath = isUiKitCategory ? '../../lib/css' :  '../../core/lib/css';

        return {
            ...answers,
            path,
            name,
            fullName,
            styleConfigPath,
            styleLibPath,
        }
      });
  },
};
