---
layout: base.njk
main_class: page-layout flow
tags: event
author: David Waumsley
title: 11ty for devs.
eventdate: 22nd January 2025
date: 2025-01-21T05:26:37.552Z
excerpt: The date is manually added. This is ordering according to date created.
description: This is my SEO metadata.
permalink: "/{{ title | slugify }}/"
---

<h1 class=" popout sidelines" >11ty for WordPress devs</h1>

<img class=" popout" src="https://picsum.photos/id/1/1920/500" alt="">
 

## Things we may forget to cover

- 11ty support many additional languages such as Handlebars, Mustache, Pug, Typescript. It aso has it own called webc which are web components.
- We can mix HTML and Markdown. The title and image above are HTML allowing me to add CSS styles.
- It's easy to minify the CSS output.
- It's easy optimize, resize and change the format of images.
- It's easy to use [Decap](https://decapcms.org/)'s free CMS to allow non coders to create posts.
- The [Front Matter CMS](https://frontmatter.codes/) can help manage front matter locally.
- We could have added pagination and RSS feeds, but too indepth for this video.
- We can set up draft posts.
- Making the "Event" slugs [match the titles.](https://www.11ty.dev/docs/filters/slugify/) 

There's no limits. Some do E-commerce with it. Some automate builds to pull in new data.

## Tips

 - VSCode supports Emmet autocompletes, but you need to set it for it to work in .njk files.
 - You have to watch what is in you _site folder. What you delete in you root is not removed.



## David's Experience

I don't consider myself a developer, but this reminds of learning WordPress back in 2007. Then, I was able to create my own theme without being able to write PHP. Here, I can do the same without JavaScript knowledge. Previously I lost sight of the fundementals of HTML and CSS and must watch out for that again.

The main change is working fully in a code editor, using a terminal and understanding Git. Publishing is not as instant as WordPress.

**I like that:**

 - It's feels like working with HTML.
 - I have full control.
 - If only altering globals, it's more of a tool than a dependency .
 - Breaking HTML and CSS into smaller components makes work easier.
 - It's simple, but not restrictive.

 WordPress page buiders helped with low budget work when CSS was not great at helping with the demands of the responsive web, but I prefer this now.

 ## Resources

 - [11ty YouTube](https://www.youtube.com/@EleventyVideo/videos).
- [11ty Bundle](https://11tybundle.dev/). A fabulous place for all the latest by Bob Monsour.

These are years out of date, but with the help of 11ty docs and Claude AI I could covert to 11ty V3:

- [Learn Eleventy From Scratch](https://learneleventyfromscratch.com/). Andy Bell.

- [Turn static HTML/CSS into a blog with CMS using the JAMStack](https://www.youtube.com/watch?v=4wD00RT6d-g). Kevin Powell.