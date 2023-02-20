import login from "./kanbanImages/kanbanLogin.png";
import home from "./kanbanImages/kanbanHome.png";
import newBoard from "./kanbanImages/kanbanNewBoard.png";
import board from "./kanbanImages/kanbanBoard.png";
import edit from "./kanbanImages/kanbanEdit.png";

export const kanbanImages = [
  {
    image: login,
    text: "Login secured by passport.js and user and persisted through JWT.  To explore live site, username: test@test.com password: test",
  },
  {
    image: home,
    text: "Each user has access to the boards that they are part of and can create a new board",
  },
  {
    image: newBoard,
    text: "A user can create a new board.  Other participants can be added by including their email addresses",
  },
  {
    image: board,
    text: "A user can add stories, move stories from one section to another using a click and drag technique.  A user can also delete and update stories",
  },
  {
    image: edit,
    text: "Stories can be edited by the user.  Full CRUD operations through mySQL are available",
  },
];
