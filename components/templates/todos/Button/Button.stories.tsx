import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'templates/Todos/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  ...mockButtonProps.base,
  tlwStyle: 'bg-slate-200',
} as IButton;

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  text: 'delete',
  tlwStyle: 'bg-orange-200',
} as IButton;
