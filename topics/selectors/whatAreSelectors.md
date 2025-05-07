# What Exactly Are Selectors?

In CSS, **selectors** are patterns we use to choose which HTML elements we want to style. Well... I'll be honest, this is where my brain started to hurt quite a bit. But don’t worry, I'm getting the hang of this!! Let’s break it down together.

**NOTE** If ANY explinations in my documents left you feeling a bit lost, that's okay! Remember, this is my journal of how chaotic and brilliant learning can be! Dont be afraid to explore different resources. I'm just sharing this because I had to think of it this way to get it to fit in my brain. Also remember this is simplified way to explain things, but it helped me understand better:

## Element Types

Element types (like <p>, <h1>, <button>) are like last names—at least in the U.S. and Canada. They're used in legal documents, when addressing professors, greeting church members, or filling out forms.

They’re specific, and they only apply to certain things. Just like how a <p> is always for paragraphs and an <h1> is always for top-level headings, element types clearly define what kind of content you're dealing with.

For example, <div> is an element type. It’s like a family name that just groups stuff together—a container for other content.

here's an exmaple

```
<div>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</div>
```
Can you guess which ones are element types in the example above?

<details> <summary> Click to reveal the answer</summary> <p><code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;p&gt;</code> "div" "p" and "h1"!</p> </details>

you can apply CSS styles to these element types in your CSS file. For example, if you wanted to make all <h1> elements blue, you could write:

```css
/* This will make all <p> text color blue */
p {
  color: blue;
}
/* this will make the header stay at font size 2em */
h1 {
  font-size: 2em;  
}
```

This means every <p> element will have blue text, and every <h1> will appear larger.

Notice that I didn’t include <div> in this CSS but I did for the others—it’s still an element type, but we’re just not styling it here. That’s totally fine! Sometimes <div> is just a container, and you only style the contents.

## Classes

Classes are like middle names. This might seem a bit confusing, but in my family, I share my middle name with the women on my mom's side—and we all have a stubborn streak. If someone has the middle name "Marie," you can bet she’s strong-willed!

In CSS, classes group similar elements together, just like how people in the same family might share a middle name and a few personality traits. You can apply the same style to multiple elements that share the same class.

```html

<div>
  <h1 class="marie">This is a heading with the class name "marie"</h1>

  <p class="marie">This is a paragraph element type with the class "marie"</p>

  <h1>another heading, without the class name "marie"</h1>

  <p>another paragraph element type, without the class "marie"</p>
</div>

```
now we can style the class "marie" in our css file. 

```css
/* Note that I used a dot "." before typing marie — that's how you tell CSS "hey this will be a "class=" not "id="*/
.marie {
  /* Text turns red: the color of stubbornness and passion */
  color: red;
}
```
This makes both the <h1> and <p> with in that elements with the class "marie" turn red—the color of passion and strong will (and my hair)!

By using a class like "marie", you can style specific groups of elements all at once, without affecting everything. If you had ten <p></p>'s but only wanted two of them to have red texts, just give those few the class="marie" and leave the others alone.

you could also use it in the <div> element instead, like this:
    
```html 

<div class="marie">
  <h1>This is a heading with the class name "marie"</h1>
  <p>This is a paragraph element type with the class "marie"</p>
</div>

<!-- this does not have the class marie, and the css .marie, will not apply to this div. -->
<div>
  <h1>another heading, without the class name "marie"</h1>
  <p>another paragraph element type, without the class "marie"</p>
</div>

```
Note though, if you have a class on a *parent* element, it will apply to all the children elements inside of it. So if you have a <div> with the class "marie", all the elements inside that <div> will also be styled with the same class. This is like how a family name can be passed down to all the kids in a family.

IDs are like unique identifiers—think of them like first names that only belong to one person in the room. Just like you might be the only "Cayleigh" in your friend group, an ID in CSS is meant for one specific element.

IDs are similar to classes, but there's a big difference:
🔹 Classes can be shared.
🔸 IDs are one-of-a-kind.

Let’s say we have a <div id="cayleigh">—that ID will only apply to that one div, and nothing else. You can use it to give that element its own special style, like a red background, without affecting other <div>s.

```html
Copy code
<div id="cayleigh">
  <h1>This is a heading inside the div with ID "cayleigh"</h1>
  <p>This paragraph is also inside that same div.</p>
</div>

<div>
  <h1>This is a heading inside a different div with no class or Id/</h1>
  <p>This paragraph is also inside that different div.</p>
  <p> In this case, the class "marie" will not apply to this div.</p>
  <p> So the text will not be red.</p>
</div>
```

```css
/* Note the # symbol! That’s how you select an ID in CSS */
#cayleigh {
  background-color: red;
  color: white;
  padding: 1em;
}
```
Now only the <div id="cayleigh"> has a red background and white text. The other <div> stays unchanged!


____
### Bringing it In All together 
So, when we use CSS, the browser starts at the "parent" (the element type) and then looks for classes or IDs to apply more specific styles—
just like how families have general rules (for all "kids"), but also personal preferences for each individual family member.

If this analogy didn’t make sense to you, that’s okay! It’s what worked for my brain, and your brain probably has its own unique way of learning.

## Quick Summary
Here’s a quick summary of the different types that can be used in a selector (with simplified explanations and examples):

* **Element types** are HTML tags like p, h1, or button.
Style them directly like this:

```css

p {
  color: blue;
}

```
* Classes are reusable.
HTML: <div class="marie">
CSS: .marie {font-style: italic; }

* IDs are unique.
HTML: <section id="intro">
CSS: #intro { background-color: yellow; }

Selectors let you control the look and layout of your HTML elements, and once you understand how they work, designing with CSS becomes much easier.

### Okay, Cayleigh, great, but how can we put that into action?
Great question, my friend!
Let’s look at some examples of how I used selectors in the selectors.css to style the HTML elements.

**NOTE: This parts a work in progress. Once I complete the underesstanding of selectors and how I can use selector.css and selector.html I will update this section!**

### Examples of Selectors in Action
<!-- trade this for the examples you use in the selector.html -->
1. Element Selector
So in the [html file-name], we have the following elements:

```html

<!-- input code here from the selector.html page -->

 ```
In the CSS, if we wanted to use the element type selector, we would do something like this:

css
```
/* input code here from the selector.html page */

```

2. Class Selector
html
```
<!-- input code here from the selector.html page -->

```
So you see, [name of class] is the class="..." that is found in the HTML code above.

css
```

/* input class selector code here from the selector.html page or code snippet above */

```

3. ID Selector
html
```
<!-- input code here from the selector.html page -->

```
So you see, [name of id] is the id="..." found in the HTML code above.


```css
/* input id selector code here from the selector.html page or code snippet above */
```

Now lets go to learn about sepcificity! [not implemented yet](-insert-link-when-ready)






