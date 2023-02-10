import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Glasses1 from "../../img/glasses1.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
        A financial advisor helps people create long-term strategies for 
          <br />
          building wealth and managing risk.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Investments"}
            detail={"Whatever your goal, a secure retirement income, your first home, your childrens's education, our savings and investments options can help make your life brighter."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Insurance"}
            detail={"We made our name in life insurance, and now we offer permanent, terms and universal life insurance as well as health, dental, critical illness, long-term care insurance and more."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Financial Advice"}
            detail={
              "Lifetime financial security isn't just something to wish for, it's something to plan for. Me, As your Financial Adviser, agent and consultant will help you meet your financial goals."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "32rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses1}
            heading={"Asset Management"}
            detail={"We provide asset mananagement services through our subsidiaries, MFS Investment Management and SLC Management as well as through several of our other businesses."}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
