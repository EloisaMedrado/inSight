import React from 'react';
import './General.css';
import {useHistory} from "react-router-dom";

function About(props) {
  const history = useHistory();

  function goBackMain() {
    history.push("/");
  };

  return (
    <div className="About">
      <div className="InnerAbout">

        <button onClick={goBackMain}>Go back</button>

      </div>
    </div>
  );
}

export default About;
