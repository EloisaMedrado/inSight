import React, {useState, useEffect} from 'react';
import './General.css';
import DataTable from 'react-data-table-component';
import {useHistory} from "react-router-dom";
import Api from './Api';
import * as Utils from './Utils';

const columns = [
  {
    name: 'Sol',
    selector: 'sol',
    sortable: true,
  },
  {
    name: 'Average ° C',
    selector: 'average',
    sortable: true,
    right: true,
  },
];

function Main() {
  useEffect(() => {
    Api.get()
    .then(function(response) {
      setData(response.data);
      setTimeout(function () {
        window.location.reload();
      }, 30 * 10000);
    })
    .catch(function (error) {
      history.push('/error');
    });
  }, []);

  const [data, setData] = useState([]);

  let lastUpdateDate = "";
  if(data && data.lastUpdate) {
    let date = new Date(data.lastUpdate);
    lastUpdateDate = Utils.formatDate(date);
  }

  const history = useHistory();
  function openSolAbout(e) {
    history.push('/about', {sol: e.sol, lastUpdate: lastUpdateDate});
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
