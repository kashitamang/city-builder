## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

TODO

BUILD HTML in index.html
✅ title 
✅ dropdowns
✅ picture divs
✅ slogan input
✅ slogan button
✅ slogan divs
✅ reports div

BUILD CSS in home.css
✅ grab images
✅ assign to css property via ID's with background-image asset
✅ build proper containers for divs to display default images in 

BUILD JAVASCRIPT in app.js

// import functions and grab DOM elements
✅ declare 3 dropdown variables
✅ declare 3 elements for city div
✅ declare report element 
✅ declare slogans element
✅ declare slogan input 
✅ declare slogans button 

// set state for how many times the user changes the type, environment, and apocalypse using let 
✅ type count
✅ environment count
✅ apocalypse count

//set state for slogans with empty string
✅ slogan 

//event listeners for type dropdown on 'change'
-get value of type dropdown (log value of dropdown to the console)
-update the DOM for the typecount state
-update the DOM for the type picture (use style.backgroundImage on typeEl)
-update the state to show the new count of types by calling the displayStats() function 

//event listeners for environment dropdown on 'change'
-get value of environment dropdown (log value of dropdown to the console)
-update the DOM for the environmentcount state
-update the DOM for the type picture (use style.backgroundImage on environmentEl)
-update the state to show the new count of types by calling the displayStats() function 

//event listeners for apocalypse dropdown on 'change'
-get value of apocalypse dropdown (log value of dropdown to the console)
-update the DOM for the apocalypsecount state
-update the DOM for the type picture (use style.backgroundImage on apocalypseEl)
-update the state to show the new count of types by calling the displayStats() function 

//event listeners for button on 'click'
-get value of slogan
-push that value to new array in state
-clear out the forms input.value by assigning to an empty string
-update the dom to show the new slogans byt calling displaySlogans() function;

//create displayStats() Function
-text content of the report el to tell thr use ho many times they have changed a piece of state using template literals 

//create displaySlogans() Function
-clear out DOM for the currently displayed slogans 
-loop through each slogan in state 
-for each new slogan create and html element with the slogan as its text content
-append that HTML element to the cleared-out DOM