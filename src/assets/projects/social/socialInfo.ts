import { Project } from "../projectArray";
import bannerImg from "./socialBanner.jpg";

export const socialInfo: Project = {
  bannerImage: bannerImg,
  title: "Social Care Network",
  description:
    "This project is working to provide a one stop shop for Social Care Workers getting information on Homeless Sevices",
  gridSpan: { xl: [4, 6], lg: [4, 6], md: [4, 6] },
  highlights:
    "Complex embedded viewport with sidebar for easy navigation.  Complex search functionality.  Multistep form creation with validation.  Reusable OOP architecture on the backend with mySQL set up.  User generated reports for potential misinformation",
  gitLink: "https://github.com/joshD90/social2",
  siteLink: "http://social.joshuadanceywebdev.ie/services",
  techs: ["Typescript", "Vite", "React", "mySQL", "nodejs", "Passport", "JWT"],
  keyLearnings: [
    "OOP Structure",
    "Inset Viewports",
    "mySQL queries",
    "agile methodologies",
  ],
  motivation: [
    "I wanted to make a product that could have a real world impact and had identified a need for a directory of services that are available for those who are homeless",
    "Services are not necessarily advertised that well, and becoming familiar with all the many services that are out there",
    "I also recognised that social care workers build up a vast unofficial library of knowledge on services that is lost when they move jobs or is not shared between services within an organisation.",
    "My goal with this is to create comments sections for each service that organisations can supplement the basic information that is available to everyone and have these comments available for anyone that is within their own organisation.",
    "My next stage is to have a 'stack overflow' section where people across all of social care can troubleshoot their issues and benefit from the experience of users",
    "Finally the last stage that I want to implement is for social care workers to be able to connect with each other and chat about any issues they may be experiencing or any keyworking queries they may have",
  ],
  link: "social",
};
