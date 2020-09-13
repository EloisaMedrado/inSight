import React, {useState, useEffect} from 'react';
import './General.css';
import DataTable from 'react-data-table-component';
import {useHistory} from "react-router-dom";

const data = [{"sol":635,"low":-95.169,"high":-16.453,"average":-62.311},
  {"sol":636,"low":-94.58,"high":-17.111,"average":-61.522},
  {"sol":638,"low":-94.696,"high":-14.912,"average":-61.625}];

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
  const history = useHistory();
  function openSolAbout() {
    history.push('/about');
  };

  return (
    <div className="Main">
      <div className="InnerMain">
        <DataTable
          title="Avaliable Sols"
          columns={columns}
          data={data}
          onRowDoubleClicked={openSolAbout}
        />
      </div>
    </div>
  );
}

export default Main;
