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
    dotColor: "#3182CE",
    sectionTitle: "Corsair Lite",
    sectionSubTitle: "A fast, light version of the Corsair TMS",
    sectionContent: (
      <div>
        <p>
          As Corsair TMS was getting ready for its initial launch, leadership
          decided it would make sense to build out an abridged version that
          would allow users to fetch rates in a fast and lightweight app.
        </p>
        <p>
          This app, called Corsair Lite, would supplement the main app by
          letting users bypass most of the setup needed to get a look at some of
          Corsair's rating results. It would also act as a bit of a demo that
          would hopefully encourage users after a successful rating to sign up
          and try out the full application.
        </p>
        <p>
          For this project I was a <strong>Senior UX/UI Designer</strong> at
          Rygen. I was the sole designer for the entirety of the project and had
          support from a small product team and a very experienced engineering
          team.
        </p>
      </div>
    ),
  },
  {
    aside: true,
    sectionTitle: "Getting Rates",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          "Getting Rates Quickly" essentially sums up the purpose of the
          application. Users, whether authenticated or not, can access Corsair
          Lite and quickly generate broad rates for expected shipments. If they
          like the prices presented they can continue through the booking
          process. If they don't, they can keep shopping or modify their
          shipment.
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionBackground: `
    background-color: #fff`,
    sectionContent: (
      <img
        style={{ padding: 0 }}
        src="../../images/projects/corsair-lite/user-flow.svg"
      />
    ),
  },
  {
    aside: true,
    sectionTitle: "So Much Required Input...",
    sectionSubTitle: "",
    sectionContent: (
      <div>
        <p>
          By far the biggest challenge of this app was the sheer amount of input
          required by the user just to generate any rates at all. Since the goal
          of this app is to primarily entice potential users into subscribing to
          the full Corsair TMS by returning rates quickly, it was important to
          reduce the needed input as much as product would allow.
        </p>
        <p>
          So I ended up with two versions of the input screen:
          <ol>
            <li>
              First, the absolute bare minimum data required to return useful
              rates. This is what users would see when initially landing on the
              app.
            </li>
            <li>
              The second screen would show after the user selected a rate they
              liked. This screen includes more details required to get the
              actual *exact* rate for the shipment. Ideally this rate wouldn't
              be far off from the initial one, but since there's a chance it
              could be, this additional information is needed.
            </li>
          </ol>
        </p>
      </div>
    ),
  },
  {
    aside: false,
    sectionBackground: `
    background-color: #fff`,
    sectionContent: (
      <ImageContainer>
        <ImageWithCaption>
          <img src="../../images/projects/corsair-lite/wireframe-1.png" />
          <div>Initial rating form</div>
        </ImageWithCaption>
        <ImageWithCaption>
          <img src="../../images/projects/corsair-lite/wireframe-2.png" />
          <div>Form with additional information required</div>
        </ImageWithCaption>
      </ImageContainer>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/corsair-lite/data-input-1.svg" />
        <div>High fidelity version of initial rating</div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/corsair-lite/data-input-2.svg" />
        <div>
          The final monstrosity - again, as per product, all this information is
          required
        </div>
      </ImageWithCaption>
    ),
  },
  {
    aside: false,
    sectionContent: (
      <ImageWithCaption>
        <img src="../../images/projects/corsair-lite/data-input-3.svg" />
        <div>
          The completion screen which doubles as your archived order page
        </div>
      </ImageWithCaption>
    ),
  },
];

export default function CorsairLite() {
  return (
    <>
      <Head>
        <title>Projects: Corsair Lite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header separated />
      <Project
        image={`projects/corsair-lite/project-title.svg`}
        content={content}
      />

      <Contact />
    </>
  );
}
