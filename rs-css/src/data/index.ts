import { ILevel } from '../types/index';

const levels: ILevel[] = [
  {
    id: 1,
    title: 'Select by tag',
    html: `
      <circle class="animate" data-html-element="1"></circle>
      <square data-html-element="2"></square>
      <circle data-html-element="3"></circle>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle />', dataAttr: '1' },
      { line: '  <square />', dataAttr: '2' },
      { line: '  <circle />', dataAttr: '3' },
      { line: '</div>' },
    ],
    answers: ['circle'],
  },
  {
    id: 2,
    title: 'Select by class',
    html: `
      <circle class="animate" data-html-element="1"></circle>
      <square class="animate" data-html-element="2"></square>
      <circle data-html-element="3"></circle>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle class="red" />', dataAttr: '1' },
      { line: '  <square class="red" />', dataAttr: '2' },
      { line: '  <circle />', dataAttr: '3' },
      { line: '</div>' },
    ],
    answers: ['.red'],
  },
  {
    id: 3,
    title: 'Select by ID',
    html: `
      <circle data-html-element="1"></circle>
      <square data-html-element="2">
        <circle data-html-element="3"></circle>
      </square>
      <circle class="animate" data-html-element="4"></circle>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle id="red" />', dataAttr: '1' },
      { line: '  <square  class="red">', dataAttr: '2' },
      { line: '    <circle class="green" />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="green" />', dataAttr: '4' },
      { line: '</div>' },
    ],
    answers: ['#green', 'circle#green'],
  },
  {
    id: 4,
    title: 'Select by context',
    html: `
      <circle data-html-element="1"></circle>
      <square data-html-element="2">
        <circle class="animate" data-html-element="3"></circle>
      </square>
      <circle data-html-element="4"></circle>
      <square data-html-element="5">
        <circle class="animate" data-html-element="6"></circle>
      </square>
      <square data-html-element="7">
        <circle class="animate" data-html-element="8"></circle>
      </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle class="red" />', dataAttr: '1' },
      { line: '  <square>', dataAttr: '2' },
      { line: '    <circle class="red" />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle class="red" />', dataAttr: '4' },
      { line: '  <square class="blue">', dataAttr: '5' },
      { line: '    <circle id="red" />', dataAttr: '6' },
      { line: '  </square>', dataAttr: '5' },
      { line: '  <square>', dataAttr: '7' },
      { line: '    <circle class="red" />', dataAttr: '8' },
      { line: '  </square>', dataAttr: '7' },
      { line: '</div>' },
    ],
    answers: ['square circle'],
  },
  {
    id: 5,
    title: 'Select a neighbor',
    html: `
      <circle data-html-element="1"></circle>
      <square data-html-element="2">
        <circle data-html-element="3"></circle>
      </square>
      <circle data-html-element="4"></circle>
      <square class="animate" data-html-element="5"></square>
      <square data-html-element="6">
        <circle data-html-element="7"></circle>
      </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle class="red" />', dataAttr: '1' },
      { line: '  <square class="blue">', dataAttr: '2' },
      { line: '    <circle class="red" />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="red" />', dataAttr: '4' },
      { line: '  <square class="blue" />', dataAttr: '5' },
      { line: '  <square class="blue">', dataAttr: '6' },
      { line: '    <circle class="red" />', dataAttr: '7' },
      { line: '  </square>', dataAttr: '6' },
      { line: '</div>' },
    ],
    answers: ['#red + square', '#red+square'],
  },
  {
    id: 6,
    title: 'Select neighbors',
    html: `
    <circle data-html-element="1"></circle>
    <square data-html-element="2">
      <circle data-html-element="3"></circle>
    </square>
    <circle data-html-element="4"></circle>
    <square class="animate" data-html-element="5"></square>
    <square class="animate" data-html-element="6">
      <circle data-html-element="7"></circle>
    </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle class="red" />', dataAttr: '1' },
      { line: '  <square class="blue">', dataAttr: '2' },
      { line: '    <circle class="red" />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="red" />', dataAttr: '4' },
      { line: '  <square class="blue" />', dataAttr: '5' },
      { line: '  <square class="blue">', dataAttr: '6' },
      { line: '    <circle class="red" />', dataAttr: '7' },
      { line: '  </square>', dataAttr: '6' },
      { line: '</div>' },
    ],
    answers: ['#red ~ square', '#red~square'],
  },
  {
    id: 7,
    title: 'Select with NOT',
    html: `
    <circle class="animate" data-html-element="1"></circle>
    <square data-html-element="2">
      <circle class="animate" data-html-element="3"></circle>
    </square>
    <circle data-html-element="4"></circle>
    <square data-html-element="5">
      <circle class="animate" data-html-element="6"></circle>
    </square>
    <square data-html-element="7">
      <circle class="animate" data-html-element="8"></circle>
    </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle />', dataAttr: '1' },
      { line: '  <square class="blue">', dataAttr: '2' },
      { line: '    <circle />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="red" />', dataAttr: '4' },
      { line: '  <square>', dataAttr: '5' },
      { line: '    <circle class="red" />', dataAttr: '6' },
      { line: '  </square>', dataAttr: '5' },
      { line: '  <square>', dataAttr: '7' },
      { line: '    <circle class="red" />', dataAttr: '8' },
      { line: '  </square>', dataAttr: '7' },
      { line: '</div>' },
    ],
    answers: ['circle:not(#red)'],
  },
  {
    id: 8,
    title: 'Select by attribute',
    html: `
    <circle data-html-element="1"></circle>
    <square data-html-element="2">
      <circle class="animate" data-html-element="3"></circle>
    </square>
    <circle class="animate" data-html-element="4"></circle>
    <square data-html-element="5">
      <circle data-html-element="6"></circle>
    </square>
    <square data-html-element="7">
      <circle class="animate" data-html-element="8"></circle>
    </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle />', dataAttr: '1' },
      { line: '  <square class="blue">', dataAttr: '2' },
      { line: '    <circle title="hello" />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="red" title="hello" />', dataAttr: '4' },
      { line: '  <square>', dataAttr: '5' },
      { line: '    <circle class="red" />', dataAttr: '6' },
      { line: '  </square>', dataAttr: '5' },
      { line: '  <square>', dataAttr: '7' },
      { line: '    <circle class="red" title="hello" />', dataAttr: '8' },
      { line: '  </square>', dataAttr: '7' },
      { line: '</div>' },
    ],
    answers: ['circle[title]'],
  },
  {
    id: 9,
    title: 'Select all colored',
    html: `
    <circle class="animate" data-html-element="1"></circle>
    <square class="animate" data-html-element="2">
      <circle class="animate" data-html-element="3"></circle>
    </square>
    <circle data-html-element="4"></circle>
    <square data-html-element="5">
      <circle class="animate" data-html-element="6"></circle>
    </square>
    <square class="animate" data-html-element="7">
      <circle class="animate" data-html-element="8"></circle>
    </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle id="red" />', dataAttr: '1' },
      { line: '  <square class="blue">', dataAttr: '2' },
      { line: '    <circle class="red" />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="nocorners" />', dataAttr: '4' },
      { line: '  <square id="example">', dataAttr: '5' },
      { line: '    <circle class="red" />', dataAttr: '6' },
      { line: '  </square>', dataAttr: '5' },
      { line: '  <square id="blue">', dataAttr: '7' },
      { line: '    <circle class="red" />', dataAttr: '8' },
      { line: '  </square>', dataAttr: '7' },
      { line: '</div>' },
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
    <circle class="animate" data-html-element="1"></circle>
    <square class="animate" data-html-element="2">
      <circle class="animate" data-html-element="3"></circle>
    </square>
    <circle class="animate" data-html-element="4"></circle>
    <square class="animate" data-html-element="5">
      <circle class="animate" data-html-element="6"></circle>
    </square>
    <square class="animate" data-html-element="7">
      <circle class="animate" data-html-element="8"></circle>
    </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <circle />', dataAttr: '1' },
      { line: '  <square class="blue">', dataAttr: '2' },
      { line: '    <circle />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="red" />', dataAttr: '4' },
      { line: '  <square>', dataAttr: '5' },
      { line: '    <circle class="red" />', dataAttr: '6' },
      { line: '  </square>', dataAttr: '5' },
      { line: '  <square>', dataAttr: '7' },
      { line: '    <circle class="red" />', dataAttr: '8' },
      { line: '  </square>', dataAttr: '7' },
      { line: '</div>' },
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
