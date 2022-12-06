const res: string[] = await Deno.readTextFile('./input.txt');

let num = 0;
const buffer = {};

for (const i in res) {
  const letter = res[i];

  if (buffer[letter]) {
    buffer[letter] += 1;
  } else {
    buffer[letter] = 1;
  }

  if (i >= 3) {
    const firstLetter = res[i - 4];

    if (buffer[firstLetter] > 1) {
      buffer[firstLetter] -= 1;
    } else {
      delete buffer[firstLetter];
    }
  }

  if (Object.keys(buffer).length === 4) {
    num = Number(i) + 1;
    break;
  }

}


console.log('sss', num);