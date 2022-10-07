import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: 'string',
  },
};

export const Template = (args) => <Heading {...args} />;
