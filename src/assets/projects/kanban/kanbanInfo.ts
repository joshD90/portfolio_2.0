import { Project } from "../projectArray";
import trelloBanner from "../trello.png";

export const kanbanInfo: Project = {
  bannerImage: trelloBanner,
  title: "Trello",
  description: "A mockup of Trello to explore typescript",
  gridSpan: { xl: [3, 3], lg: [3, 3], md: [3, 3] },
  highlights:
    "Application of Complex Logic to implement game rules.  Dynamic room allocation through Socket.io. Includes take functionality, check, checkmate, en-passante, queening, draw-conditions including stalemate",

  gitLink: "https://github.com/joshD90/chess_app",
  siteLink: "https://chess.joshuadanceywebdev.ie",
  techs: ["React", "Sass", "Sockets.io", "Nginx", "Javascript", "HTML Canvas"],
  keyLearnings: ["Recursion", "Complex Logic"],
  motivation: [
    "I created this project as I wished to create a javascript based game where I could deal with complex logic",
    "I have been passionate about chess for a number of years and so decided that this would be an opportunity to demonstrate a capacity for a larger scale game to demonstrate a range of my skills.",
    "I had previously used recursive directional square checking in an X's and O's game.  All of the game logic was self-conceptualised and there was no follow along tutorials in helping me build this project",
  ],
};
