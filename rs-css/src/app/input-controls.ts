import { ANSWER_FORM, BTN_HELP, CSS_INPUT } from '../constants/elements';
import levels from '../data/index';
import getCurrentLevel from '../services/getCurrentLevel';
import saveProgress from '../services/saveProgress';
import LevelsControls from './levels-controls';

export default class InputControls {
  private form: HTMLFormElement | null;
  private input: HTMLInputElement | null;
  private btnHelp: HTMLButtonElement | null;

  constructor() {
    this.form = ANSWER_FORM;
    this.input = CSS_INPUT;
    this.btnHelp = BTN_HELP;

    this.input?.focus();
    this.form?.addEventListener('submit', (e: Event) => this.checkAnswer(e));
    this.btnHelp?.addEventListener('click', () => this.printAnswer());
  }

  private checkAnswer(event: Event): void {
    event.preventDefault();
    const currentLevel = getCurrentLevel();
    const animateElements = document.querySelectorAll('.animate');
    const answers = levels[currentLevel - 1].answers;

    if (this.input?.value && answers.includes(this.input.value.trim())) {
      this.input.value = '';
      saveProgress(currentLevel);
      animateElements?.forEach((el): void => el.classList.add('done'));
      setTimeout((): void => {
        new LevelsControls().setLevel(currentLevel + 1);
      }, 500);
    } else {
      animateElements?.forEach((el) => el.classList.add('error'));
      setTimeout((): void => {
        animateElements?.forEach((el) => el.classList.remove('error'));
      }, 500);
    }
  }

  private printAnswer(): void {
    const currentLevel = getCurrentLevel();
    const answers = levels[currentLevel - 1].answers;

    if (this.input) this.input.value = '';
    answers[0].split('').forEach((letter, i): void => {
      setTimeout((): void => {
        if (this.input) this.input.value += letter;
      }, i * 200);
    });
  }
}
