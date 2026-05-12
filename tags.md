---
layout: page
title: "Tags"
permalink: /tags/
---

<div class="tag-cloud">
  <div class="tags-row">
    {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | sort | uniq %}
    {% for tag in all_tags %}
    {% assign count = site.posts | where_exp: "post", "post.tags contains tag" | size %}
    <a href="#{{ tag | slugify }}" class="tag-chip">{{ tag }} ({{ count }})</a>
    {% endfor %}
  </div>
</div>

{% for tag in all_tags %}
{% assign tagged = site.posts | where_exp: "post", "post.tags contains tag" %}
{% if tagged.size > 0 %}
<section id="{{ tag | slugify }}" style="margin-bottom:3rem">
  <h2 class="section-title">{{ tag }}<span class="section-title__count">{{ tagged.size }}</span></h2>
  <ul style="list-style:none;padding:0">
    {% for post in tagged %}
    <li style="display:flex;gap:1rem;align-items:baseline;padding:.5rem 0;border-bottom:1px solid rgba(26,74,138,0.4)">
      <time style="font-family:monospace;font-size:.75rem;color:rgba(232,244,253,.4);min-width:88px" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      <a href="{{ post.url | relative_url }}" style="font-size:.875rem;color:rgba(232,244,253,.7);border:none" onmouseover="this.style.color='#4fc3f7'" onmouseout="this.style.color='rgba(232,244,253,.7)'">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}
{% endfor %}
