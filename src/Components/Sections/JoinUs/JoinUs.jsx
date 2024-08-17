import React, { useContext } from "react";
import "./JoinUs.css";
import { LanguageContext } from "../../../App";
import ArabicJoin from "./ArabicJoin";
import EnglishJoin from "./EnglishJoin";

function JoinUs() {
  const language = useContext(LanguageContext);
  return <>{language === "arabic" ? <ArabicJoin /> : <EnglishJoin />}</>;
}

export default JoinUs;
