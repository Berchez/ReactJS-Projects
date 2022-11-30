import { Meta, Story } from '@storybook/react/types-6-0';
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <h1>Amet tempor ullamco incididunt ut culpa nisi cillum deserunt.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        temporibus mollitia ipsa ex placeat quibusdam, unde dicta voluptatem rem
        incidunt pariatur illum. At quibusdam enim libero porro dignissimos
        laudantium perferendis.
      </p>
      <GoTop {...args} />
    </div>
  );
};
