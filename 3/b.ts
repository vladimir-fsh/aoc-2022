const res: string[] = await Deno.readTextFile('./input.txt');
const data: string[] = res.split('\n');

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = [...alpha, ...alpha].map((x, i) =>
  i < 26 ? String.fromCharCode(x).toLocaleLowerCase() : String.fromCharCode(x)
);

let sum = 0;

for (let i = 0; i < data.length; i+=3) {
  const checked = {};
  const [a, b, c] = [data[i], data[i+1], data[i+2]];

  let j = 0;
  let letter;

  while (j < a.length) {
    letter = a[j];

    if (!checked[letter]) {
      checked[letter] = true;

      if (b.indexOf(letter) !== -1 && c.indexOf(letter) !== -1) {
        break;
      }
    }

    j++;
  }

  sum += alphabet.indexOf(letter) + 1;
}

console.log('lala', sum)