const text = document.getElementById("text");
const button = document.getElementById("clicker");
const click1 = document.getElementById("buy");
const clickinfo = document.getElementById("clickinfo")
const nextPrice = document.getElementById("nextPrice")
let clicks = 0;
let clickNumber = 1
let clickCost = 25

nextPrice.textContent = `${clickCost} per extra click.`;


button.onclick = () => {
    clicks = clicks + clickNumber
    text.textContent = clicks;
    document.cookie = ``

}
click1.onclick = () => {
    if (clicks >= clickCost) {
        clicks -= clickCost;
        clickNumber += 1;
        clickinfo.textContent = `You have ${clickNumber - 1} extra click(s).`;
        text.textContent = clicks;
        clickCost = clickCost*2 + 5
        nextPrice.textContent = `${clickCost} per extra click.`;
    } else{
        alert("too broke loser lol");
    }
}