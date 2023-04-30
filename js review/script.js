// document.getElementById('count-el').innerText = 7
const button = document.getElementById('increment-btn');
var countEl = document.getElementById('count-el');
var saveEl = document.getElementById('save-el');
var refreshEl = document.getElementById('refresh-btn');
var saveButton = document.getElementById('save-btn');


var count = 0;
    function increment() {
    count += 1;
    countEl.textContent = count;
};

// var saved = count; 
function save() {
    var countStr = count + ' -';
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function refreshment() {
    var count = 0;
    count = 0;
    countEl.textContent = 0;
    var reset = 'Previous Entries : ';
    saveEl.textContent = reset;

};

 




















