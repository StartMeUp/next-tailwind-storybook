import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

// First story
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockBaseTemplateProps.base,
  tlwStyle: 'bg-black text-white',
} as IBaseTemplate;

// Second story
export const AltBase = Template.bind({});
AltBase.args = {
  ...mockBaseTemplateProps.altBase,
  tlwStyle: 'bg-zinc-400 text-yellow-800',
} as IBaseTemplate;
