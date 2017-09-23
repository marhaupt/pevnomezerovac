// Github Pages
// velká písmena
// mezera na konci
// formátovaný výstup (zvlášť funkce)
// TODO: tituly
// TODO: jednotky
// do schránky (clipboard.js)s
// TODO: do schránky automaticky?

(function(){
  new Clipboard('#copier');
})()

function spacer() {
  const loadedText = document.getElementById('wrongspaced').value;

  let loadedTextArray = loadedText.split(' ');

  let output = dealWithSpaces(loadedTextArray);

  showFormattedResult(output);

  document.getElementById('wrongspaced').value = output;

  document.getElementById('copier').classList.remove('hidden');
}

function dealWithSpaces(textInArray) {
  const dangerous = ['a', 'i', 'o', 'u', 'k', 's', 'v', 'z'];
  let betterSpacedArray = [];

  // console.log(textInArray);

  textInArray.map(word => {
    if (dangerous.includes(word.toLowerCase())) {
      word += '&nbsp;';
    } else {
      word += ' ';
    }

    betterSpacedArray.push(word);
  });

  // console.log(betterSpacedArray);

  let correctedText = betterSpacedArray.join('').slice(0, -1);

  return correctedText;
}

function showFormattedResult(text) {
  let unformatted = text.split('&nbsp;');

  document.getElementById('formatted-output').innerHTML = unformatted.join('<em>&amp;nbsp;</em>');
}

document.getElementById('clicker').addEventListener('click', spacer, false);
