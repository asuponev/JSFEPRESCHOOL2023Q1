import { ILevel } from '../types/index';

const levels: ILevel[] = [
  {
    id: 1,
    title: 'Select by tag',
    html: `
      <circle class="animate" data-html-element="1"></circle>
      <square data-html-element="2"></square>
      <circle class="animate" data-html-element="3"></circle>
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
      { line: '  <circle class="figure" />', dataAttr: '1' },
      { line: '  <square class="figure" />', dataAttr: '2' },
      { line: '  <circle />', dataAttr: '3' },
      { line: '</div>' },
    ],
    answers: ['.figure'],
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
      { line: '  <square  class="blue">', dataAttr: '2' },
      { line: '    <circle class="red" />', dataAttr: '3' },
      { line: '  </square>', dataAttr: '2' },
      { line: '  <circle id="figure" />', dataAttr: '4' },
      { line: '</div>' },
    ],
    answers: ['#figure', 'circle#figure'],
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
      { line: '  <square />', dataAttr: '5' },
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
    title: 'Select all colored selectors',
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
    title: 'Select all the odd balls on the field',
    html: `
      <field data-html-element="1">
        <ball class="animate" data-html-element="2"></ball>
        <ball data-html-element="3"></ball>
        <ball class="animate" data-html-element="5"></ball>
      </field>
      <ball data-html-element="5"></ball>
      <field data-html-element="6">
        <ball class="animate" data-html-element="7"></ball>
        <ball data-html-element="8"></ball>
        <ball class="animate" data-html-element="9"></ball>
      </field>
      <square data-html-element="10">
        <ball data-html-element="11"></circle>
      </square>
    `,
    markup: [
      { line: '<div class="table">' },
      { line: '  <field class="field">', dataAttr: '1' },
      { line: '    <ball />', dataAttr: '2' },
      { line: '    <ball class="ball" />', dataAttr: '3' },
      { line: '    <ball />', dataAttr: '4' },
      { line: '  </field>', dataAttr: '1' },
      { line: '  <ball id="ball" />', dataAttr: '5' },
      { line: '  <field>', dataAttr: '6' },
      { line: '    <ball />', dataAttr: '7' },
      { line: '    <ball />', dataAttr: '8' },
      { line: '    <ball class="ball" />', dataAttr: '9' },
      { line: '  </field>', dataAttr: '6' },
      { line: '  <square>', dataAttr: '10' },
      { line: '    <ball class="ball" />', dataAttr: '11' },
      { line: '  </square>', dataAttr: '10' },
      { line: '</div>' },
    ],
    answers: [
      'field ball:nth-child(2n+1)',
      'field ball:nth-child(2n+1), .field ball:nth-child(2n+1)',
    ],
  },
  {
    id: 11,
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
