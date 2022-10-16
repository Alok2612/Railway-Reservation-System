import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TrainList.css";
import TrainDataCard from "./TrainData/TrainDataCard";
import service from "../../services/trainService"

 const FindTrain = (props) => {
  const location = useLocation();
  const data = location.state;

  console.log(data.inputName);


  const [isData, setIsData] = useState({});



  const getData = () => {
    service.findByName(data.inputName)
    .then((res)=> {
      console.log(res.data);
      setIsData(res.data);
      if (res.status === 200) {
        return res.data;
        
      } else {
        return res.data.then((data) => {
        });
      }
    })
    .then((data) => {
    })
    .catch((err) => {
      alert(err.message);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(isData);
  return (
    <div>
            <TrainDataCard trainData={isData} />
    </div>
  );
};
export default FindTrain;