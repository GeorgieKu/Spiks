---
to: <%= path %>/index.js
---
const <%= h.changeCase.camel(name) %> = (element) => {
  if (!element) {
    return;
  }
};

export const mount<%= h.capitalize(h.changeCase.camel(name)) %> = () => {
  const elements = [...document.querySelectorAll('.<%= name %>')];

  elements.forEach(<%= h.changeCase.camel(name) %>);
};

export default <%= h.changeCase.camel(name) %>;
