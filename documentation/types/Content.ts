export interface Content {
  title: string;
  texts: JSX.Element[];
  cards: {
    img: string;
    title: string;
    text: string;
    level: number;
  }[];
}
