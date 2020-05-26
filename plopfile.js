/* eslint-disable func-names */
const currentDir = process.cwd();
const currentDate = new Date();

const templatePath = 'scripts/templates';

module.exports = function (plop) {
  plop.setGenerator('post', {
    description: 'Create a new blog post',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Blog Post Title',
        validate(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'Title is required';
        },
      },
    ],
    actions() {
      process.chdir(plop.getPlopfilePath());

      return [
        {
          type: 'addMany',
          destination: `${currentDir}/content/posts/${currentDate.getFullYear()}/{{dashCase title}}`,
          base: `${templatePath}/blog-post`,
          templateFiles: '**/*.txt',
          stripExtensions: ['txt'],
          data: {
            date: currentDate.toISOString(),
          },
        },
      ];
    },
  });

  plop.setGenerator('component', {
    description: 'Create a new functional component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component Name',
        validate(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'Component Name is required';
        },
      },
    ],
    actions() {
      process.chdir(plop.getPlopfilePath());

      return [
        {
          type: 'addMany',
          destination: `${currentDir}/src/components/{{dashCase name}}`,
          base: `${templatePath}/component`,
          templateFiles: '**/*.txt',
          stripExtensions: ['txt'],
        },
      ];
    },
  });
};
