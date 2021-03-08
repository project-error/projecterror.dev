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
    title: "New Bank Who Dis",
    imageUrl: "img/npwd-icon.png",
    description: (
      <>
        A Bank/ATM resource that provides a user interface for ATM's and general
        banking.
      </>
    ),
  },
  {
    title: "New Garage Who Dis",
    imageUrl: "img/npwd-icon.png",
    description: (
      <>
        A WIP all encompassing Garage resource that attemps to fill the massive
        gaps of prior resources
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
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
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
