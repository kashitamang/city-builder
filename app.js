// import functions and grab DOM elements


const typeDropdown = document.getElementById('type-dropdown');
const environmentDropdown = document.getElementById('environment-dropdown');
const apocalypseDropdown = document.getElementById('apocalypse-dropdown');

const typeEl = document.getElementById('type');
const environmentEl = document.getElementById('environment');
const apocalypseEl = document.getElementById('apocalypse');

const reportEl = document.getElementById('report-element');

const sloganEl = document.getElementById('slogan-element');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

// let state
let typeCount = 0;
let environmentCount = 0;
let apocalypseCount = 0;

let slogans = [];

// set event listeners 

//event listener for type dropdown on 'change'
typeDropdown.addEventListener('change', () => {
//get value of type dropdown (log value of dropdown to the console)
    console.log('changing city type to:', typeDropdown.value);
//update the DOM for the typeCount state
    typeCount++;
//update the DOM for the type picture (use style.backgroundImage on typeEl)
    typeEl.style = `background-image: url(./assets/${typeDropdown.value}.jpeg)`;
//update the state to show the new count of types by calling the displayStats() function
    displayStats();
});

//event listener for environmentDropdown on 'change'
environmentDropdown.addEventListener('change', () => {
  //get value of type dropdown (log value of dropdown to the console)
    console.log('changing environment type to:', environmentDropdown.value);
  //update the DOM for the typeCount state
    environmentCount++;
  //update the DOM for the type picture (use style.backgroundImage on typeEl)
    environmentEl.style = `background-image: url(./assets/${environmentDropdown.value}.jpeg)`;
  //update the state to show the new count of types by calling the displayStats() function
    displayStats();
});

//event listeners for apocalypseDropdown on 'change'
//event listener for environmentDropdown on 'change'
apocalypseDropdown.addEventListener('change', () => {
  //get value of type dropdown (log value of dropdown to the console)
    console.log('changing apocalypse type to:', apocalypseDropdown.value);
  //update the DOM for the typeCount state
    apocalypseCount++;
  //update the DOM for the type picture (use style.backgroundImage on typeEl)
    apocalypseEl.style = `background-image: url(./assets/${apocalypseDropdown.value}.jpeg)`;
  //update the state to show the new count of types by calling the displayStats() function
    displayStats();
});


// get user input
sloganButton.addEventListener('click', () => {
//get value of slogan and push to new slogan array in state
    slogans.push(sloganInput.value);
    console.log(sloganInput.value);
//clear out the form input value so its empty to the user 
    sloganInput.value = '';
    sloganEl.classList.remove('disappear');
//update state by calling display Slogans function
    displaySlogans();
});

// use user input to update state 
// update DOM to reflect the new state

//report stats

function displayStats(){
//text content of the reportEl to tell the user how many times they have changed the dropdown menu items
    reportEl.textContent = `You have changed your city type ${typeCount} times, the environment ${environmentCount} times, and the apocalypse ${apocalypseCount} times.`;
}

function displaySlogans() {
//clear out the DOM for the currently displayed catchphrases
    sloganEl.textContent = '';
//oop through each slogan in state
    for (let sloganInput of slogans){
        console.log(slogans);
//for each slogan create an HTML element with the catchphrase as its text content
        const newSlogans = document.createElement('div');
//append that HTML element to the cleared-out DOM 
        document.getElementById('slogan-element').appendChild(newSlogans);
        newSlogans.textContent = `"${sloganInput}"`;
    }

}
