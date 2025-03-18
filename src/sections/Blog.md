---
title: "Blog"
layout: "base.njk"
permalink: "/blog/"
order: 3
---

# 💡 Blogs

Stay updated with [my RSS Feed](/blog/rss.xml)!

<ul class="blogList">
  {% for post in collections.blog %}
  <li class=blogListItem>
    <a href="{{ post.url }}">{{ post.data.title }}</a> - {{ post.date | date("MMMM d, yyyy") }}
    <p>{{ post.data.description }}</p>
  </li>
  {% endfor %}
</ul>