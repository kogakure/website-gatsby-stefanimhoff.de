# Spoiler

A component hiding a part of a text visually from the user. A click on the `<Spoiler />` will remove the mask and show the text.

```md
Hello. <Spoiler>This is a secret.</Spoiler> This is some more text, which is not a spoiler.
```

It’s also possible to use it as block to hide multiple paragraphs.

```md
<Spoiler layout="block">

This is some text, which is _hidden_.

And some more text

</Spoiler>
```
