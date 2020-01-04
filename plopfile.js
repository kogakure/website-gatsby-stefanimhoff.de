/* eslint-disable func-names */
const currentDir = process.cwd();
const currentDate = new Date();

module.exports = function(plop) {
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
          destination: `${currentDir}/src/components/{{pascalCase name}}`,
          base: 'templates/component',
          templateFiles: '**/*.txt',
          stripExtensions: ['txt'],
        },
      ];
    },
  });

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
          base: 'templates/blog-post',
          templateFiles: '**/*.txt',
          stripExtensions: ['txt'],
          data: {
            date: currentDate.toISOString(),
          },
        },
      ];
    },
  });
};
