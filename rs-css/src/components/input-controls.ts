import { ANSWER_FORM, BTN_HELP, CSS_INPUT } from '../constants/elements';
import levels from '../data/index';
import getCurrentLevel from '../services/getCurrentLevel';
import saveProgress from '../services/saveProgress';
import LevelsControls from './levels-controls';

export default class InputControls {
  private form: HTMLFormElement | null;
  private inputElement: HTMLInputElement | null;
  private btnHelp: HTMLButtonElement | null;

  constructor() {
    this.form = ANSWER_FORM;
    this.inputElement = CSS_INPUT;
    this.btnHelp = BTN_HELP;

    this.inputElement?.focus();
    this.form?.addEventListener('submit', (e: Event) => this.checkAnswer(e));
    this.btnHelp?.addEventListener('click', () => this.printAnswer());
  }

  private checkAnswer(event: Event) {
    event.preventDefault();
    const currentLevel = getCurrentLevel();
    const animateElements = document.querySelectorAll('.animate');
    const answers = levels[currentLevel - 1].answers;

    if (this.inputElement?.value && answers.includes(this.inputElement.value)) {
      this.inputElement.value = '';
      saveProgress(currentLevel);
      animateElements?.forEach((el) => el.classList.add('done'));
      setTimeout(() => {
        new LevelsControls().setLevel(currentLevel + 1);
      }, 500);
    } else {
      animateElements?.forEach((el) => el.classList.add('error'));
      setTimeout(() => {
        animateElements?.forEach((el) => el.classList.remove('error'));
      }, 500);
    }
  }

  private printAnswer() {
    const currentLevel = getCurrentLevel();
    const answers = levels[currentLevel - 1].answers;

    if (this.inputElement) this.inputElement.value = '';
    answers[0].split('').forEach((letter, i) => {
      setTimeout(() => {
        if (this.inputElement) this.inputElement.value += letter;
      }, i * 200);
    });
  }
}
