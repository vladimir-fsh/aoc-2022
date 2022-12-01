
const results = await Deno.readTextFile('./input.txt');
const depths:string[] = results.split('\n');
const arr: number[] = [];

let pos = 0;

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
  }
}

const sum = arr.sort((a,b) => b - a).slice(0, 3).reduce((pr, cur) => pr + cur, 0);


console.log('bob', sum);