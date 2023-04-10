//chess project images
import board from "./swiperImages/board.jpg";
import castling from "./swiperImages/castling.jpg";
import check from "./swiperImages/check.jpg";
import landingPage from "./swiperImages/landingPage.jpg";
import queening from "./swiperImages/queening.jpg";
import roomReallocation from "./swiperImages/roomReallocation.jpg";
import stalemate from "./swiperImages/stalemate.jpg";
import winTimeout from "./swiperImages/winTimeout.jpg";

export const chessImages = [
  {
    image: landingPage,
    text: "A player can choose to play on a single screen or with someone online.  Online play pairs the player dynamically with another user",
  },
  {
    image: board,
    text: "The board is drawn dynamically and a grid set up.  Player pieces are drawn on HTML 5 canvas.  The timer is controlled server-side",
  },
  {
    image: castling,
    text: "Legal moves are calculated through recursively checking in all directions.  Comprehensive chess rule are accounted for such as 'en passante' and no castling through check",
  },
  {
    image: check,
    text: "Check is calculated through iterating through all legal moves of all of a colour's piece's legal moves to see whether the king has been attacked ",
  },
  {
    image: queening,
    text: "The pawn can promote to any piece as per chess rules and all win / draw conditions are dealt if resulting from the promotion",
  },
  {
    image: stalemate,
    text: "Checkmate can be achieved, as can stalemate, this is done when the king is in check and there are no possible moves that can avoid this check",
  },
  {
    image: winTimeout,
    text: "Win and draw conditions are managed, as well as edge cases such as draw by insufficient material vs timeout. After the match a rematch can be offered or a new game sought",
  },
  {
    image: roomReallocation,
    text: "If another player disconnects, the user can opt to play another game or return to the lobby",
  },
];
