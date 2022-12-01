
const results = await Deno.readTextFile('./input.txt');
const depths:string[] = results.split('\n');
const arr: number[] = [];

let pos = 0;
let max = 0;

for (let i = 0; i < depths.length; i++) {
  if (depths[i] === '') {
    pos++;
  } else {
    const num = Number(depths[i]);

    if (!arr[pos]) {
      arr[pos] = num
    }
    else {
      arr[pos] += num;
    }
    max = Math.max(max, arr[pos]);
  }
}

console.log('bob', max);