import React from "react";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const HeroComponent = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroProjectTitle}>Project Error</h1>
          <div className={styles.heroProjectTagline}>{siteConfig.tagline}</div>
          <div className={styles.indexCtas}>
            <Link className="button" to="/docs" style={{ color: "white" }}>
              Our Docs
            </Link>
          </div>
        </div>
        <img
          alt="Logo"
          className={styles.heroLogo}
          src={useBaseUrl("/img/team.png")}
        />
      </div>
    </div>
  );
};

export default HeroComponent;
