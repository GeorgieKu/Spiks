---
to: <%= path %>/story/index.stories.js
---
import compileTemplate from '../template.pug';

export default {
  title: '<%= fullName %>',
  tags: ['autodocs'],
  argTypes: {
    contents: { control: 'text' },
  },
  render: compileTemplate,
};

export const Default = {
  args: {
    contents: 'Default',
  },
};
