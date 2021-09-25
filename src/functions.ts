export default function sum(...numbers: number[]): Promise<number> {
  return new Promise<number>((resolve) => {
    resolve(numbers.reduce((a, b) => a + b));
  });
}

const mySum = await sum(1, 2, 3);

console.log(mySum);
