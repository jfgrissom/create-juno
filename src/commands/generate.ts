import path from 'node:path';
import prompts from 'prompts';
import {populate} from '../utils/populate.utils';

interface Template {
  key: string;
  title: string;
}

const WEBSITE_TEMPLATES: Template[] = [];

const APP_TEMPLATES: Template[] = [{title: `Next.js`, key: `nextjs`}];

export const promptTemplate = async (type: 'app' | 'website'): Promise<Template> => {
  const collection = type === 'app' ? APP_TEMPLATES : WEBSITE_TEMPLATES;
  const {template}: {template: string} = await prompts({
    type: 'select',
    name: 'template',
    message: 'Which template do you want to use?',
    choices: collection.map(({title, key}) => ({title, value: key}))
  });
  const item = collection.find(({key}) => key === template);
  if (item === undefined) {
    throw new Error(`Invalid ${type} template: ${template}`);
  }
  return item;
};

export const promptStarter = async () => {
  const {starter}: {starter: 'blank' | 'tutorial'} = await prompts({
    type: 'select',
    name: 'starter',
    message: 'Which starter template would you like to use?',
    choices: [
      {
        title: 'Blank (A blank starter with "just" a customized index page)',
        value: 'blank'
      },
      {
        title: 'Tutorial (the "diary" example app)',
        value: 'tutorial'
      }
    ]
  });
  return starter;
};

export const promptProjectName = async () => {
  const {name}: {name: string} = await prompts({
    type: 'text',
    name: 'name',
    message: 'What is the name of your project?'
  });
  return name;
};

interface GeneratorInput {
  action: 'website' | 'app';
  name: string;
  template: Template;
  starter: 'blank' | 'tutorial' | null;
}

export const generate = async ({action, name, starter, template}: GeneratorInput) => {
  const templatePath = path.join(
    'templates',
    action,
    template.key + (starter !== null ? `-${starter}` : '')
  );
  await populate({
    templatePath,
    where: ['.', ''].includes(name) ? null : name
  });
};
