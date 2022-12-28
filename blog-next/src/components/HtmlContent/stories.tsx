import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlContent, HtmlContentProps } from '.';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni expedita exercitationem earum, amet at quasi obcaecati!
              Doloribus dignissimos ducimus ea molestias minima tenetur,
              tempore id facilis? Magni eaque eius voluptatum!`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div>
      <HtmlContent {...args} />
    </div>
  );
};
