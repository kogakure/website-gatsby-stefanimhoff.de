---
published: true
title: Zettelkasten Note-Taking Method With DEVONthink
date: 2020-05-18T10:00:00+02:00
author: Stefan Imhoff
description: "The way we write notes determines how we think and learn. I was introduced recently to a quite old method of writing notes: The Zettelkasten method. This article describes how I implemented the method into my workflow with DEVONthink."
cover: ./cover.jpg
og: ./og.jpg
attribution:
  - author: Maksym Kaharlytskyi
    title: The Files
    url: https://unsplash.com/photos/Q9y3LRuuxmg
categories:
  - productivity
---

The way we write notes determines how we think and learn. Many studies have shown how useful writing notes is. The best retention comes with writing, reading, and listening combined. Repeated reading and connecting ideas is another important part.

## The Illusion of Competence and the Collectors Fallacy

A lot of people avoid taking notes and search on the Internet instead. This is a grave error because it looks convenient to have all knowledge <q>at the tips of my fingers</q>. And worse, it produces the **Illusion of Competence**[^schroder2018aa] in a person. <q>I don’t need to know this, I can always look it up</q> is a common sentence you hear today. <q>I can ask Siri or Alexa</q>.

But knowledge-building doesn’t work that way. And saving content into some archive doesn’t either. I’m guilty of this myself. Having used Evernote for a decade I was used to saving everything I _wanted to remember_ into the tool. I sorted and curated, tagged, and sometimes even highlighted content. But I fell victim to the **Collectors Fallacy**[^tietze2014aa]. Because you collected something doesn’t mean you learned it or are able to explain it.

A few months ago a co-worker pointed me to the **Zettelkasten method**. At first, I discarded it as too complicated. The founder _Niklas Luhmann_ seemed rather eccentric to me. His physical Zettelkasten—a huge shelve with 90,000 notes—was an abomination to me as a <TextLink to="/minimalism/">Minimalist</TextLink>.

But a few weeks ago I found some time reading into the links my colleague had sent me about the method. I learned that [Ryan Holiday] and [Robert Greene] use similar methods for note-taking.

## The Zettelkasten Method

This article is not meant to be a deep introduction to the Zettelkasten method, but rather showing how I implemented it into my daily workflow. To read more about the method I recommend the fantastic illustrated article [Zettelkasten — How One German Scholar Was So Freakishly Productive][dclear] by _David B. Clear_ and [Living with a Zettelkasten][meriksson] by _Magnus Eriksson_. Another good hub for information is the website [Zettelkasten](https://zettelkasten.de/) by _Christian Tietze_.

But I’ll shortly introduce the concept for better understanding: **Zettelkasten** is a German word meaning **note** (Zettel) **box** (Kasten).

The basic idea is that a **notebook** is too static and linear. It might be good to quickly capture ideas, but it’s a bad way to store ideas. But information simply put on **index cards** or **notes** would be too loose and disorganized.

Putting notes into **folders** is the beginners’ approach—I’m guilty myself—but you run into problems with notes belonging thematic into different folders.

**Tags** are the next improvement to a note-taking system. Tags allow notes to be grouped without the limitation of physical categories or folders.

But the Zettelkasten Method went one step further: Individual notes get connected by **linking them together**. This is a manual but necessary step that connects ideas and creates real knowledge about topics. Over time you add outline notes, connect similar ideas, or even complete hub pages connecting notes and outline notes of broader topics.

## Principles of a Good Zettel

A good Zettel should be **atomic**, just one idea should be on a note. It should **autonomous**, being able to stand on its own, moved, or merged with other notes. Whenever you add a note think about ways of **connecting** the note to already existing notes. Also, you should always **explain** why you’re linking two notes. Never copy and paste (quotes are the exception I assume), but **use your own words and language**. Don’t think about structure and **never delete** any note.

## Reference Material

Regarding the reference material, I found different ideas. Some recommend always keeping the reference to ensure no plagiarism, others process a reference and immediately delete the reference. I think the best way I somewhere in between, keeping some really good references and deleting the ones of lesser quality and just extracting the ideas worth saving on separate notes.

I, for example, have already a rather huge reference database with 30,000 items. And I don’t plan to delete any of the reference material. The major part is of inspirational kind (images, logos, photos) which can’t be captured in a note.

But I started using [BibDesk](https://bibdesk.sourceforge.io/) to create references to books, articles, and videos worth remembering. It’s also easy to create custom export templates for BibDesk as explained in [Manage Citations for a Zettelkasten](https://zettelkasten.de/posts/bibliography-zettelkasten/).

## Tools

When I tried to introduce the Zettelkasten method, I reviewed a bunch of tools. Tools I already owned and tools that were recommended. The good thing with this method is there is no right tool, everything from paper index cards too highly sophisticated software can do the job. It’s a matter of taste and convenience. A paper-based system I discarded categorically—I don’t have the time or space to maintain such a system. I tried a good bunch of tools recommended in the [Software & Gadgets](https://forum.zettelkasten.de/categories/tools) section of the Zettelkasten website. I even tried their tool [The Archive](https://zettelkasten.de/the-archive/). But after looking into the capabilities of my favorite document management system [DEVONthink](https://devontechnologies.com/apps/devonthink) I decided to stay with it.

## Selecting the Right Tool

After years of working with different software products, I came up with my rules for selecting a tool for any purpose. Whenever I come along a tool which might look _incredible_ at the beginning, I slow down my decision and remember these rules:

- **Never** use a tool or service which **does not allow exporting** my content easily.
- **Never** store valuable information **only on an external server** which might disappear or be inaccessible.
- **Never** use a **proprietary format** that is depending on a specific company or tool or is **hard or impossible to convert** into another format.
- If possible don’t use a service or software that doesn’t support **encrypting my data**.
- If possible don’t use a service or software that has **a monthly fee**. Monthly fees make it easy for developers to not deliver good software while the user is not being able to stop paying without losing access to the software.

### Exporting Data

A lot of tools already fail my first rule: Apple Notes, [Google Keep](https://keep.google.com/), [Microsoft OneNote](https://www.onenote.com/). These tools don’t allow exporting or just exporting a single, individual note to something static like a PDF. That’s a big **NO** and I would never use tools of that kind. DEVONthink allows exporting and importing every file with all its metadata.

### Locally Stored Data

The second rule crosses out a lot of the famous new star apps like [Notion](https://www.notion.so/) or [Roam Research](https://roamresearch.com/). As cool and innovative these tools are, they are not for me. I know both tools allow exporting your notes as Markdown, but being locked out of Notion for 3 days—they had problems with their mail server—is proof of the importance of my second rule. DEVONthink is local first, but cloud providers and synchronizing files are possible. You can backup your data and always access it, even without an internet connection.

### Data in Open Formats

The next rule crosses out all kinds of software, that has some internal database format or virtual file format which lets you loose your metadata when exporting a note—if this is possible at all. Also, tools that need you to run a specific server, plugin, extension that might not be available any more ten years later. I also consider [Evernote](https://evernote.com/) to be in this category. While it is possible currently to export the notes as HTML, this might not be the case in the future. They additionally bake in styles in the HTML which leads to a lot of my notes being hard to read today—black foreground on a black background or tiny fonts. DEVONthink allows every format. It has really good support for Markdown, but you can store everything you like. It also allows converting files into a huge amount of different formats.

### Encryped Data

The last two rules are nice to have and not a deal-breaker: I want my data encrypted. Storing my data in some cloud where a bored employee or curious intelligence officer might read my notes is not acceptable. DEVONthink allows encrypting the local databases (or just use the Mac hard disc encryption) and encrypts all cloud storage vaults by default with a very high standard. They even warn their customers, that losing the password will mean you lose the data.

### No Monthly Rent

Additionally, I don’t like services or software with a monthly fee. Not at all. I don’t support or approve of this trend. I get it, I’m a developer myself. It allows for a steady stream of money and supports the developers. But it also opens the field for shady tactics:

- Using the **Loss Aversion** or **Sunk Cost Fallacy** to bind customers to pay regularly or losing everything they created.
- It also allows developers to stop being innovative and releasing what customers want.

I didn’t like the old model either when software companies pushed out a new release every year, without improvements worth paying for an upgrade. But at least the software still worked. Every year one could check the new feature and weight if it’s worth paying the upgrade.

I can approve software like [Sketch](https://www.sketch.com/) where you pay every year but you won’t get any further updates or improvements when you stop paying, but your software still runs!

DEVONthink has a one-time price and a new version gets released every few years. They are just six developers which keep the cost of development low. And they work on the app for over a decade and always release fantastic new features. They even release [useful software for free](https://devontechnologies.com/apps/freeware).

## DEVONthink Pro for the Zettelkasten Method

There are many reasons I decided DEVONthink would be the best possible solution for me starting with the Zettelkasten methods and the following section will give insights into some of my research and thoughts.

I decided to stay with pure MultiMarkdown files—most people working with the Zettelkasten method do. Markdown is versatile, easy to write, easy to convert, has no lock-in into a proprietary file format, as the files are just text.

My notes are as simple as they can be. Simple is a good thing. The filename starts with a unique ID generated out of the current date and time, followed by a short and meaningful title: `202005171446 The Process of Habit Building` (translated, as I write all my notes in German).

The note itself is also quite easy in structure:

```md
# 202005171446 The Process of Habit Building

[Short introduction of the idea][#someauthor2020abc]

[Longer explanation or examples]

## Possible subsections

[…]

## Links

- [[202005171443 Identity change as a goal for habit change]]
- [[202005171436 Forget goals. Concentrate on systems]]
- [[202005171425 The 1% rule for habit forming]]

[#SomeAuthor2020abc]: Some Author (2020): _Title of Work_, <Link>.
```

Originally I had the tags included in the note, but I discarded the idea, because of the powerful tagging in DEVONthink. All tags in DEVONthink are automatically tags in the Apple file system.

### The DEVONthink Sorter

One of the best features of DEVONthink is its fantastic sorter. It can be used as a menu bar item or a floating index tab it can be triggered with various shortcuts. It allows capturing not just notes in all possible formats, but also audio, video, screenshots, and websites. The latter one is powerful and able to strip all clutter and just keep text and images or convert the content to Markdown, save as HTML, rich text, pure text, PDF, or web archive.

![The DEVONthink sorter to capture content quickly](devonthink-sorter.jpg "The DEVONthink Sorter")

### Fast Live Search with Powerful Search Operators

The search in DEVONthink is fast and one of the core features. It’s using powerful data-science features in the background to analyze the content and show the most likely search results. It’s possible to use advanced search operators like wildcards, boolean operators, or regular expressions.

### Tagging & Location Data

The tagging in DEVONthink is fantastic. No lag or buggy behavior as I was used to it in Evernote. Tags can be added with auto-complete and easily filtered down with clicking on a weighted tag cloud or adding more tags to filter down the result list.

Notes can also contain the geographical location where the note was taken and can be viewed later on a world map.

### WikiLinks & Hashtag Conversion

DEVONthink supports out of the box WikiLink syntax `[[…]]` and also provides auto-complete for WikiLinks. As I use a flat-file structure for all my notes that always start with the date-time stamp, I can easily autocomplete only documents written on a given day.

The app allows multiple ways of linking. Besides WikiLinks, it supports, of course, regular Markdown linking to local files or external sources and also linking to the unique database item, like `x-devonthink-item://EE11831A-6028-4202-84E3-A4BEEA3E2551` which also works from tools outside of DEVONthink.

DEVONthink is also capable of converting hashtags, for example, `#Stoicism` into real tags. It can also convert keywords, properties or locations and into tags.

### MultiMarkdown Support

DEVONthink supports also [MultiMarkdown] which is much more powerful than regular Markdown. It allows for example citations, critic markup, glossary, table of contents, or cross-references, just to name a few. I use a custom export template in BibDesk that automatically creates a citation link for a reference.

Since it’s the last update DEVONthink supports also MathJAX and Prism code highlighting. It’s also possible to add a custom Markdown template. I use the CSS of the beautiful [iA Writer template GitHub Plus](https://github.com/icearith/iA-Writer-Templates-Github-Plus/).

### OCR Text Recognition

DEVONthink comes with built-in support for text recognition in a huge variety of languages. This allows, for example, to convert every image to be searchable, the same as one of the features of Evernote. The text can be either stored in a file comment or annotation or converted into a searchable PDF or other compatible formats. It allows automatic correction of distortion and rotation and the addition of a custom dictionary.

### Powerful Inspector

One really powerful feature is the inspector. It allows editing and viewing metadata, mark (colors, flags), rate (stars), or lock items. It can analyze text and show a wordlist, similar words, links in documents, a table of content, a word cloud, just to name a few.

And a document shows also statistics like paragraph, word or character count.

### Workspaces

DEVONthink has a concept of workspaces that allows saving specific views of the tool as a workspace. Activating a workspace will change the layout, active folders, or sorting to adjust to the preferred working mode. DEVONthink has also multiple ways of viewing the content: Lists, Symbols, Columns, Cover Flow. The window can be changed into different layouts. Each folder remembers the assigned layout which allows, for example, to show large images in a photo folder and a list with selected columns in another folder.

A powerful [DEVONthink Alfred Workflow](https://github.com/mpco/AlfredWorkflow-DEVONthink-Search) allows searching in DEVONthink and switching quickly between workspaces.

Another nice feature of DEVONthink is the possibility to have multiple windows of the app at the same time. This sounds like a less important feature, but having two windows next to each other is a real help: Writing notes in one window while researching or searching for connection links in another window.

### Sync & Mobile App

DEVONthink can sync individual databases with common cloud providers (Dropbox, iCloud, CloudMe), WebDAV, or directly with iOS devices over Bonjour. The sync storage is stored encrypted in the cloud which makes it a safe way to sync across multiple devices without compromising private data. With [DEVONthink to Go] is also a mobile version available.

## My Workflow of Capturing a Note

Depending on where I am I might directly open the DEVONthink Sorter to capture a thought, idea, or information into my global inbox. I also drop images, documents, and everything I want to keep into the inbox.

I might also write notes into one of my paper notebooks. Handwriting has still a lot of advantages. Combined with _Sketchnotes_ it also enhances the memory and understanding of a topic. I usually transfer important notes once a day into DEVONthink.

I regularly reserve time to transfer notes, highlights, and quotes from books I’ve read into notes in my Zettelkasten.

![DEVONthink view on a Markdown document with a sidebar for notes](devonthink-zettelkasten.jpg "My Zettelkasten in DEVONthink")

Every afternoon I also clean the inbox and properly tag the items. Every Zettelkasten note gets a unique id and title (generated with a snippet in [Alfred](https://www.alfredapp.com/)) and then moved into a separate database just for notes. Inspirational items get moved into their database, and so do documents.

I use another Alfred snippet to quickly create the basic template of a Zettel (though DEVONthink has template capabilities, my snippet is faster). I add an intro paragraph and the content of my thought or note and use the inspector to find related notes which I link when possible using WikiLinks. I add citations or other links, external for links to websites and videos, or internal to other documents for images in DEVONthink using the unique document identifier.

A quick shortcut allows changing the metadata of a note without opening the inspector. Another shortcut opens a Zettel in my favorite writing app: [iA Writer](https://ia.net/writer). Saving the content will automatically update the DEVONthink document.

## Conclusion

I’m happy I was pointed to the Zettelkasten method by my colleague. It’s a really good and future-proof way of writing notes. Even after a few weeks and ~150 newly created notes, I can already see the first connections between the notes. I also started creating some connection notes and I’m having ideas for outline notes.

[DEVONthink](https://devontechnologies.com/apps/devonthink) is after a week of testing various tools the right tool for me. It allows me to use the Zettelkasten method with a bunch of really useful workflows and features next to having an incredibly powerful document management system.

[ryan holiday]: https://medium.com/@RyanHoliday/this-unique-notecard-system-will-help-you-remember-organize-and-utilize-everything-you-read-9f3ddabaa3c
[robert greene]: https://medium.com/@paulorrj/the-robert-greene-method-of-writing-books-e175ade04897
[dclear]: https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125
[meriksson]: https://omxi.se/2015-06-21-living-with-a-zettelkasten.html
[multimarkdown]: https://rawgit.com/fletcher/MultiMarkdown-6-Syntax-Guide/master/index.html
[devonthink to go]: https://apps.apple.com/app/devonthink-to-go/id395722470

[^schroder2018aa]: Will Schroder (2018): [How To Remember Everything You Learn](https://www.youtube.com/watch?v=V-UvSKe8jW4).
[^tietze2014aa]: Christian Tietze (2014): [The Collector’s Fallacy](https://zettelkasten.de/posts/collectors-fallacy/).
