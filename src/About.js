import React from 'react';
import './General.css';
import {useHistory} from "react-router-dom";

function About(props) {
  const history = useHistory();
  const {state} = props.location;

  function goBackMain() {
    history.push("/");
  };

  if(!state || !state.sols) {
    goBackMain();
    return null;
  }
  const {sols} = state;
  let {lastUpdate} = state;

  return (
    <div className="About">
      <div className="InnerAbout">
        <p className="border">Sol: {sols.sol}</p>
        <p className="border">Minimun: {sols.low}</p>
        <p className="border">Average: {sols.average}</p>
        <p className="border">High: {sols.high}</p>

        <button onClick={goBackMain}>Go back</button>
        <p>Last Update: {lastUpdate}</p>
        <p>*Updated every 10 minutes*</p>
      </div>
    </div>
  );
}

export default About;
