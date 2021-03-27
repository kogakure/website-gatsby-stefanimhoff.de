/* eslint-disable func-names */
const moment = require('moment');

const currentDir = process.cwd();

const date = moment().format();
const year = moment().format('YYYY');
const week = moment().isoWeek();

const templatePath = 'scripts/templates';

module.exports = function (plop) {
  const tags = [
    'book',
    'code',
    'design',
    'download',
    'film',
    'health',
    'minimalism',
    'personal',
    'productivit',
    'publication',
    'quote',
    'self-improvement',
    'software',
    'tip',
    'typography',
  ];

  plop.setGenerator('post', {
    description: 'Create a new journal post',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Title',
        validate(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return 'Title is required';
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      {
        type: 'checkbox',
        name: 'tags',
        message: 'Tags',
        choices: tags,
      },
    ],
    actions() {
      process.chdir(plop.getPlopfilePath());

      return [
        {
          type: 'addMany',
          destination: `${currentDir}/content/posts/${year}/{{dashCase title}}`,
          base: `${templatePath}/journal`,
          templateFiles: '**/*.txt',
          stripExtensions: ['txt'],
          data: {
            date,
          },
        },
      ];
    },
  });

  plop.setGenerator('link', {
    description: 'Create a new link post',
    prompts: [],
    actions() {
      process.chdir(plop.getPlopfilePath());

      return [
        {
          type: 'addMany',
          destination: `${currentDir}/content/posts/${year}/links-${week}-${year}`,
          base: `${templatePath}/link`,
          templateFiles: '**/*.txt',
          stripExtensions: ['txt'],
          data: {
            date,
            week,
            year,
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
