import Head from "next/head";

import styled from "styled-components";

import Header from "../../components/Header";
import Project from "../../components/Project";
import Contact from "../../components/Contact";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  * {
    margin-right: 24px;
  }
  *:last-child {
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
  img {
    max-width: 1200px;
  }
`;

const content = [
  {
    aside: true,
    dotColor: "#66CFD0",
    sectionTitle: "doxy.me",
    sectionSubTitle: "Redesigning telehealth in a post-COVID world",
    sectionContent: (
      <div>
        <p>
          I started working at doxy.me shortly after the COVID pandemic began.
          The company was growing from a relatively small side project to the
          leading provider of telehealth solutions, especially for small clinics
          and solo practitioners. I was brought in primarily to work on the
          <strong> Clinics feature</strong> which is basically doxy.me's version
          of "enterprise".
        </p>
        <p>
          While my time there was short, I managed to pitch a complete re-org of
          the Clinic portion of doxy.me and pitch a new Analytics section.
        </p>
        <p>
          My role at doxy.me was <strong>Senior UX/UI Designer</strong>, and
          while I was there I reported to a UX Design Manager. I also had access
          to a well-staffed research team.
        </p>
      </div>
    ),
  },
  {
    aside: true,
    sectionTitle: "Growing Pains",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          doxy.me was initially a side project - an easy way for solo
          practitioners to set up secure video conferencing with patients. When
          I joined the scope had grown to include clinics which would add a ton
          of complexity. New features would be needed such as:
        </p>
        <ul>
          <li>Multiple healthcare professionals working together</li>
          <li>
            Allowing professionals to maintain independent practice while also
            being a part of one or many clinics
          </li>
          <li>
            Complication of personas including new buyers, tech, and admin roles
          </li>
          <li>White labeling</li>
        </ul>
        <p>
          First, I set out to tackle the problem of the app's information
          architecture.
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionBackground: `
    background-color: #F9FAFC`,
    sectionContent: (
      <img
        style={{ padding: 0 }}
        src="../../images/projects/doxy-me/site-map.svg"
      />
    ),
  },
  {
    aside: true,
    sectionTitle: "The Big Problem",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          Ultimately, the main problem with doxy.me's IA was that Clinic
          features, while they were being hastily developed and implemented, had
          largely invaded the space of individual user spaces.
        </p>
        <ul>
          <li>
            Clinic settings were placed at the same level as an individual
            user's personal account settings, if that user happened to also be
            the admin of a Clinic
          </li>
          <li>
            Because the only "Clinic" section lived within the admin's personal
            settings, there was no area for other employees to go to see data
            that might be available to them such as contact information for
            coworkers and patients
          </li>
          <li>
            There was no simple way to see who else was working at your clinic,
            forcing users into third party apps like Slack
          </li>
        </ul>
        <p>
          Untangling Clinic from individual accounts a bit helped solve a lot of
          these problems, in addition to issues with features and requests that
          were in the pipeline. For example, at this time the #1 request from
          Clinics was the ability to make "community rooms" where anyone could
          pick up a patient if they were available (think online waiting room).
        </p>
        <p>
          The resulting screens don't have much wow factor aesthetically, but
          the relief of seeing it all together for the first time was pretty
          great!
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/doxy-me/screen-clinic-settings.svg" />
        <div>General settings for the new Clinic</div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/doxy-me/screen-clinic-rooms.svg" />
        <div>
          New "shared rooms" allow multiple providers access a shared pool of
          patients
        </div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/doxy-me/screen-clinic-users.svg" />
        <div>
          Clinic users being in a separate section means multiple admins can
          manage users
        </div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/doxy-me/screen-clinic-content.svg" />
        <div>
          The "Edit Waiting Room" button was no longer sufficient as more types
          of content were being added for clinics
        </div>
      </ImageWithCaption>
    ),
  },
  {
    aside: true,
    sectionTitle: "Diving Deeper With Analytics",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          Another large part of the Clinic redesign was adding some sort of
          concept for "analytics". While this was mostly speculative and didn't
          make it to production while I was there, I think the work turned out
          well.
        </p>
        <p>
          The main purpose behind having an analytics page was to help users,
          both individual and Clinic admins, pinpoint the value that doxy.me was
          (or wasn't) adding to their business. Telehealth at the time was a new
          cost for providers, and users were wary to spend too much on premium
          features and were hesitant to move more business to the platform.
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/doxy-me/screen-analytics-1.svg" />
        <div>The "initial phase" pitch for analytics</div>
      </ImageWithCaption>
    ),
  },
  {
    aside: true,
    sectionTitle: "How Was That Call Quality?",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          Doxy.me put a lot of work into making sure calls maintained good
          quality throughout. Unlike most video conferencing, it's extremely
          important for telehealth calls to maintain good quality. These calls
          are medical consultations and could include visual diagnosis. Part of
          maintaining that quality is making that data transparent to users in a
          way they'll understand and can take action on.
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/doxy-me/screen-analytics-quality-1.svg" />
        <div>
          Call quality hover gives overview call quality information at a glance
        </div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/doxy-me/screen-analytics-quality-2.svg" />
        <div>
          If users want advanced details of call quality, doxy.me provides it
        </div>
      </ImageWithCaption>
    ),
  },
];

export default function DoxyMe() {
  return (
    <>
      <Head>
        <title>Projects: doxy.me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header separated />
      <Project image={`projects/doxy-me/project-title.png`} content={content} />

      <Contact />
    </>
  );
}
