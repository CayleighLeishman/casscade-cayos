# Advanced CSS Cheatsheet 

I asked ChatGPT to help me create a **cheatsheet** for CSS, so I can reuse this when I get stuck on a topic or a final project for example. It's packed with cool stuff that will make any websites awesome.

---
##  **Color Formats (HSL / HSLA)**

HSL stands for **Hue, Saturation, and Lightness**. It's a way to pick colors. 
Think of it like picking a crayon color.

- **Hue**: This is the color itself, like red, blue, or green.
- **Saturation**: How bright or dull the color is.
- **Lightness**: How light or dark the color is.

You can also make the color **see-through** by adding an **alpha** value, 
like making it fade!

### Example:
```css
hsl(122, 39%, 49%)       /* a bright green */
hsla(122, 39%, 49%, 0.4) /* a green with some see-through (40% opacity) */
```
# CSS Selectors 🧭

CSS Selectors allow you to select elements on your web page so you can apply 
styles to them. It’s like pointing to things and telling CSS what to do with them.

---

## Types of CSS Selectors:

### 1. **Element Selector**
This selects elements by their tag name (like `div`, `p`, `h1`).

```html
<body>
  <p>This paragraph will be styled using the element selector in CSS.</p>
  <p>Another paragraph, styled the same way.</p>
</body>
```

```css
p {
  color: blue;
}
```
### 2. **Class Selector**
This selects elements with a specific class. You use "." to tell CSS "This is a class!" 
it's where you learned about "." "," ";" and so forth in class!
```html
<body>
  <div class="button">Click me!</div>
  <div class="button">Another button</div>
</body>

```

```css
.button {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
```

### 3. **ID Selector**
This selects a specific element with a unique ID. I think of instagram with #, 
and its a personal way too identify soemthing, In class thers a group you learn from
with instagram you can see others but you learned what # did on your own.
It's typically used for more selective features where it wont apply to many 
(also better to use for JAvascript if i remember right)

```html
<body>
  <!-- note the "id=" part. This is what defines the header -->
  <div id="header">This is the header section</div>
</body>

```

```css
#header {
   font-size: 24px;
  font-weight: bold;
  color: darkblue;
}
```

### 4. **Universal Selector**
This selects aLL elements on a page

```html
<body>
  <!-- All elements below will have margin and padding removed because of the universal selector -->
  <h1>This heading will have no margin or padding by default</h1>
  <p>This paragraph also has no padding or margin</p>
  <div>This div too!</div>
</body>

```

```css
* {
  margin: 0;
  padding: 0;
}
```
### 5. **Attribute Selector**

This selects elements with a specific attribute.

```html:
<body>
  <input type="text" placeholder="Enter your name">
  <input type="password" placeholder="Enter your password">
</body>
````

```css
input[type="text"] {
  border: 1px solid #ccc;
  padding: 8px;
}
```

### 6. **Descendant Selector**
This selects elements that are inside other elements.
```html
<body>
  <div>
    <p>This paragraph is inside a div and will be styled.</p>
  </div>
  <p>This paragraph is not inside the div and won't be styled.</p>
</body>

```

```css
div p {
  color: green;
}
```

### 7. **Child Selector**
This selects elements that are directly inside a parent.

```html
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <div>
    <p>This paragraph is not a child of the div and won't be styled.</p>
  </div>
</body>

```

```css
ul > li {
  color: orange;
  font-weight: bold;
}
```


### 8. **Adjacent Sibling Selector**
This selects elements that are immediately after a certain element.
```html
<body>
  <h1>This is a heading</h1>
  <p>This paragraph will be styled because it's immediately after the heading.</p>
  <p>This paragraph will not be styled because it comes after another paragraph.</p>
</body>
```

```css
h1 + p {
  font-size: 18px;
  color: purple;
}
```

### 9. **Pseudo-classes**

These allow you to target elements in specific states, like
when they're hovered over or clicked.

```html
<body>
  <a href="#">Hover over me!</a>
</body>
```

```css
a:hover {
  color: red;
  text-decoration: underline;
}
```

### 10. **Grouping Selectors**
You can group selectors to apply the same styles to multiple elements.
```html
<body>
  <h1>Title</h1>
  <h2>Subtitle</h2>
  <h3>Another heading</h3>
</body>

```

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: navy;
}
```

### 11.Combining Selectors

You can combine selectors to get more specific with your styles! For example:

```html
<body>
  <!-- This div has the class "button" so the combined selector div.button will apply -->
  <div class="button">This styled button is a div</div>

  <!-- This span also has class "button", but the style WON'T apply because it's not a div -->
  <span class="button">This will NOT be styled by div.button</span>

  <!-- This div has no class, so it won't be styled -->
  <div>This plain div will not be styled</div>
</body>

```

```css
div.button {
  background-color: teal;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
```

-  Only elements that are both a <div> and have the class .button get the styles.

-  The <span class="button"> is ignored because it’s not a <div>.

-  A <div> without the .button class is also ignored.

---
# 12. Attribute Selector: 































































