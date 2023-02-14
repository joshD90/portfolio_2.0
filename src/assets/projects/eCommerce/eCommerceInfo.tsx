import eCommerceBanner from "../eCommerceProjBanner.png";
import { Project } from "../projectArray";

export const eCommerceInfo: Project = {
  bannerImage: eCommerceBanner,
  title: "E-Commerce Website",
  description:
    "A site mock up for a friend's website.  Includes stylised front-end connecting to a backend database and payment API",
  gridSpan: { xl: [4, 3], lg: [4, 3], md: [4, 3] },
  highlights:
    "Full e-Commerce experience, ability to log into admin to create more products, connection with Google Firebase for item creation, connection to backend for product storing and connection to Stripe API",
  techs: [
    "React",
    "Styled-Components",
    "Stripe",
    "Mongoose",
    "MongoDB",
    "Firebase",
    "Passport.js",
    "Express",
  ],
  gitLink: "https://github.com/joshD90/leonards-lodge",
  siteLink: "https://bnw.joshuadanceywebdev.ie",
  motivation: [
    "I created this Website as I wanted to try my hand at one of the most common websites out there online, an e-commerce site",
    "A friend of mine was having an issue with their website and so I decided to mock one up",
    "I also wished to challenge myself with a project that incorporated a wide variety of features",
    "I took the time to include an admin section so that the site would be maintainable without constant web development intervention",
    "This also gave me a chance to try my hand at a larger project",
  ],
  keyLearnings: [
    "I learned about tailoring individual cohesive style across a website to match the products that are being sold",
    "I made my own carousel in this project",
    "I learned about Firebase and storing and retrieving images",
    "I learned about making promises and promise.all",
    "I learned about managing an larger scale application with many different aspects and managing a larger code base",
    "More complex database documents and using aggregation in MongoDB",
    "Security and Passport.js",
  ],
};
