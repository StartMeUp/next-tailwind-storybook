import { ComponentMeta, ComponentStory } from '@storybook/react';
import TodoCard, { ITodoCard } from './TodoCard';
import { mockTodoCardProps } from './TodoCard.mocks';

export default {
  title: 'templates/Todos/TodoCard',
  component: TodoCard,
} as ComponentMeta<typeof TodoCard>;

const Template: ComponentStory<typeof TodoCard> = (args) => (
  <TodoCard {...args} />
);

export const TodoCardTemplate = Template.bind({});
TodoCardTemplate.args = {
  ...mockTodoCardProps.base,
} as ITodoCard;
