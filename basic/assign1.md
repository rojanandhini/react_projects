What is Emmet?

Emmet is an essential toolkit for web developers that boosts HTML, XML, and CSS coding speed by transforming concise, CSS-style abbreviations into full code snippets. It supports dynamic formatting, custom snippets, and integrates into popular code editors like VS Code, Sublime Text, and JetBrains IDEs.

Difference between a Library and Framework?

The fundamental difference between a library and a framework is Inversion of Control (IoC). 

Library: It is a collection of pre-written codes. We are in control. We call the library's functions whenever and wherever we need them in our code.
Framework: The framework is in control. It provides a "skeleton" or blueprint, and it calls our code at specific points in the application's lifecycle. 

What is CDN? Why do we use it?

Content Delivery Network is a globally distributed network of servers designed to deliver web content to users as quickly and reliably as possible.  

Why is React known as React?

React is named for its core design principle: the user interface "reacts" to changes in data.
Original Prototype: Before it was called React, the first version of the library was an internal prototype named FaxJS, created by Jordan Walke in 2011.
The Logo: The React Logo—an atom with revolving electrons—further emphasizes this theme. It represents how atoms participate in chemical reactions and how individual components (the "atoms" of the UI) come together to build complex interfaces.

What is crossorigin in the script tag?

The crossorigin attribute in a <script> tag tells the browser to use CORS (Cross-Origin Resource Sharing) when fetching a script from a different domain. 

What is the difference between React and ReactDOM?

React is the engine that handles logic and components, while ReactDOM is the specialized tool that renders those components specifically into a web browser's DOM. 

What is the difference between react.development.js and react.production.js files via CDN?

The primary difference between react.development.js and react.production.js is their optimization for either the developer or the end-user. 

What is async and defer?

The async and defer attributes are used in the <script> tag to manage how JavaScript is fetched and executed without blocking the browser's ability to render the page.
Use async for scripts that don't care about the DOM and don't depend on other scripts. Popular examples include Google Analytics or tracking pixels.
Use defer for your main application logic or libraries like jQuery that need to interact with HTML elements or must load in a specific sequence.