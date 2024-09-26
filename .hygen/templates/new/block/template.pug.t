---
to: <%= path %>/template.pug
---

mixin <%= h.capitalize(h.changeCase.camel(name)) %>(props = {})
  -
    const baseClasses = ['<%= name %>'];
    const attrs = {
        class: [...baseClasses]
    };

  div&attributes(attrs)
    block
