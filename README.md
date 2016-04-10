cassidoo.co
==============

My personal website, version 4! Build from scratch using the awesome power of
SVGs, ES6, the Fetch API, and of course HTML and CSS.

## How it's built

### SVGs
Thanks to some great SVG logos found online, I combined the `path`s of all of them
into one larger SVG file.  Pulling from that file in the HTML was pretty
straightforward, you only have to use the `id` of the `path` to stick it in!

```html
<svg viewBox="0 0 32 32"><use xlink:href="icons.svg#github"></svg>
```

And styling them was pretty easy, using the `fill` and `filter` properties.

### ES6 + the Fetch API
I really wanted to check out template literals and the Fetch API to populate the
content of the site.  So, all of the "about me" style text was built with both!

I made a couple easily editable JSON files to make maintaining information about
me and what I'm doing super simple.  You can check those out for yourself in the
`contents` folder.  To get them into the HTML, I pulled the information from
them with `fetch`, and then shoved the variables into a template literal string!

It was pretty straightforward, because template literals can have expressions in
the string.  So, for example, there's a line on my website that mentions my
hobbies.  I randomly pick one and put it in the string like this:

```js
In addition to ${info.hobbies[Math.floor(Math.random()*info.hobbies.length)]},
one of my favorite things to do is...
```

### The Design
One thing that I had wanted to really mess with was CSS filters and gradients.
So, I did just that!  You'll notice that the background of the website is
constantly changing color.  That's done exclusively with CSS.  The background of
the site is just a gradient blown up:

```
background: linear-gradient(316deg, #ffdf79, #ed747f, #e371d4, #8d5993, #9771e3);
background-size: 600% 600%;
```

And to get the color to change around, I just shift the gradient over time.

```
animation: gradientShift 18s ease infinite;

...

@keyframes gradientShift {
  0%{background-position:24% 0;}
  50%{background-position:77% 100%;}
  100%{background-position:24% 0;}
}
```

In terms of the transitions between states when someone wants to read my "about"
section, that needed a touch of JavaScript to make it happen.  The effect is
done with all CSS, when a `blur` class is added on the click event.

The really interesting thing that I ran into is that even though adding a blur
to SVGs is super simple (literally just `filter: blur(20px);`), making text
blurry is a whole other animal.  You actually have to make the text transparent,
and then make a `text-shadow` for the blur.  It's only a couple lines, but it's
weird:

```
color: transparent;
text-shadow: 0 0 40px rgba(255,255,255,.4);
```

There's a few little `:hover` events I threw in there to make the site more fun,
like the spinning of the close button and the shift upward of the icons.  Those
were just for fun and again, all in CSS.

## Future stuff?
Now that the core part of the site is done and public, I plan on adding some
Easter eggs!  The plan is to hide a bunch of things in key commands and maybe
some mouse movements, if I can figure it out.

If you find a bug or issue on the site, please make an Issue or email me!

Thanks for reading!
