import lodgeBanner from "./cssProjBanner.png";
import { Project } from "../projectArray";

export const staticInfo: Project = {
  bannerImage: lodgeBanner,
  title: "Static Page",
  description:
    "This is a page for a Holiday Lodge where I took a focus on CSS and Design.  This page includes parralax scrolling",
  gridSpan: { xl: [2, 3], lg: [2, 3], md: [2, 3] },
  highlights:
    "The Highlight of this project is the implementation of parralax and the creation of a natural feel to the page to reflect the countryside residence of this Lodge",
  techs: ["React", "Styled-Components", "NginX"],
  gitLink: "https://github.com/joshD90/bnw-vintage",
  siteLink: "https://lodge.joshuadanceywebdev.ie",
  motivation: [
    "This was a site I made for a Rental Lodge which was in need of website revamped",
    "I created this site as most of my work so far had been focused on code rather than design aspects",
    "I wanted to take on a project that would allow me to engage with parallax and more complex responsive design",
  ],
  keyLearnings: ["Incorporating parallax with a React Project"],
};
