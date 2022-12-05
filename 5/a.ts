const res: string[] = await Deno.readTextFile('./input.txt');
const data: string[] = res.split('\n');

const stacks = {
  1: ['R', 'G', 'H', 'Q', 'S', 'B', 'T', 'N'],
  2: ['H', 'S', 'F', 'D', 'P', 'Z', 'J'],
  3: ['Z', 'H', 'V'],
  4: ['M', 'Z', 'J', 'F', 'G', 'H'],
  5: ['T', 'Z', 'C', 'D', 'L', 'M', 'S', 'R'],
  6: ['M', 'T', 'W', 'V', 'H', 'Z', 'J'],
  7: ['T', 'F', 'P', 'L', 'Z'],
  8: ['Q', 'V', 'W', 'S'],
  9: ['W', 'H', 'L', 'M', 'T', 'D', 'N', 'C']
}


const moveItems = (from, to, count) => {
  const items = stacks[from].splice(-count).reverse();
  stacks[to].push(...items)
};



for (const str of data) {
  const [count, from, to] = str.match(/\d+/g).map(Number);
  moveItems(from, to, count);
}


console.log('lsssssa', Object.values(stacks).map(arr => arr[arr.length-1]).join(''));