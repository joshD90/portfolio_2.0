import chessBanner from "./swiperImages/landingPage.jpg";
import { Project } from "../projectArray";

export const chessInfo: Project = {
  bannerImage: chessBanner,
  title: "Chess Site",
  description:
    "Fully working Chess game played over socket.io.  Play against yourself or open two tabs of the project to play online allowing for dynamic room allocation.",
  gridSpan: { xl: [3, 3], lg: [3, 3], md: [3, 3] },
  highlights:
    "Application of Complex Logic to implement game rules.  Dynamic room allocation through Socket.io. Includes take functionality, check, checkmate, en-passante, queening, draw-conditions including stalemate.",

  gitLink: "https://github.com/joshD90/chess_2.0",
  siteLink: "https://chess2.joshuadanceywebdev.ie",
  techs: [
    "Sockets.io",
    "Nginx",
    "Javascript",
    "HTML Canvas",
    "Webpack",
    "Typescript",
  ],
  keyLearnings: [
    "Clean Code",
    "Project Design",
    "Classes",
    "Recursion",
    "Complex Logic",
  ],
  motivation: [
    "I created this project as I wished to create a javascript based game where I could deal with complex logic",
    "I have been passionate about chess for a number of years and so decided that this would be an opportunity to demonstrate a capacity for a larger scale game to demonstrate a range of my skills.",
    "I had previously built this project with React and Javascript however I struggled with the larger code-base and complexity of the problem and so my code became an unmaintainable, tangled mess so I completely rebuilt with no Frameworks using Typescript with an emphasis on better design.  You can visit the previous projects at https://chess.joshuadanceywebdev.ie and the source code at https://github.com/joshD90/chess_app.",
  ],
  link: "chess",
};
