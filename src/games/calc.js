import run, { roundsCount } from '../index.js';
import { generateNumber } from '../utils.js';

const description = '¿Cuál es el resultado de la expresión?';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Operador desconicido: ${operator}`);
  }
};

const generateRound = () => {
  const number1 = generateNumber(1, 20);
  const number2 = generateNumber(1, 20);

  const operators = '+-*';

  const indexOperator = generateNumber(0, operators.length - 1);
  const operator = operators[indexOperator];
  const answer = String(calculate(operator, number1, number2));

  const question = `${number1} ${operator} ${number2}`;

  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }

  run(description, rounds);
};
