# Symbol Assets

Drop SVG files here to automatically compile and recompile an SVG sprite.

If you don't plan using SVG sprites, you may delete this folder and the associated task config in `gulpfile.js/config.json`.

## Tasks and Files
### SVG Sprite Task
```
gulpfile.js/tasks/svgSprite
```

Generates an SVG Sprite! You can reference the image like this.

```html
<svg viewBox="0 0 1 1"><use xlink:href='images/spritesheets/sprites.svg#my-icon' /></use></svg>
```

Because this is still a problem in IE, the [svgxuse](https://github.com/Keyamoon/svgxuse) library is added by default.

I've included a helper to generate the required svg markup in `src/templates/macros/helpers.html`, so you can just do:
```html
  {{ icon('close') }}
```
Which spits out:

```html
  <svg
      class="o-icon o-icon-close"
      aria-hidden="true"
      role="presentation"
  >
      <use xlink:href="images/symbols.svg#close"></use>
  </svg>
```

By default, icons inherit the fill from the value of currentColor!

We recommend: 
- setting up your SVGs on a 512 x 512 canvas,
- making the width (or height, whichever is the largest) 450px,
- centering your artwork, 
- expanding/combining as much as possible. This last step is important. [Read more on SVG optimization here!](https://www.viget.com/articles/5-tips-for-saving-svg-for-the-web-with-illustrator)
