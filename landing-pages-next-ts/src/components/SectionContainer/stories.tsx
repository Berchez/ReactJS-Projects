import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nam
          atque, quaerat saepe facilis expedita eligendi exercitationem
          voluptatibus ad ut laborum, natus distinctio iste pariatur.
          Repellendus, delectus. Nostrum, cum amet?
        </p>
      </div>
    ),
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
