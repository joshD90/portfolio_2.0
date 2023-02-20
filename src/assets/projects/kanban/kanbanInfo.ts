import { Project } from "../projectArray";

import kanbanBoard from "./kanbanImages/kanbanBoard.png";

export const kanbanInfo: Project = {
  bannerImage: kanbanBoard,
  title: "Kanban Board",
  description:
    "A mockup of Trello to explore typescript secured by Passportjs and JWT",
  gridSpan: { xl: [3, 3], lg: [3, 3], md: [3, 3] },
  highlights:
    "Full CRUD operations with mySQL with prepared statements to sanitize requests. React click and drag to transfer one and Authentication with Passportjs and JWT",

  gitLink: "https://github.com/joshD90/kanban",
  siteLink: "https://kanban.joshuadanceywebdev.ie",
  techs: [
    "React",
    "Typescript",
    "Tailwind",
    "mySQL",
    "Passportjs",
    "JWT Authentication",
  ],
  keyLearnings: [
    "Clean Code Practices",
    "How to use Typescript in larger project",
    "mySQL and prepared statements",
  ],
  motivation: [
    "I was learning about Agile, Scrum and Kanban and wished to solidify my learning of this topic by creating a Kanban board project.",
    "I had also been learning about Typescript and wished to take on a full-stack project where I could practice what I had learned",
    "I had also been learning mySQL and wanted a larger project to practice all CRUD techniques to do this with also",
  ],
  link: "kanban",
};
