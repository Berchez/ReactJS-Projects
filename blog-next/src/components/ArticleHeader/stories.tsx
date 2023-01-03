import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Dolore anim minim qui fugiat ex ad reprehenderit elit irure non. Velit
        culpa cillum reprehenderit cillum qui duis ipsum do velit velit nostrud
        ad. Et non incididunt est et nisi pariatur mollit. Enim ut nulla elit
        nisi reprehenderit veniam qui et. Laborum proident et mollit qui culpa
        pariatur consequat esse esse id commodo do aliquip occaecat. Tempor
        consequat consectetur duis elit anim mollit id elit elit deserunt enim
        ipsum occaecat nostrud.
      </p>
    </div>
  );
};
