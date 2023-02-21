import SectionTitle from "../SectionTitle";
import ProjectSnippet from "./ProjectSnippet";

const projects = [
  {
    backgroundColor: "#620206",
    projectTitle: "Deal Driver",
    projectRole: "Freelance Product Designer",
    projectURL: "deal-driver",
    projectDescription:
      "A simple web app for keeping sales meetings on track. Create deals, assign actions, hold timeboxed meetings, and process results with in-depth analytics.",
    imgURL: "project_deal-driver_thumb.png",
    hrColor: "#751D20",
    textColor: "#C9989A",
  },
  {
    backgroundColor: "#032040",
    projectTitle: "Corsair LITE",
    projectURL: "corsair-lite",
    projectRole: "Senior UX/UI Designer @ Rygen",
    projectDescription:
      "A fast, lightweight rating tool for new and existing users who are just interested in getting rates back fast. This app is designed to act as sort of a demo for the main Corsair TMS product.",
    imgURL: "project_corsair-lite_thumb.png",
    hrColor: "#143B66",
    textColor: "#6F8EB0",
  },
  {
    backgroundColor: "#0C1218",
    projectTitle: "doxy.me Clinic & Analytics",
    projectRole: "Senior UX/UI Designer @ doxy.me",
    projectURL: "doxy-me",
    projectDescription:
      "While I was at doxy.me, I pitched a redesign for re-organizing the Clinic portion of the app as well as ideas on integrating several new features, including Analytics.",
    imgURL: "project_doxy-me-analytics_thumb.png",
    hrColor: "#162331",
    textColor: "#72808E",
  },
];

const RecentWork = () => (
  <div id="recentWork">
    <SectionTitle>Recent Work</SectionTitle>

    {projects.map((items, idx) => (
      <ProjectSnippet key={idx} {...items} />
    ))}
  </div>
);

export default RecentWork;
