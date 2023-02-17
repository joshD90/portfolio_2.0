import { staticInfo } from "./static/staticInfo";
import { eCommerceInfo } from "./eCommerce/eCommerceInfo";
import { chessInfo } from "./chess/chessInfo";
import { kanbanInfo } from "./kanban/kanbanInfo";

type GridSpan = {
  xl: number[];
  lg: number[];
  md: number[];
};

export type Project = {
  bannerImage: string;
  title: string;
  description: string;
  gridSpan: GridSpan;
  highlights: string;
  techs: string[];
  gitLink: string;
  siteLink: string;
  motivation: string[];
  keyLearnings: string[];
  link: string;
};

export const projectArray: Project[] = [
  eCommerceInfo,
  chessInfo,
  kanbanInfo,
  staticInfo,
];
