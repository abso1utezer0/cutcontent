---
layout: default
title: Wii
---

# Articles
{% assign doclist = site.pages | sort: 'url'  %}
<div>
{% for doc in doclist %}
{% if doc.url contains 'articles/system/Wii/' and doc.layout == 'article' %}
<a href="{{ site.baseurl }}{{ doc.url }}" style="text-decoration: none">
     <div class="game box1 shadow1">
				<img class="coverart" src="/media/boxarts/{{ doc.system }}/{{ doc.ogtitle }}.png" alt="{{ doc.title }} coverart">
				<h2 class="gametext">{{ doc.title }}</h2>
				<p class="gametext">Developed by: {{ doc.developer }}</p>
				<p class="gametext">Development started: {{ doc.devstart }}</p>
				<p class="gametext">Released: {{ doc.released }}</p>
     </div>
</a>
{% endif %}
{% endfor %}
</div>
