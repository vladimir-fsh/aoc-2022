const res: string[] = await Deno.readTextFile('./input.txt');

let num = 0;
const buffer = {};
const minLetters = 14;

for (const i in res) {
  const letter = res[i];

  if (buffer[letter]) {
    buffer[letter] += 1;
  } else {
    buffer[letter] = 1;
  }

  if (i >= minLetters) {
    const firstLetter = res[i - minLetters];

    if (buffer[firstLetter] > 1) {
      buffer[firstLetter] -= 1;
    } else {
      delete buffer[firstLetter];
    }
  }

  if (Object.keys(buffer).length === minLetters) {
    num = Number(i) + 1;
    break;
  }

}


console.log('sss', num);