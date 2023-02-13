import chessBanner from "./chessProjBanner.png";
import lodgeBanner from "./cssProjBanner.png";
import eCommerceBanner from "./eCommerceProjBanner.png";

export type Project = {
  bannerImage: string;
  title: string;
  description: string;
  gridPos: number[];
};

export const projectArray: Project[] = [
  {
    bannerImage: chessBanner,
    title: "Chess Site",
    description: "This is just Chess App",
    gridPos: [1, 2, 1, 3],
  },
  {
    bannerImage: lodgeBanner,
    title: "Static Page",
    description: "A static page for an Uncle's Lodge",
    gridPos: [3, 2, 1, 2],
  },
  {
    bannerImage: eCommerceBanner,
    title: "E-Commerce Website",
    description: "A fully functioning mock-up for an e-commerce website",
    gridPos: [3, 2, 3, 2],
  },
];
