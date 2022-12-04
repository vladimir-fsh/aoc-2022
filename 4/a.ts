const res: string[] = await Deno.readTextFile('./input.txt');
const data: string[] = res.split('\n');

// [ "2-4,6-8", "2-3,4-5", "5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8" ]

const sum:number = data.reduce((acc, cur)=> {
  const [rangeA, rangeB] = cur.split(',');
  const [startA, endA] = rangeA.split('-');
  const [startB, endB] = rangeB.split('-');


  if (Number (startA) <= Number(startB) && Number(endA) >= Number(endB) ||
      Number (startB) <= Number(startA) && Number(endB) >= Number(endA)
    ) {
    acc+=1;
  }

  return acc;
}, 0);

console.log('lsssssa', sum)