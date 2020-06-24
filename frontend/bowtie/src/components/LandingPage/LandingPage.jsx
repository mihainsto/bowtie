import React from "react";
import "./LandingPage.scss";
import LogoButtonsNav from "../Navs/LogoButtonsNav/LogoButtonsNav"
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <LogoButtonsNav />
      {/* <div className="content-container">
        <div className="bigtext grid-right">
          Bowtie makes <br /> organizing your gaming life <br />a piece of cake.
        </div>
        <div className="smalltext1 grid-right">
          Put your gaming roadmap on paper, share it with your<br/> friends and take
          part in the comunity you want.
        </div>
        <div className="smalltext2 grid-right">
          {" "}
          Bowtie allows you to keep track of the upcoming games, <br/> get all the
          news about them and much more.{" "}
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
