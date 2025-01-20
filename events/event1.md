---
layout: base.njk
main_class: page-layout flow
tags: event
author: Nathan Wrigley
title: What is nice about 11ty.
eventdate: 1st June 2024
excerpt: The date is manually added. This is ordering according to date created.
description: This is my SEO metadata.
---

<h1 class=" popout sidelines" >What's nice about 11ty</h1>

For non-coder's 11ty has starter site and a way to import blogs from WordPress, but for those handcrafing HTM site it is a joyfull experience.

<img class=" popout" src="https://picsum.photos/id/1/1920/500" alt="">
 


## David's Experience

 - It's feels like working with HTML.
 - If only altering globals (like headers) it's more of a tool than a dependency .
 - Breaking HTML and CSS into smaller components makes work easier.
 - It's fairly simple, but not restrictive if a project need to grow.

 Coming from WordPress the main change is working in code editor using a terminal and understanding Git. Publishing is not as instant as WordPress. 
 

## Things we may forget to cover

- 11ty support many additional languages such as Handlebars, Mustache, Pug, Typescript. It aso has it own called webc which are web components.
- We can mix HTML and Markdown. The title and image above are HTML allowing me to add CSS styles.
- It's easy to minify the CSS output.
- It's easy optimize, resize and change the format of images.
- It's easy to use [Decap](https://decapcms.org/)'s free CMS to allow non coders to create posts.
- The [Front Matter CMS](https://frontmatter.codes/) can help manage front matter locally.
- We could have added pagination and RSS feeds, but too indepth for this video.

## Extra considerations

- [11ty base blog](https://github.com/11ty/eleventy-base-blog) makes it easy adopt a simple headless WordPress set up.
- [11ty starter sites](https://11tybundle.dev/starters/) can be useful to devs. The [Eventy Excellent](https://eleventy-excellent.netlify.app/) starter ticks all the boxes for what we may need for the No Script Show.

Eventy Excellent, like us uses CUBE CSS (in this case it broken down in to small components). It allows tags and uses Paul Irish's Lite YouTube Embed and has a light and dark switcher.

 Although she (Lene Saile) is years ahead she follows the same people resulting in great attention to accessibility. There are cool additions like automated open graph [images for posts](https://metatags.io/?url=https%3A%2F%2F11tyexcellent.netlify.app%2Fblog%2Fmy-shiny-new-post%2F). That said, if used on a site with constant updates this could be removed as it increases the build time.

## Learning Resources 

- [11ty Docs](https://www.11ty.dev/docs/)
- [11ty YouTube](https://www.youtube.com/@EleventyVideo/videos).
- [11ty Bundle](https://11tybundle.dev/). A fabulous place for all the latest by Bob Monsour.

These are years out of date, but with the help of 11ty docs and Claude AI I could covert to  11ty V3:

- [Learn Eleventy From Scratch](https://learneleventyfromscratch.com/). Andy Bell.

- [Turn static HTML/CSS into a blog with CMS using the JAMStack](https://www.youtube.com/watch?v=4wD00RT6d-g). Kevin Powell.

## Tip

 - VSCode supports Emmet autocompletes, but you need to set it for it to work in .njk files.
 - You have to watch what is in you _site folder. What you delete in you root is not removed.



