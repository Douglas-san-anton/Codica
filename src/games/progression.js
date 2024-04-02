import run, { roundsCount } from '../index.js';
import { generateNumber } from '../utils.js';

const description = '¿Qué número falta en la progresión?';
const progressionLength = 6;

const generateRound = () => {
  const first = generateNumber(1, 10);
  const step = generateNumber(1, 10);
  const hiddenNumberIndex = generateNumber(0, progressionLength - 1);

  const question = Array.from({ length: progressionLength }, (_, i) =>
    i === hiddenNumberIndex ? '..' : String(first + i * step)
  ).join(' ');

  const answer = String(first + hiddenNumberIndex * step);

  return [question, answer];
};

export default () => {
  const rounds = Array.from({ length: roundsCount }, generateRound);
  run(description, rounds);
};
