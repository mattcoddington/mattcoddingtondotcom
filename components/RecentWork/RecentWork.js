import SectionTitle from "../SectionTitle";
import ProjectSnippet from "./ProjectSnippet";

const projects = [
  {
    backgroundColor: "#0C1218",
    projectTitle: "doxy.me Analytics",
    projectRole: "Senior UX/UI Designer @ doxy.me",
    imgURL: "project_doxy-me-analytics_thumb.png",
    hrColor: "#162331",
    textColor: "#72808E",
  },
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
    projectRole: "Senior UX/UI Designer @ Rygen",
    imgURL: "project_corsair-lite_thumb.png",
    hrColor: "#143B66",
    textColor: "#6F8EB0",
  },
  {
    backgroundColor: "#231728",
    projectTitle: "FICON",
    projectRole: "Senior UX/UI Designer @ Rygen",
    imgURL: "project_ficon_thumb.png",
    hrColor: "#3E2C46",
    textColor: "#C9BFCD",
  },
];

const RecentWork = () => (
  <>
    <SectionTitle>Recent Work</SectionTitle>

    {projects.map((items, idx) => (
      <ProjectSnippet key={idx} {...items} />
    ))}
  </>
);

export default RecentWork;
