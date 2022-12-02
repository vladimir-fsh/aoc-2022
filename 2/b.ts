const res: string[] = await Deno.readTextFile('./input.txt');
const data: string[] = res.split('\n');

// A - Rock - X
// B - paper - Y
// C - scissors - Z

//x - lose
//y - draw
//z win

enum POINTS {
  X = 1,
  Y,
  Z,
}

const MY_SIGN = {
  X: {
    A: 'Z',
    B: 'X',
    C: 'Y',
  },
  Y: {
    A: 'X',
    B: 'Y',
    C: 'Z',
  },
  Z: {
    A: 'Y',
    B: 'Z',
    C: 'X',
  }
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
  const [elf, stategy] = cur.split(' ');
  const my = MY_SIGN[stategy][elf];
  const forSignPoints = POINTS[my];
  const gameScore = SCORES[elf][my];

  return pr + forSignPoints + gameScore;
}, 0);


console.log('lala', total)