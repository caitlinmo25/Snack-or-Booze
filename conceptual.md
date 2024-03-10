What is React? When and why would you use it?
React is a JavaScript library for building user interfaces, primarily for web applications. Developed by Facebook, it enables developers to create large web applications that can change data, without reloading the page. React is used for its efficiency in rendering components and its ability to manage the state of the application effectively. You would use React when you need to build a dynamic, high-performance user interface with reusable components.


What is Babel?
Babel is a JavaScript compiler that allows you to use next-generation JavaScript, today. It converts ECMAScript 2015+ code into a backwards-compatible version of JavaScript that can be run by older JavaScript engines. Babel is widely used in the development process to ensure that JavaScript applications are compatible across all browsers.


What is JSX?
JSX is a syntax extension for JavaScript, recommended by React, that looks similar to XML or HTML. It allows developers to write the structure of the UI in the JavaScript code using HTML-like syntax, which then gets transformed into JavaScript objects by Babel.


How is a Component created in React?
A component in React can be created either as a function or as a class. A functional component is simply a JavaScript function that returns a React element, while a class component is a class that extends React.Component and has a render method that returns a React element.


What are some differences between state and props?
State is managed within the component (similar to variables declared within a function) and can be changed over time. State is used for data that changes over time or in response to user actions.
Props (short for properties) are read-only and are passed to the component (similar to function parameters) from a parent component. Props are used to pass data and event handlers down to child components.


What does "downward data flow" refer to in React?
Downward data flow in React refers to the principle that state should be owned by higher-level parent components and passed down to child components via props. This design principle helps to maintain cleaner, more predictable code and makes state management easier.


What is a controlled component?
A controlled component in React is a component that derives its current value from props and notifies changes to its value through callbacks like onChange. This means the React component's state is controlling the component's behavior. An example is an input form element whose value is controlled by React state.


What is an uncontrolled component?
An uncontrolled component in React is a component that maintains its own internal state and updates its value based on user input, without control by the React state. An example is a traditional HTML <input> element that uses a ref to retrieve its current value.


What is the purpose of the key prop when rendering a list of components?
The key prop is used by React to identify which items in the list are changed, added, or removed. This helps React manage and optimize the rendering of lists by reusing elements efficiently and maintaining state across re-renders.


Why is using an array index a poor choice for a key prop when rendering a list of components?
Using an array index as a key prop is a poor choice because it does not uniquely identify an item if the list's order changes. This can lead to performance issues and bugs, such as improper state management and re-rendering, because React cannot accurately identify and track the components.


Describe useEffect. What use cases is it used for in React components?
useEffect is a hook in React that allows you to perform side effects in function components. It is used for operations that don't fit into the render method, such as data fetching, setting up a subscription, or manually changing the DOM. useEffect can be configured to run after every render or only when certain values change by specifying dependencies.


What does useRef do? Does a change to a ref value cause a rerender of a component?
useRef is a hook that allows you to persist values across renders without causing a rerender of the component. It is used to access DOM elements directly, store a mutable value that does not cause re-renders when updated, and keep track of previous state values. Changing a ref value does not cause a component to rerender.


When would you use a ref? When wouldn't you use one?
You would use a ref for:
Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.


You wouldn't use a ref for:
Anything that can be done declaratively through React state.
Cases where you can use React's controlled component mechanism.


What is a custom hook in React? When would you want to write one?
A custom hook in React is a JavaScript function that starts with use and can call other hooks. It allows you to extract component logic into reusable functions. You would want to write a custom hook when you have component logic that needs to be reused across multiple components, such as data fetching, subscribing to a value, or interacting with a particular piece of state. Custom hooks offer a powerful way to share behavior and stateful logic across your application without repeating code.