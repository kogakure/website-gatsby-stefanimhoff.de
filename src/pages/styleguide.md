<SEO title="Styleguide" pathname="/styleguide/" />

# Styleguide<Emojify emoji="💅" />

This Styleguide is an example of most components used on this website.

```jsx
<Title>Styleguide</Title>
```

## Headline<Emojify emoji="💄" />

Pork belly you probably haven't heard of them ethical post-ironic hella, cray kale chips fashion axe chillwave shabby chic man bun slow-carb unicorn. Live-edge intelligentsia tumblr quinoa man braid.

```jsx
<Headline>Headline</Headline>
```

### Subheadline<Emojify emoji="💁‍♀️" />

Hexagon disrupt echo park brunch direct trade four dollar toast chartreuse, drinking vinegar wolf bushwick pork belly.

```jsx
<Subheadline>Subheadline</Subheadline>
```

#### SubSubheadline<Emojify emoji="👩‍🎤" />

Vexillologist sartorial literally venmo blog. Tumblr you probably haven't heard of them bitters swag waistcoat af.

```jsx
<SubSubheadline>SubSubheadline</SubSubheadline>
```

## Paragraph

<Paragraph>
  Pork belly you probably haven't heard of them ethical post-ironic hella, cray
  kale chips fashion axe chillwave shabby chic man bun slow-carb unicorn.
  Live-edge intelligentsia tumblr quinoa man braid. Hexagon disrupt echo park
  brunch direct
  <Emojify emoji="🖋" />
  trade four dollar toast chartreuse, drinking vinegar wolf bushwick pork belly.
  Vexillologist sartorial literally venmo blog.
</Paragraph>

<Paragraph>
  Raclette butcher gastropub, pok pok squid freegan kitsch lyft lumbersexual
  quinoa seitan vaporware hammock organic. Woke synth bitters chia lyft vice
  forage blog hell of. Semiotics mlkshk next level brooklyn heirloom flannel.
  Jean shorts fam tumblr, direct trade franzen flexitarian. Umami XOXO whatever
  lyft slow-carb kickstarter, health goth listicle glossier microdosing affogato
  meggings tote bag wolf williamsburg.
</Paragraph>

```jsx
<Paragraph>Lorem ipsum dolor amet …</Paragraph>
```

## Inline Styles

### Emphasis

There is **strong** text and _emphasised_ text. But also <b>bold</b> and <i>italic</i> text.

```md
There is **strong** text and _emphasised_ text. But also <b>bold</b> and <i>italic</i> text.
```

### Correction

If something is wrong, use ~~strike-through~~ (or <del>deleted</del>) to mark it as such.

```md
If something is wrong, use ~~strike-through~~ (or <del>deleted</del>) to mark it as such.
```

It’s also possible to mark the corrected version as <ins>inserted</ins> (sorry, no Markdown for that).

```md
It’s also possible to mark the corrected version as <ins>inserted</ins> (sorry, no Markdown for that).
```

### Subscript and Superscript

f(x, n) = log<sub>4</sub>x<sup>n</sup>

```md
f(x, n) = log<sub>4</sub>x<sup>n</sup>
```

### Footnotes

Some long sentence that has a footnote.[^1]
And another sentence[^2] with a footnote.
And a named footnote[^somename] is possible.

[^1]: Footnote for a full sentence after the sentence.
[^2]: Footnote for a word after the word.
[^somename]: Footnotes can be named.

```markdown
Some long sentence that has a footnote.[^1]
And another sentence[^2] with a footnote.
And a named footnote[^somename] is possible.

[^1]: Footnote for a full sentence after the sentence.
[^2]: Footnote for a word after the word.
[^somename]: Footnotes can be named.
```

### Mark

Sometimes in a text, a specific <mark>word</mark> or a bunch of <mark>words should be marked.</mark>

```md
<mark>word</mark>
```

## Horizontal Rules

---

## Lists

### Unordered Lists

- **Vegetables**
  - Tomatoe
  - Onion
  - Potatoe
  - Kale
  - Pea
- **Fruits**
  - Apple
  - Orange
  - Pear
  - Plum
  - Cherry

```md
- Item
- Item
- Item
```

### Ordered Lists

1. **Early Stoics**
   1. Zeno of Citium
   2. Cleanthes
   3. Chrysippus
   4. Diogenes of Babylon
   5. Antipater of Tarsus
   6. Panaetius
   7. Posidonius
2. **Younger Stoics**
   1. Seneca
   2. Musonius Rufus
   3. Epictetus
   4. Marcus Aurelius

```md
1. Item 1
2. Item 2
3. Item 3
```

### Checklists

- [x] Make breakfeast
- [x] Vacuum
- [ ] Go shopping
  - [x] Milk
  - [ ] Butter
  - [ ] Bread
- [ ] Read book

```md
- [ ] Unchecked item
- [x] Checked item
```

## Links

There are regular [Markdown](https://www.markdownguide.org/) links, which will be mapped to the `TextLink` component.

```md
[Markdown](https://www.markdownguide.org/)
```

It can also be used manually: <TextLink href="https://www.kogakure.de/">Link to my martial arts website</TextLink>. If the component has a `href` a regular `<a>` link will be generated.

```md
<TextLink href="https://www.kogakure.de/">…</TextLink>.
```

It’s also possible to use <TextLink to="/">Gatsby Router Links</TextLink>. If the component has the `to` property a router link will be used.

```md
<TextLink to="/">…</TextLink>
```

### More Link

<MoreLink to="/" /> or with <MoreLink to="/">Custom Text</MoreLink>

```md
<MoreLink to="/" />
<MoreLink to="/">Custom Text</MoreLink>
```

### Download Link

<DownloadLink href="/" /> or with <DownloadLink href="/">
  Custom Text
</DownloadLink>

```md
<DownloadLink href="/" />
<DownloadLink href="/">Custom Text</DownloadLink>
```

## Blockquote

### Markdown

> Flying is learning how to throw yourself at the ground and miss.

```md
> Flying is learning how to throw yourself at the ground and miss.
```

### Component (Markdown)

<Blockquote>

Flying is learning _how_ to throw yourself at the ground and miss.

</Blockquote>

```md
<Blockquote>

Flying is learning _how_ to throw yourself at the ground and miss.

</Blockquote>
```

### Component (HTML)

<Blockquote>
  <p>
    Flying is learning <em>how</em> to throw yourself at the ground and miss.
  </p>
</Blockquote>

```md
<Blockquote>
<p>Flying is learning <em>how</em> to throw yourself at the ground and miss.</p>
</Blockquote>
```

### German

<Blockquote lang="de">

Keine Zeit für Pessimismus.

</Blockquote>

```md
<Blockquote lang="de">

Keine Zeit für Pessimismus.

</Blockquote>
```

### Japanese

<Blockquote lang="ja">

悲観の時間がない

</Blockquote>

```md
<Blockquote lang="ja">

悲観の時間がない

</Blockquote>
```

### Multiple Paragraphs with Author and Source

<Blockquote author="Marcus Aurelius" source="Meditations, 2.1">
  <p>When you first rise in the morning tell yourself:</p>
  <p>
    I will encounter busybodies, ingrates, egomaniacs, liars, the jealous and
    cranks. They are all stricken with these afflictions because they don’t know
    the difference between good and evil.
  </p>
  <p>
    Because I have understood the beauty of good and the ugliness of evil, I
    know that these wrong-doers are still akin to me … and that none can do me
    harm, or implicate me in ugliness—nor can I be angry at my relatives or hate
    them. For we are made for cooperation.
  </p>
</Blockquote>

```md
<Blockquote author="Marcus Aurelius" source="Meditations, 2.1">
  <p>When you first rise in the morning tell yourself:</p>
  <p>I will encounter busybodies, ingrates, egomaniacs, liars, the jealous and cranks. They are all stricken with these afflictions because they don’t know the difference between good and evil.</p>
  <p>Because I have understood the beauty of good and the ugliness of evil, I know that these wrong-doers are still akin to me … and that none can do me harm, or implicate me in ugliness—nor can I be angry at my relatives or hate them. For we are made for cooperation.</p>
</Blockquote>
```

### Author

<Blockquote author="Douglas Adams">
  <p>Flying is learning how to throw yourself at the ground and miss.</p>
</Blockquote>

```md
<Blockquote author="Douglas Adams">
  <p>Flying is learning how to throw yourself at the ground and miss.</p>
</Blockquote>
```

### Source

<Blockquote source="The Hichhikers Guide to the Galaxy">
  <p>Flying is learning how to throw yourself at the ground and miss.</p>
</Blockquote>

```md
<Blockquote source="The Hichhikers Guide to the Galaxy">
  <p>Flying is learning how to throw yourself at the ground and miss.</p>
</Blockquote>
```

### Source with URL

<Blockquote
  source="Speech to the House of Commons"
  sourceUrl="https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill"
>
  <p>
    Many forms of Government have been tried, and will be tried in this world of
    sin and woe. No one pretends that democracy is perfect or all-wise. Indeed,
    it has been said that democracy is the worst form of government except all
    those other forms that have been tried from time to time.
  </p>
</Blockquote>

```md
<Blockquote source="Speech to the House of Commons" sourceUrl="https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill">
  <p>Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.</p>
</Blockquote>
```

### Author, Source and URL

<Blockquote
  author="Winston Churchill"
  source="Speech to the House of Commons"
  sourceUrl="https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill"
>
  <p>
    Many forms of Government have been tried, and will be tried in this world of
    sin and woe. No one pretends that democracy is perfect or all-wise. Indeed,
    it has been said that democracy is the worst form of government except all
    those other forms that have been tried from time to time.
  </p>
</Blockquote>

```md
<Blockquote author="Winston Churchill" source="Speech to the House of Commons" sourceUrl="https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill">
  <p>Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.</p>
</Blockquote>
```

## Pullquotes

<Pullquote>No time for pessimism.</Pullquote>

```md
<Pullquote>No time for pessimism.</Pullquote>
```

<Pullquote lang="de">Keine Zeit für Pessimismus.</Pullquote>

```md
<Pullquote lang="de">Keine Zeit für Pessimismus.</Pullquote>
```

<Pullquote lang="ja">悲観の時い</Pullquote>

```md
<Pullquote lang="ja">悲観の時い</Pullquote>
```

<Pullquote author="Annie Dillard">
  How we spend our days is, of course, how we spend our lives.
</Pullquote>

```md
<Pullquote author="Annie Dillard">
  How we spend our days is, of course, how we spend our lives.
</Pullquote>
```

<Pullquote source="The Writing Life">
  How we spend our days is, of course, how we spend our lives.
</Pullquote>

```md
<Pullquote source="The Writing Life">
  How we spend our days is, of course, how we spend our lives.
</Pullquote>
```

<Pullquote
  source="The Writing Life"
  sourceUrl="https://www.goodreads.com/book/show/12530.The_Writing_Life"
>
  How we spend our days is, of course, how we spend our lives.
</Pullquote>

```md
<Pullquote source="The Writing Life" sourceUrl="https://…">
How we spend our days is, of course, how we spend our lives.
</Pullquote>
```

<Pullquote author="Annie Dillard" source="The Writing Life">
  How we spend our days is, of course, how we spend our lives.
</Pullquote>

```md
<Pullquote author="Annie Dillard" source="The Writing Life">
  How we spend our days is, of course, how we spend our lives.
</Pullquote>
```

<Pullquote
  author="Annie Dillard"
  source="The Writing Life"
  sourceUrl="https://www.goodreads.com/book/show/12530.The_Writing_Life"
>
  How we spend our days is, of course, how we spend our lives.
</Pullquote>

```md
<Pullquote author="Annie Dillard" source="The Writing Life" sourceUrl="https://…">
How we spend our days is, of course, how we spend our lives.
</Pullquote>
```

## Inline Quotes

Peter said <q lang="en">She has to hand this over immediatly</q> and was quite angry.

```md
Peter said <q lang="en">She has to hand this over immediatly</q> and was quite angry.
```

Luke continued, <q lang="en">And then she called him a <q>scruffy-looking nerf-herder!</q> I think I’ve got a chance!</q> The poor naive fool …

```md
Luke continued, <q lang="en">And then she called him a <q>scruffy-looking nerf-herder!</q> I think I’ve got a chance!</q> The poor naive fool …
```

Peter sagte <q lang="de">Sie soll mir das sofort geben</q> und war ziemlich sauer.

```md
Peter sagte <q lang="de">Sie soll mir das sofort geben</q> und war ziemlich sauer.
```

Luke führte weiter aus, <q lang="de">Und sie nannte ihn einen <q>total blöd-aussehenen Idioten!</q> Ich denke ich habe eine Chance!</q> Dieser arme Idiot …

```md
Luke führte weiter aus, <q lang="de">Und sie nannte ihn einen <q>total blöd-aussehenen Idioten!</q> Ich denke ich habe eine Chance!</q> Dieser arme Idiot …
```

彼女は<q lang="ja">日本語に猫は<q>にゃん</q>と鳴く</q>と言った。

```md
彼女は<q lang="ja">日本語に猫は<q>にゃん</q>と鳴く</q>と言った。
```

## Verse

<Verse>

God guard me from those thoughts men think
In the mind alone;
He that sings a lasting song
Thinks in a marrow bone.

</Verse>

```md
<Verse>

God guard me from those thoughts men think
In the mind alone;
He that sings a lasting song
Thinks in a marrow bone.

</Verse>
```

<Verse variant="left">

God guard me from those thoughts men think
In the mind alone;
He that sings a lasting song
Thinks in a marrow bone.

</Verse>

```md
<Verse variant="left">

God guard me from those thoughts men think
In the mind alone;
He that sings a lasting song
Thinks in a marrow bone.

</Verse>
```

## Abbrevations

HTML and CSS. Abbrevations are autogenerated!

## Definitions

In the <dfn title="Age of Warring States">sengokujidai</dfn> era, the <dfn title="Covert agent and mercenary in feudal Japan">ninja</dfn> were used by the <dfn title="Powerful japanese feudal lords">daimyō</dfn> of Japan as spies, scouts or assassins to accomplish tasks that the <dfn title="Warrior caste of Japan">samurai</dfn> were unable to do due to their code of honor.

```md
<dfn title="Age of Warring States">sengokujidai</dfn>
```

## Ruby Annotations

This is a Japanese sentence with Ruby Annotation: <RubyAnnotation base="日" text="に" /><RubyAnnotation base="本" text="ほん" /><RubyAnnotation base="語" text="ご" />

```md
<RubyAnnotation base="日" text="に" />
```

## Code

### Inline Code

This is some inline code: `const myVar = 1;` which can be used inside a sentence.

```md
`const myVar = 1;`
```

### Keyboard Shortcuts

Please press <KeyboardShortcut>⌘</KeyboardShortcut> <KeyboardShortcut>⇧</KeyboardShortcut> <KeyboardShortcut>3</KeyboardShortcut> to create a screenshot on MacOS.

```md
<KeyboardShortcut>⌘</KeyboardShortcut>
```

### Sample

<Sample>Error -1</Sample>

```md
<Sample>Error -1</Sample>
```

### Variable

<Variable>count</Variable>

```md
<Variable>count</Variable>
```

### Code Blocks

```sh
npm install --save-dev gulp-webp@2.1.1
echo "Hello World"
```

```js
webp: {
  src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
  dest: productionAssets + '/images/',
  options: {}
},
```

```js{2,10-12}
var gulp = require("gulp");
var webp = require("gulp-webp");
var config = require("../../config").webp;

/**
 * Convert images to WebP
 */
gulp.task("webp", function () {
  return gulp
    .src(config.src)
    .pipe(webp(config.options))
    .pipe(gulp.dest(config.dest));
});
```

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_ACCEPT} image/webp
  RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
  RewriteRule (.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1]
</IfModule>

<IfModule mod_headers.c>
  Header append Vary Accept env=REDIRECT_accept
</IfModule>

AddType image/webp .webp
```

## Tables

| Table Header | Table Header | Table Header |
| ------------ | ------------ | ------------ |
| Table Cell   | Table Cell   | Table Cell   |
| Table Cell   | Table Cell   | Table Cell   |
| Table Cell   | Table Cell   | Table Cell   |
| Table Cell   | Table Cell   | Table Cell   |

## Components

### Emojify

import { EmojifyToggle } from "../layout/emojify-toggle";

This component shows Emoji only, if the user has opt-in for it.

Click this button to toggle ➜ <EmojifyToggle />

<Emojify emoji="😁" />

```jsx
<Emojify emoji="😁" />
```

### Spoiler

Hello. <Spoiler>This is a secret, if you **want** to see it you have to click it.</Spoiler> This is some more text, which is not a spoiler.

```jsx
<Spoiler>Hidden text</Spoiler>
```

It’s also possible to hide complete blocks of text:

<Spoiler block>

This is some **text**, which is _hidden_.

And some more text

</Spoiler>

```jsx
<Spoiler block>Hidden text in a block</Spoiler>
```

### Label

Default labels, for example for a TV show season <Flag label="1" /> or a time code <Flag label="1:09:57" />. And with a Link <Flag label="linked" href="https://www.stefanimhoff.de" />.

```jsx
<Flag label="1" />
<Flag label="1:09:57" />
<Flag label="1" href="https://www.test.de" />
```

Netflix: <NetflixFlag id="80014749" />

```jsx
<NetflixFlag id="80014749" />
```

Prime Video: <PrimeVideoFlag id="B0874XF36P" />

```jsx
<PrimeVideoFlag id="B0874XF36P" />
```

### Book

<Row variant="variable" marginBottom minWidth="150px">
  <Book
    alt="Example Book"
    src="https://dummyimage.com/150x200/888/fff"
    width="150"
  />
</Row>

```jsx
<Book
  alt="Example Book"
  src="https://dummyimage.com/150x200/888/fff"
  width="150"
/>
```

#### AmazonBook

<Row variant="variable" marginBottom minWidth="150px">
  <AmazonBook
    alt="Meditations by Marcus Aurelius"
    asin="0812968255"
    width="150"
  />
</Row>

```jsx
<AmazonBook
  alt="Meditations by Marcus Aurelius"
  asin="0812968255"
  width="150"
/>
```

### ColorSwatch

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: '20px', gridAutoRows: 'auto', marginBottom: '2rem' }}>

<ColorSwatch
  color="#005CAF"
  name="Lapis Lazuli"
  description="The soft, slightly purplish blue associated with the semi-precious stone."
/>

<ColorSwatch
  color="#0B346E"
  name="Royal Blue"
  description="A rich pruplish blue associated with the British royal family."
/>

</div>

```jsx
<ColorSwatch color="#005CAF" name="Lapis Lazuli" description="Description" />
```
