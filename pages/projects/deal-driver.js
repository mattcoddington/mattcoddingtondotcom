import Head from "next/head";

import styled from "styled-components";

import Header from "../../components/Header";
import Project from "../../components/Project";
import Contact from "../../components/Contact";

const Personas = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin-right: 24px;
  }
  img:last-child {
    margin-right: 0px;
  }
`;

const ImageWithCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

const content = [
  {
    aside: true,
    sectionTitle: "Deal Driver",
    sectionSubTitle: "A lean web app for helping sales teams meet efficiently",
    sectionContent: (
      <div>
        <p>
          A former VP of Sales at Benefitfocus reached out to me when he started
          his new consulting company looking to add some software to help guide
          not only his sales meeting with clients but also his client's meetings
          with their teams.
        </p>
        <p>
          One of my earliest jobs was designing sales presentations and software
          demos for use in sales presentations, so I had experience working with
          salespeople before and knew the importance of facilitating effective
          meetings.
        </p>
        <p>That's where Deal Driver comes in.</p>
      </div>
    ),
  },
  {
    aside: true,
    sectionTitle: "My Role",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          For this project I was a <strong>Freelance Product Designer</strong>{" "}
          with the only product support being from the two founders of Sales
          Velocity Partners. I captured requirements, developed user flows, and
          of course designed the final product.
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionBackground: `
    background-image: url('../../images/projects/deal-driver/login-bg.png')`,
    sectionContent: (
      <img
        style={{ padding: 0 }}
        src="../../images/projects/deal-driver/login-area.svg"
      />
    ),
  },
  {
    aside: true,
    sectionTitle: "The Lifecycle of the Deal",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          The core unit against which all significant action is taken in Deal
          Driver is, of course, a "deal". A "deal" or "sale" goes through
          several stages:
          <ol>
            <li>First, there is deal creation and initial work</li>
            <li>
              Next there may be one or two or many follow-up meetings which
              generate "actions"
            </li>
            <li>
              Actions must be completed before another follow-up can happen
            </li>
            <li>
              Eventually a deal will close, whether successfully ("closed won")
              or unsuccessfully ("closed lost")
            </li>
          </ol>
        </p>
        <p></p>
      </div>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/deal-driver/screen-landing-page.svg" />
        <div>Landing page for Sales Associate</div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/deal-driver/screen-competitors-risk.svg" />
        <div>Setting up a new deal</div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/deal-driver/screen-deal-meeting.svg" />
        <div>Working through a deal meeting in real time</div>
      </ImageWithCaption>
    ),
  },
  {
    aside: true,
    sectionTitle: "Personas",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          While this is a small app, there are a few different types of users
          engaging with it:
          <ul>
            <li>
              <strong>Vice President, Sales</strong> - This will be the buyer of
              the software and the least hands-on. This user will be able to log
              in and check status of meetings and analytics but likely will not.
              This person is only interested in results.
            </li>
            <li>
              <strong>Sales Leader</strong> - The most engaged user of the
              applications, the Sales Leader is the person primarily responsible
              for keeping sales associates on task and ensuring productive
              meetings.
            </li>
            <li>
              <strong>Sales Associate</strong> - The base user, the sales
              associte is the person actually running meetings and accomplishing
              actions within the app. They need to fully buy in for the software
              to add value to the business.
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <Personas>
        <img src="../../images/projects/deal-driver/persona-jim.svg" />
        <img src="../../images/projects/deal-driver/persona-beth.svg" />
        <img src="../../images/projects/deal-driver/persona-mark.svg" />
      </Personas>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/deal-driver/screen-analytics-1.svg" />
        <div>The Sales Leader's Analytics page</div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/deal-driver/screen-analytics-2.svg" />
        <div>
          Semantic searching helps narrow down data in a way that makes sense
        </div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/deal-driver/screen-admin.svg" />
        <div>Simple admin role for managing Clients</div>
      </ImageWithCaption>
    ),
  },
];

export default function DealDriver() {
  return (
    <>
      {console.log("deal-driver.js:", content)}
      <Head>
        <title>Projects: Deal Driver</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header separated />
      <Project
        image={`projects/deal-driver/project-title.svg`}
        content={content}
      />

      <Contact />
    </>
  );
}
