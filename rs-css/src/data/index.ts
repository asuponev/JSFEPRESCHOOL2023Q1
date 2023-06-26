import { ILevel } from '../types/index';

const levels: ILevel[] = [
  {
    id: '1',
    title: 'Select by tag',
    markup: `
      <circle></circle>
      <square></square>
      <circle></circle>
    `,
    answer: 'circle',
  },
  {
    id: '2',
    title: 'Select by class',
    markup: `
      <circle class="red"></circle>
      <square class="red"></square>
      <circle></circle>
    `,
    answer: '.red',
  },
  {
    id: '3',
    title: 'Select by ID',
    markup: `
      <circle id="red"></circle>
      <square class="red">
        <circle class="green"></circle>
      </square>
      <circle id="green"></circle>
    `,
    answer: '#green',
  },
];

export default levels;
