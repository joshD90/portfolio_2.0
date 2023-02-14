//chess project images
import board from "./swiperImages/board.png";
import castling from "./swiperImages/castling.png";
import check from "./swiperImages/check.png";
import landingPage from "./swiperImages/landingPage.png";
import queening from "./swiperImages/queening.png";
import roomReallocation from "./swiperImages/roomReallocation.png";
import stalemate from "./swiperImages/stalemate.png";
import winTimeout from "./swiperImages/winTimeout.png";

export const chessImages = [
  {
    image: landingPage,
    text: "The player enters there name and can select a game length, the server will pair this with another player in rooms of two",
  },
  {
    image: board,
    text: "The board is drawn dynamically and a grid set up.  Player pieces are drawn on HTML 5.  The timer is controlled server-side",
  },
  {
    image: castling,
    text: "Legal moves are calculated through recursively checking in all directions.  Each piece has their own unique moves such as 'en passante' and castling. Rules such as no castling through check is also implement",
  },
  {
    image: check,
    text: "Check is calculated through iterating through all legal moves of all of a colour's piece's legal moves to see whether the king has been attacked ",
  },
  {
    image: queening,
    text: "The pawn can promote to any piece as per chess rules and all win /draw conditions are dealt with if resulting from this",
  },
  {
    image: stalemate,
    text: "Checkmate can be achieved, as can stalemate, this is done when the king is in check and there are no possible moves that can remove this check",
  },
  {
    image: winTimeout,
    text: "Win and draw conditions are managed, as well as edge cases such as draw by insufficient material vs timeout",
  },
  {
    image: roomReallocation,
    text: "If another player disconnects, the socket will attempt to connect the player with another player of the same time",
  },
];
