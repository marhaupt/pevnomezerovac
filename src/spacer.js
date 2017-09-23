function spacer() {
  const wrongSpaced = document.getElementById('wrongspaced').value;
  let betterSpaced = [];

  const dangerous = ['a', 'i', 'o', 'u', 'k', 's', 'v', 'z'];

  let splitText = wrongSpaced.split(" ");

  console.log(splitText);

  splitText.map((word) => {
    if(dangerous.includes(word)) {
      word +='&nbsp;';
    } else {
      word +=' ';
    }

    betterSpaced.push(word);
  });

  console.log(betterSpaced);

  let output = betterSpaced.join('');

  console.log(output);

  document.getElementById("nobreakspaced").value = output;

  // TODO: mezera na konci
  // TODO: jednotky
  // TODO: tituly
  // TODO: formátovaný výstup (zvlášť funkce)
  // TODO: automaticky do schránky (clipboard.js)
  // TODO: GitHub pages
}

document.getElementById('clicker').addEventListener('click', spacer, false);