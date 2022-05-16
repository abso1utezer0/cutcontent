---
title: News
layout: default
---

# News
{% assign doclist = site.pages | sort: 'url'  %}
 <ul>
    {% for doc in doclist %}
         {% if doc.url contains '/news/posts/' %}
             <li><a href="{{ site.baseurl }}{{ doc.url }}" style="font-size: 18px">{{ doc.title }}</a><br><p style="font-size: 14px">Published by: {{ doc.author }}<br>Published on: {{ doc.date }}</p></li>
         {% endif %}
     {% endfor %}
 </ul>
