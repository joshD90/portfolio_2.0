import adminServiceForm from "./adminServiceForm.jpg";
import categories from "./categories.jpg";
import errorReporting from "./errorReporting.jpg";
import login from "./login.jpg";
import searchFunctionality from "./searchFunctionality.jpg";
import selectMultipleAdmin from "./selectMultipleAdmin.jpg";
import service from "./service.jpg";

export const socialImages = [
  {
    image: categories,
    text: "Users can view the various categories under which the services are stored",
  },
  {
    image: service,
    text: "Pages for each service are generated dynamically based on backend info",
  },
  {
    image: errorReporting,
    text: "Users can report an issue if they notice a factual innacuracy or out of date information",
  },
  {
    image: searchFunctionality,
    text: "Users can carry out searches which will return any service containing the keyword, these services weighted in a complex manner to give best results",
  },
  {
    image: login,
    text: "A user can login or opt for Guest Signin for limited features",
  },
  {
    image: adminServiceForm,
    text: "There is an admin section where new services can be updated, created or deleted",
  },
  {
    image: selectMultipleAdmin,
    text: "To allow for multiple entries, these boards have been created, on the backend, a many to many table is set up",
  },
];
