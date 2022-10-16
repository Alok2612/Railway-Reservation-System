import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { TicketCard } from  "./TicketCard";
import service from "../../services/bookingService";

export const PnrInfo = (props) => {
  const location = useLocation();
  const data = location.state;
  

  const [isData, setIsData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

  //console.log(data.inputMessage);

  const getData = () => {
    service
      .getPnr(data.inputMessage)
      .then((res) => {
        console.log(res.data);
        // console.log("success");
        setIsData(res.data);
        setDataLoading(true);
        console.log("dekho kya",isData);
        if (res.status === 200) {
          return res.data;
        } else {
          return res.data.then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        // history("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(isData);
  return (
    <div>
      {isDataLoading ? <TicketCard ticketData={isData}/> : <h1>loading....</h1>}
      
    </div>
  );
};