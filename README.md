1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById() → selects one element by id

getElementsByClassName() → selects multiple elements by class (HTMLCollection)

querySelector() → selects first element using CSS selector

querySelectorAll() → selects all matching elements (NodeList)

2. Create and insert a new element into the DOM
const div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);

Steps: create → add content → insert

3. What is Event Bubbling?
Answer: 
 Event Bubbling means an event starts from the target element and moves upward to parent elements.

Example:
Click button → button → div → body → document

4. What is Event Delegation? Why useful?

Event Delegation = add one event listener to a parent instead of many children.

 Why useful?
 
Answer:Better performance

Works for dynamically added elements

Cleaner code

5. Difference between preventDefault() and stopPropagation()

preventDefault() → stops default browser action
(e.g., stop form submit, stop link redirect)

stopPropagation() → stops event bubbling
