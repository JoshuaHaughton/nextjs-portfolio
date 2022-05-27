import Image from "next/image";
import React from "react";
import classes from "./TechStackLanguage.module.css";

const TechStackLanguage = ({src, languageName, languagePopup, darkMode = false}) => {
  let languageClasses = classes.tech;

  darkMode && (languageClasses = `${languageClasses} ${classes.darkMode}`)
  return (
    <figure className={languageClasses}>
      <Image
        layout={"fill"}
        src={src}
        alt={`${languageName} Logo`}
        priority={true}
        quality={100}
      />
      <span className={classes.language_name}>{languagePopup}</span>
    </figure>
  );
};

export default TechStackLanguage;
