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
    answers: ['circle'],
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
    answers: ['.red'],
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
    answers: ['#green', 'circle#green'],
  },
  {
    id: 4,
    title: 'Select by context',
    html: `
      <circle></circle>
      <square>
        <circle class="animate"></circle>
      </square>
      <circle></circle>
      <square>
        <circle class="animate"></circle>
      </square>
      <square>
        <circle class="animate"></circle>
      </square>
    `,
    markup: [
      '<div class="table">',
      '  <circle class="red" />',
      '  <square>',
      '    <circle class="red" />',
      '  </square>',
      '  <circle class="red" />',
      '  <square class="blue">',
      '    <circle id="red" />',
      '  </square>',
      '  <square>',
      '    <circle class="red" />',
      '  </square>',
      '</div>',
    ],
    answers: ['square circle'],
  },
  {
    id: 5,
    title: 'Select a neighbor',
    html: `
      <circle></circle>
      <square>
        <circle></circle>
      </square>
      <circle></circle>
      <square class="animate"></square>
      <square>
        <circle></circle>
      </square>
    `,
    markup: [
      '<div class="table">',
      '  <circle class="red" />',
      '  <square class="blue">',
      '    <circle class="red" />',
      '  </square>',
      '  <circle id="red" />',
      '  <square class="blue" />',
      '  <square class="blue">',
      '    <circle class="red" />',
      '  </square>',
      '</div>',
    ],
    answers: ['#red + square', '#red+square'],
  },
  {
    id: 6,
    title: 'Select neighbors',
    html: `
    <circle></circle>
    <square>
      <circle></circle>
    </square>
    <circle></circle>
    <square class="animate"></square>
    <square class="animate">
      <circle></circle>
    </square>
    `,
    markup: [
      '<div class="table">',
      '  <circle class="red" />',
      '  <square class="blue">',
      '    <circle class="red" />',
      '  </square>',
      '  <circle id="red" />',
      '  <square class="blue" />',
      '  <square class="blue">',
      '    <circle class="red" />',
      '  </square>',
      '</div>',
    ],
    answers: ['#red ~ square', '#red~square'],
  },
  {
    id: 7,
    title: 'Select with NOT',
    html: `
    <circle class="animate"></circle>
    <square>
      <circle class="animate"></circle>
    </square>
    <circle></circle>
    <square>
      <circle class="animate"></circle>
    </square>
    <square>
      <circle class="animate"></circle>
    </square>
    `,
    markup: [
      '<div class="table">',
      '  <circle />',
      '  <square class="blue">',
      '    <circle />',
      '  </square>',
      '  <circle id="red" />',
      '  <square>',
      '    <circle class="red" />',
      '  </square>',
      '  <square>',
      '    <circle class="red" />',
      '  </square>',
      '</div>',
    ],
    answers: ['circle:not(#red)'],
  },
  {
    id: 8,
    title: 'Select by attribute',
    html: `
    <circle></circle>
    <square>
      <circle class="animate"></circle>
    </square>
    <circle class="animate"></circle>
    <square>
      <circle></circle>
    </square>
    <square>
      <circle class="animate"></circle>
    </square>
    `,
    markup: [
      '<div class="table">',
      '  <circle />',
      '  <square class="blue">',
      '    <circle title="hello" />',
      '  </square>',
      '  <circle id="red" title="hello" />',
      '  <square>',
      '    <circle class="red" />',
      '  </square>',
      '  <square>',
      '    <circle class="red" title="hello" />',
      '  </square>',
      '</div>',
    ],
    answers: ['circle[title]'],
  },
  {
    id: 9,
    title: 'Select all colored',
    html: `
    <circle class="animate"></circle>
    <square class="animate">
      <circle class="animate"></circle>
    </square>
    <circle></circle>
    <square>
      <circle class="animate"></circle>
    </square>
    <square class="animate">
      <circle class="animate"></circle>
    </square>
    `,
    markup: [
      '<div class="table">',
      '  <circle id="red" />',
      '  <square class="blue">',
      '    <circle class="red" />',
      '  </square>',
      '  <circle id="nocorners" />',
      '  <square id="example">',
      '    <circle class="red" />',
      '  </square>',
      '  <square id="blue">',
      '    <circle class="red" />',
      '  </square>',
      '</div>',
    ],
    answers: [
      '#red, #blue, .red, .blue',
      '#red, .red, #blue, .blue',
      '#red, .blue, .red, #blue',
      '#red, .red, .blue, #blue',
      '#blue, .blue, .red, #red',
      '#blue, .red, .blue, #red',
      '.blue, .red, #blue, #red',
      '.red, .blue, #red, #blue',
      '.red, #red, .blue, #blue',
      '.blue, #blue, .red, #red',
    ],
  },
  {
    id: 10,
    title: 'Select all',
    html: `
    <circle class="animate"></circle>
    <square class="animate">
      <circle class="animate"></circle>
    </square>
    <circle class="animate"></circle>
    <square class="animate">
      <circle class="animate"></circle>
    </square>
    <square class="animate">
      <circle class="animate"></circle>
    </square>
    `,
    markup: [
      '<div class="table">',
      '  <circle />',
      '  <square class="blue">',
      '    <circle />',
      '  </square>',
      '  <circle id="red" />',
      '  <square>',
      '    <circle class="red" />',
      '  </square>',
      '  <square>',
      '    <circle class="red" />',
      '  </square>',
      '</div>',
    ],
    answers: [
      '*',
      'circle, square',
      'square, circle',
      'circle,square',
      'square,circle',
    ],
  },
];

export default levels;
