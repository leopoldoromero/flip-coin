window.onload = function() {
    console.log('Loaded')
};

function flipCoin() {
    const coinSide = Math.random() < 0.5 ? 'heads' : 'tails';
    const coinSideTextElement = document.getElementById('coin-side-text');
    const coinImgElement = document.getElementById('coin-img');
    coinImgElement.setAttribute('src', `/resources/${coinSide}.svg`)
    coinSideTextElement.textContent = coinSide;
}