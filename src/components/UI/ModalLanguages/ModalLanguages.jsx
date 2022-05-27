import Image from "next/image";
import React from "react";
import classes from './ModalLanguages.module.css'

const ModalLanguages = ({src, languageName, languagePopup, darkMode = false}) => {

  let languageClasses = classes.language;

  darkMode && (languageClasses = `${languageClasses} ${classes.darkMode}`)

  return (
    <div className={languageClasses}>
      <figure>
        <Image
          layout={"fill"}
          src={src}
          alt={`${languageName} Logo`}
          className={classes.language_img}
          priority={true}
          quality={100}
          objectFit={"contain"}
        />
      </figure>
      <span className={classes.language_name}>{languagePopup}</span>
    </div>
  );
};

export default ModalLanguages;
