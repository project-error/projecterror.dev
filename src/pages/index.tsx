import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import HeroComponent from "../components/HeroComponent";

const features = [
  {
    title: "New Phone Who Dis",
    imageUrl: "img/npwd-icon.png",
    description: (
      <>
        Our largest and most popular resource for FiveM. Written entirely in
        Typescript and React, it provides a fully functional in-game Phone with
        calling, messaging, Twitter, photos, and more!
      </>
    ),
  },
  {
    title: "FiveM React Boilerplate Lua",
    imageUrl: "img/pe-logo.png",
    description: (
      <>
        A simple and extendable React (TypeScript) boilerplate designed around the Lua ScRT.
      </>
    ),
  },
  {
    title: "Project Error Basic Loading",
    imageUrl: "img/pe-logo.png",
    description: (
      <>
        A very basic, yet still robust and extendable, loading screen.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <main>
        <HeroComponent />
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
