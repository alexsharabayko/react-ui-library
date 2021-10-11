/**
 * Component Generator
 */
module.exports.ComponentGenerator = {
  description: 'Add a component',
  prompts: [
    {
      type: 'list',
      name: 'folder',
      message: 'Select the folder of the component',
      default: 'components',
      choices: ['components', 'screens'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Example',
    },
  ],
  actions: (data) => {
    return [
      {
        type: 'add',
        path: '../src/{{kebabCase folder}}/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: './component/templates/component.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{kebabCase folder}}/{{kebabCase name}}/{{kebabCase name}}.module.scss',
        templateFile: './component/templates/component.scss.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{kebabCase folder}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: './component/templates/stories.tsx.hbs',
        abortOnFail: true,
      },
    ];
  },
};
