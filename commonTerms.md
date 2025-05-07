# Web Development for Absolute Beginners: Easy-to-Understand Terms

There's a lot of coding terminology that can be confusing, especially for beginners. Here’s a simple guide to help you understand some common coding terms using what I hope are easy-to-understand examples! Don't stress if you don't understand everything right away. Just like learning to stay afloat in the water, it takes practice and patience and willingness to face the water!

I've also added terminology that may not directly be related to CSS, but will be important and helpful to know if you are going to explore more web based coding in the future!

## What is a Website?
- **Website**: A place on the internet where you can find information, play games, or watch videos. It’s like a digital book or a store you can visit on your computer.

## Parts of a Website

- **Frontend**: This is the part of a website that you see and click on, like the buttons, pictures, and text. It's what you look at when you open a website.
- **Backend**: This is the part that works behind the scenes. It’s like the kitchen in a restaurant. You can’t see it, but it helps everything work.

## Simple Coding Words

- **HTML**: This is like the skeleton of a website. It gives the website its structure, like how a house needs a frame.
- **CSS**: This is what makes a website look pretty. It adds colors, sizes, and designs to the skeleton (HTML).
- **JavaScript**: This is like magic for websites! It makes things move, change, or happen when you click buttons, like animations or games.

## Other Important Terms

- **API**: This is like a waiter that helps different parts of the website talk to each other. If a website wants to get information, it asks the API. (*Not directly needed for CSS*)
- **Database**: Imagine a giant bookshelf where all the books (information) are stored. Websites use databases to store lots of things like names, pictures, and videos. (*Not directly needed for CSS*)
- **Responsive Design**: This means a website changes its look depending on what kind of device you’re using—like a phone or a computer. It’s like when a T-shirt fits both a child and an adult!

## Building Websites Right

- **KISS (Keep It Simple, Stupid)**: This means making things easy and not too complicated. Like keeping your room clean and simple.
- **DRY (Don’t Repeat Yourself)**: This is like not saying the same thing over and over. If you tell a joke once, it’s funny. If you say it ten times, it gets boring!

## Fun Stuff You Can Do with Websites

- **Single Page Application (SPA)**: A website that doesn’t need to load a new page. Everything happens on one page, like when you scroll down and see more of the game without leaving. (*Not directly needed for CSS*)
- **PWA (Progressive Web App)**: A website that acts like an app on your phone. You can open it, even if you don’t have internet, just like a game you play on your phone! (*Not directly needed for CSS*)

## How Websites Talk to Each Other

- **API**: It’s like a helper that talks to two friends. One friend asks for something, and the helper gets it for them. It’s like asking a teacher to pass a note from one friend to another! (*Not directly needed for CSS*)

# Common Coding Terms Explained

There's a lot of coding terminology that can be confusing, especially for beginners. Here’s a simple guide to help you understand some common coding terms using what I hope are easy-to-understand examples!

<!-- to do: add images to help represent the terminology. -->

These are some things I'lll be mentioning throughout the diary. I hope this helps you understand what I'm talking about!

**inline**
This means something is placed inside something else. Like a toy inside a box.

In coding, "inline" usually means writing code directly inside the HTML tag, instead of in a separate CSS or JavaScript file.

For example, an inline style looks like this:

```html
<p style="color: red;">This is red text.</p>
```

It’s usually CSS or JavaScript that’s placed right in the HTML.


**block**
Think of a block like a chunk or section of code that’s grouped together. In CSS or HTML, a block usually starts and ends with curly braces {} or tags like 
<div>...</div>.

Blocks help keep code organized — like putting related items into a box.

Example in CSS:

```css
p {
  color: blue;
  font-size: 16px;
}
```
This is a CSS block for paragraph elements.


*selectors*
A selector is how you tell CSS what to style. It's like pointing at something and saying, "I want to decorate that!"

There are different types of selectors, like:

* h1 (element selector aka type selector or tag selector)

* .box (class selector represented by the dot before the name)

* #header (ID selector, represented by the # before the name)
Example:

```css
h1 {
  color: purple;
}
```
This selector styles all the <h1> elements.

*attribute*
An attribute gives extra info about an HTML element — like a label or a tag on an item. It always goes inside the opening tag.

Example:

```html
<img src="cat.jpg" alt="A cute cat">
```
Here, src and alt are attributes of the <img> tag.




## Family Tree Terminology

**Parent**  
Imagine a big box that holds smaller boxes inside. The big box is the "parent" and the smaller boxes inside are the "children."

**Child**  
The smaller box that’s inside the bigger box. It gets its place and size from the bigger box.

**Sibling**  
Two boxes that are next to each other inside the big box. They are on the same level, so they’re "siblings."

**Ancestor**  
Think of your grandma or grandpa. They’re not in the same room, but they are still part of your family. In coding, the "ancestor" is an element that's higher up in the box structure.

**Descendant**  
These are the kids or grandkids of the big box. Any box inside another box is a "descendant."

**inheritance**

means some styles (like color or font-family) are passed from parent elements to their children — kind of like kids inheriting eye color from their parents.

Example:

```css
body {
  color: green;
}
```

```html
<body>
  <div>
    <p>Hello!</p>
  </div>
</body>
```
The <p> tag doesn’t have its own color, so it inherits green from the body.

***WARNINGL*** Not all CSS properties are inherited! Some, like margin, padding, or border, must be set directly.
---

## Layout and Structure Terminology

**Wrapper**  
A special box that holds everything together. It's like a gift wrap around a present.

**Root**  
The very first or top box that everything else comes from, like the starting point of a tree.

**Flex**  
Imagine you can stretch or shrink some boxes to fit better in a space. That's "flexing" in coding! (*CSS-related*)

**Breakpoint**  
A spot where things change. For example, your toys might be arranged differently on your table when you make space for a new toy. A breakpoint is like making space for a new toy! (*CSS-related*)

**Grid**  
A bunch of rows and columns that help organize things neatly, like a chessboard. (*CSS-related*)

---

## Interaction Terminology

**Hook**  
It’s like a special place where you can attach things to make them work, like putting a picture on the wall. (*Not directly needed for CSS*)
 
**Event**  
When something happens, like you pressing a button. An event is a way to say "Hey, something happened!" (*Not directly needed for CSS*)

**Container**  
A box that holds things inside it, like a toy chest where you keep your toys.

**Flow**  
This is the way things go, like how toys get picked up from the ground and put back on the shelf.

**Stack**  
Think of a stack of books. One book goes on top of another. It’s a pile, one on top of the other!

**Cascade**  
This means things happen in order, like when you drop water down the steps and it flows from one step to the next. (*CSS-related*)

---

## Code Organization and Practice

**Scope**  
It’s the area where something can be seen or used, like if you’re playing in a sandbox, that’s your "scope."

**Refactor**  
When you clean up or fix things, like organizing your toys in a better way without losing anything.

**Snippet**  
A small part of something. Imagine a small part of a bigger puzzle that you can use again later.

**Debugging**  
Finding mistakes and fixing them, like if your toy car doesn’t work, you figure out what’s wrong and fix it.

**Prototype**  
A first version of something, like drawing a picture before you paint it. (*Not directly needed for CSS*)

---

## Coding Concepts and Components

**Framework**  
A set of tools that help you build things faster, like a toy set that helps you make a house with blocks. (*Not directly needed for CSS*)

**Component**  
A small part that you can use over and over, like a Lego piece that fits into different parts of a Lego house.

**Dependency**  
If you need a tool to finish your job, like needing a paintbrush to finish painting, that's a "dependency." (*Not directly needed for CSS*)

---

## Advanced Coding Concepts

**Variables**  
A container for storing data. It's like a box where you can store your favorite color or number.

**Array**  
A collection of things (like toys) that are in a specific order. You can get any toy from the collection by telling it where it is, like the first toy, second toy, etc.

**Object**  
An object is like a toy with many parts. For example, a toy car has wheels, color, and size. Each of those parts is a "property" of the object.

**Function**  
A function is like a machine. You give it something, it does something with it, and then it gives you something back.

**Loop**  
A loop is when something keeps happening over and over, like playing a song on repeat or drawing a line over and over again.

**Conditional**  
A conditional is like a choice. If it’s raining, you bring an umbrella. If it’s sunny, you don’t. It’s a way of checking if something is true or false.

**Class**  
Think of a class like a blueprint for creating something. If you're building toy cars, the class is the instructions, and the cars you make are objects.

**Inheritance**  
Inheritance is like getting traits from your parents. In coding, a class can "inherit" features from another class, meaning it can do the same things.

**Encapsulation**  
Imagine putting something important inside a box and locking it. Only certain people can open it. Encapsulation hides certain parts of the code to protect them and makes things easier to understand.

**Asynchronous**  
Asynchronous means something happens in the background while other things keep going, like watching TV while the laundry is being done.

**Callback**  
A callback is like asking someone to call you back when they finish something. You tell the program to do something, and when it’s done, it "calls back" to do something else.

**API**  
An API is like a waiter at a restaurant. You tell the waiter what you want, and the waiter gets it from the kitchen for you. In coding, the API helps one program talk to another. (*Not directly needed for CSS*)

---

## Error and Security Handling

**Debugging**  
Debugging is finding problems (or bugs) in your code and fixing them, like looking for why your toy car isn’t working and fixing it.

**Promise**  
A promise is like a "I’ll do it later" agreement. The program promises to finish something, and when it’s done, it gives you the result.

**Dependency Injection**  
This is like having someone give you all the tools you need to do a job, instead of having to go find them yourself. (*Not directly needed for CSS*)

**Event Listener**  
An event listener is like a person waiting for a knock on the door. When something happens (the knock), the listener does something about it. (*Not directly needed for CSS*)

**Singleton**  
A singleton is a special kind of object that only exists once. It’s like having one favorite toy that you can’t have two of. (*Not directly needed for CSS*)

**Recursive**  
Recursion is when something repeats itself in a special way, like a story where the main character keeps telling the same story over and over until it reaches the end.

**Token**  
A token is like a ticket you get to enter a special event or access something. In coding, a token is often used for security to prove you have permission.

**Null**  
Null is like saying "nothing" or "empty." It means there’s nothing inside a box or variable.

**NaN (Not a Number)**  
NaN is when something is supposed to be a number, but it isn’t—like trying to add a number to a word. It’s a sign that something is wrong.

---

## Versioning and Collaboration

**Module**  
A module is like a toolbox. It’s a collection of tools (functions or code) that can be used in your project.

**Version Control**  
Version control is like having a history of all the versions of your work, so you can look back and see what you did and even go back to an earlier version if something goes wrong.

**Repository**  
A repository is like a storage space where all your work is kept, such as a box where you put all your drawings.

**Pull Request**  
A pull request is like asking to show your work to the teacher. You’re saying, “Hey, I’ve finished something and want to add it to the class project.”

**Merge**  
Merging is when two separate things are combined into one. It’s like two pieces of a puzzle coming together to form a bigger picture.
