import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni expedita exercitationem earum, amet at quasi obcaecati!
              Doloribus dignissimos ducimus ea molestias minima tenetur,
              tempore id facilis? Magni eaque eius voluptatum!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
