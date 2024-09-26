---
to: <%= path %>/index.pug
---
<% if (useLayout) { -%>
extends /layouts/<%= layoutName %>/template.pug

append variables
  -
    extraBodyTagClasses = ['<%= name %>'];

block title
  title <%= name %>

block body

<% } -%>
<% if (!useLayout) { -%>
doctype html
html(lang="ru")
  head
    meta(charset="UTF-8")
    meta(http-equiv="X-UA-Compatible", content="IE=edge")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title <%= name %>

    link(rel="stylesheet", href="css/index.css")

  body.app.<%= name %>

    script(src="js/index.js")
<% } -%>
