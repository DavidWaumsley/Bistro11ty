---
layout: base.njk
main_class: page-layout flow
tags: event
author: David Waumsley
title: 11ty for non devs?
eventdate: 7th February 2025
date: 2025-02-07T05:26:37.552Z
excerpt: The date is manually added. This is ordering according to date created.
description: This is my SEO metadata.
permalink: "/{{ title | slugify }}/"
---

<h1 class=" popout sidelines" >11ty for WordPress non-devs</h1>

<img class=" popout" src="https://picsum.photos/id/1/1920/500" alt="">
 

## Starter Sites

11ty has something similar to WordPress themes called starter sites. They can reduce the dev work needed to get going. Some are able to start with no CSS skills.

**Here's some places to look:**

- [11ty Bundle](https://11tybundle.dev/starters/). A fabulous place for all the latest by [Bob Monsour](https://bobmonsour.com/).
- [JamStack Themes](https://jamstackthemes.dev/#ssg=eleventy).
- [The 11ty site](https://www.11ty.dev/docs/starter/).

There's a few [exceptions](https://github.com/CloudCannon/campus-spark-bookshop-template), but generally starter sites are plain for us to add our own CSS. 

 Some are created around Tailwind or Bootstrap or include javaSript framework intergration.


**These could be useful for the shows website:**

- [The 11ty Base blog ](https://github.com/11ty/eleventy-base-blog).

- [Eleventy Excellent ](https://github.com/madrilene/eleventy-excellent).

- [Elva](https://github.com/scottsweb/elva).


These all have been updated to 11ty v.3. That said, that can carry npm packages that are [deprecated]( https://www.npmjs.com/package/inflight).

Eventy Excellent, like us, uses CUBE CSS. It allows tags, uses Paul Irish's Lite YouTube Embed and has a light and dark switcher. It also includes [webC](https://www.11ty.dev/docs/languages/webc/) 11ty's own web components. 

## 11ty as a static frontend for WordPress.

- 11ty has an [importer](https://www.11ty.dev/docs/migrate/wordpress/#use-@11ty/import) that can grap WordPress posts. 
- This hooks in to the WordPress REST API.
- It works out of the box with the 11ty base blog.

Andy Bell has a couple of articles: one on [hooking 11ty to WordPress](https://bell.bz/i-hooked-up-eleventy-to-wordpress-api/) and another on [importing 11ty content to WordPress](https://bell.bz/importing-eleventy-content-into-wordpress/).

There's other articles on bringing WordPress content into 11ty. Here's two that talk about WordPress plugins that tell WordPress to tell the host to rebuild 11ty.

- [Using Wordpress as a headless CMS for Eleventy by Mike Aparicio](https://www.mikeaparicio.com/posts/2023-11-07-using-wordpress-as-a-headless-cms-for-eleventy/)
- [How to use 11ty with Headless WordPress and deploy to Netlify by Dave Davies](https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/)

The two WordPress plugins have not been updated in 4 years.

We also have to consider the number concurrent builds our static hosting plan allow if letting clients update. Netlify only allows one on the free plan.





