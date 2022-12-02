const res: string[] = await Deno.readTextFile('./input.txt');
const data: string[] = res.split('\n');

// A - Rock - X
// B - paper - Y
// C - scissors - Z

enum POINTS {
  X = 1,
  Y,
  Z,
}

const SCORES = {
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  }
};



const total: number = data.reduce((pr, cur) => {
  const [elf, my] = cur.split(' ');
  const forSignPoints = POINTS[my];
  const gameScore = SCORES[elf][my];


  console.log('lala', forSignPoints, gameScore, elf, cur);


  return pr + forSignPoints + gameScore;
}, 0);


console.log('lala', total)