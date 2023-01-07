import Head from "next/head";

import Header from "../../components/Header";
import Project from "../../components/Project";
import Contact from "../../components/Contact";

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header separated />
      <Project image={`projects/deal-driver/project-title.svg`} />

      <Contact />
    </>
  );
}
