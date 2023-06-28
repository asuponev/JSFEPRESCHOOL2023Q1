import { ILevel } from '../types/index';

const levels: ILevel[] = [
  {
    id: 1,
    title: 'Select by tag',
    html: `
      <circle class="animate"></circle>
      <square></square>
      <circle></circle>
    `,
    markup: [
      '<div class="table">',
      '  <circle />',
      '  <square />',
      '  <circle />',
      '</div>',
    ],
    answer: 'circle',
  },
  {
    id: 2,
    title: 'Select by class',
    html: `
      <circle class="animate"></circle>
      <square class="animate"></square>
      <circle></circle>
    `,
    markup: [
      '<div class="table">',
      '  <circle class="red" />',
      '  <square class="red" />',
      '  <circle />',
      '</div>',
    ],
    answer: '.red',
  },
  {
    id: 3,
    title: 'Select by ID',
    html: `
      <circle></circle>
      <square>
        <circle></circle>
      </square>
      <circle class="animate"></circle>
    `,
    markup: [
      '<div class="table">',
      '  <circle id="red" />',
      '  <square  class="red">',
      '    <circle class="green" />',
      '  </square>',
      '  <circle id="green" />',
      '</div>',
    ],
    answer: '#green',
  },
];

export default levels;
