import React, {useState, useEffect} from 'react';
import './General.css';
import DataTable from 'react-data-table-component';
import {useHistory} from "react-router-dom";
import * as Utils from './Utils';

const data = {"availableSols":[{"sol":635,"low":-95.169,"high":-16.453,"average":-62.311},
    {"sol":636,"low":-94.58,"high":-17.111,"average":-61.522},
    {"sol":638,"low":-94.696,"high":-14.912,"average":-61.625}],"lastUpdate":"2020-09-13T22:02:05.742+00:00"};

const columns = [
  {
    name: 'Sol',
    selector: 'sol',
    sortable: true,
  },
  {
    name: 'Average',
    selector: 'average',
    sortable: true,
    right: true,
  },
];

function Main() {
  let lastUpdateDate = "";
  if(data && data.lastUpdate) {
    let date = new Date(data.lastUpdate);
    lastUpdateDate = Utils.formatDate(date);
  }

  const history = useHistory();
  function openSolAbout(e) {
    history.push('/about', {sols: e, lastUpdate: lastUpdateDate});
  };

  return (
    <div className="Main">
      <div className="InnerMain">
        <DataTable
          title="Avaliable Sols"
          columns={columns}
          data={data.availableSols}
          onRowDoubleClicked={openSolAbout}
        />
        <p>Last Update: {lastUpdateDate}</p>
        <p>*Updated every 10 minutes*</p>
      </div>
    </div>
  );
}

export default Main;
