module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the layout name? (kebab-case)',
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
        const { name } = answers;
        const fullName = `layouts/${name}`;
        const path = `../src/layouts/${name}`;

        return { ...answers, path, fullName, name }
      });
  },
};
