export interface ICar {
  id: number;
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IResponseCars {
  data: ICar[];
  count: string;
}

export interface IResponseWinners {
  data: IWinner[];
  count: string;
}

export interface IEnginePerformance {
  velocity: number;
  distance: number;
}

export interface IEngineStatus {
  success: boolean;
}

export type HTMLElements = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

export interface IElement {
  id: string;
  element: HTMLElements;
}
