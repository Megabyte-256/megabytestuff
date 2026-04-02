const text = document.getElementById("text");
const button = document.getElementById("clicker");
const click1 = document.getElementById("buy");
const clickinfo = document.getElementById("clickinfo");
const nextPrice = document.getElementById("nextPrice");
const savebutton = document.getElementById("savebutton");

let clicks = 0;
let clickNumber = 1;
let clickCost = 25;

// Update UI on start
nextPrice.textContent = `${clickCost} per extra click.`;

button.onclick = () => {
    clicks = clicks + clickNumber;
    text.textContent = clicks;
};

click1.onclick = () => {
    if (clicks >= clickCost) {
        clicks -= clickCost;
        clickNumber += 1;
        clickinfo.textContent = `You have ${clickNumber - 1} extra click(s).`;
        text.textContent = clicks;
        clickCost = clickCost * 1.25 + clickNumber * 5;
        clickCost = Math.round(clickCost)
        nextPrice.textContent = `${clickCost} per extra click.`;
    } else {
        alert("too broke loser lol");
    }
};

// --- SAVING LOGIC ---
savebutton.onclick = function() {
    const data = {
        noofclicks: clicks,
        extraclicks: clickNumber,
        currentCost: clickCost // Save the cost too so it doesn't reset!
    };
    localStorage.setItem("saveData", JSON.stringify(data));
    alert("game saved bro");
};

// --- LOADING LOGIC ---
function load() {
    const storagedata = localStorage.getItem("saveData");
    
    if (storagedata) {
        let loader = JSON.parse(storagedata);
        
        // Update variables
        clicks = loader.noofclicks;
        clickNumber = loader.extraclicks;
        clickCost = loader.currentCost || 25; // Default to 25 if not found

        // Update the UI to match the loaded numbers
        text.textContent = clicks;
        clickinfo.textContent = `You have ${clickNumber - 1} extra click(s).`;
        nextPrice.textContent = `${clickCost} per extra click.`;
    }
}

// Automatically load when the page opens
load();