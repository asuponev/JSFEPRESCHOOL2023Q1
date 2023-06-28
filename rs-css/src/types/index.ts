interface IMarkup {
  line: string;
  dataAttr?: string;
}

export interface ILevel {
  id: number;
  title: string;
  answers: string[];
  html: string;
  markup: IMarkup[];
}
