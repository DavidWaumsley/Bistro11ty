---
layout: base.njk
main_class: page-layout flow
tags: event
author: David Waumsley
title: 11ty for non devs.
eventdate: 1st June 2024
date: 2025-01-24T05:26:37.552Z
excerpt: The date is manually added. This is ordering according to date created.
description: This is my SEO metadata.
permalink: "/{{ title | slugify }}/"
---

<h1 class=" popout sidelines" >11ty for WordPress non-devs</h1>

<img class=" popout" src="https://picsum.photos/id/1/1920/500" alt="">
 

## Stater Sites

11ty has something similar to WordPress themes called starter sites. They can reduce the dev work needed to get going. Some are able to start with no CSS skills.

**Here's some places to look:**

- [11ty Bundle](https://11tybundle.dev/starters/). A fabulous place for all the latest by [Bob Monsour](https://bobmonsour.com/).
- [JamStack Themes](https://jamstackthemes.dev/#ssg=eleventy).
- [The 11ty site](https://www.11ty.dev/docs/starter/).

There few [exceptions](https://github.com/CloudCannon/campus-spark-bookshop-template), but generally starter sites are plain for us to add our own CSS. 

 Some are created around Tailwind or Bootstrap or include javaSript framework intergration.


**These could be useful for the shows website:**

- [The 11ty Base blog ](https://github.com/11ty/eleventy-base-blog).

- [Eleventy Excellent ](https://github.com/11ty/eleventy-base-blog).

- [Elva](https://github.com/scottsweb/elva).


These all have been updated to 11ty v.3. That said, that can carry npm packages that are [deprecated]( https://www.npmjs.com/package/inflight)

Eventy Excellent, like us, uses CUBE CSS. It allows tags, uses Paul Irish's Lite YouTube Embed and has a light and dark switcher.

## 11ty as a static frontend for WordPress.

- 11ty has an [importer](https://www.11ty.dev/docs/migrate/wordpress/#use-@11ty/import) that can grap WordPress posts. 
- This hooks in to the WordPress REST API.
- It works out of the box with the 11ty Base blog.

Andy Bell has a couple of articles: one on [hooking 11ty to WordPress](https://bell.bz/i-hooked-up-eleventy-to-wordpress-api/) and another on [importing 11ty content to WordPress](https://bell.bz/importing-eleventy-content-into-wordpress/).

There's other articles on bringing WordPress content into 11ty. Here's two that talk about WordPress plugins that tell WordPress to tell the host to rebuild 11ty.

- [Using Wordpress as a headless CMS for Eleventy by Mike Aparicio](https://www.mikeaparicio.com/posts/2023-11-07-using-wordpress-as-a-headless-cms-for-eleventy/)
- [How to use 11ty with Headless WordPress and deploy to Netlify by Dave Davies](https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/)

The two WordPress plugins have not been updated in 4 years.





