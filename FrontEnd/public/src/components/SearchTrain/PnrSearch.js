import React, {useState,useEffect,useRef} from "react";
import service from "../../services/bookingService";
import {useLocation,Link} from "react-router-dom";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const PnrSearch = (props) => {

const [inputMessage,setInputMessage]=useState();
const [inputName,setInputName]=useState();
const [loading, setLoading] = useState(false);
const [nloading, setNloading] = useState(false);

const inputRef = useRef();
const form =useRef();


const handleChangeInput = (event)=>{
  setInputMessage(event.target.value)
}
const handleChangeName = (event)=>{
  setInputName(event.target.value)
}

const handleClick = (event) => {
  event.preventDefault();
  
  inputRef.current.validateAll();
  setLoading(false);

  if (inputMessage.trim().length === 0) {
    setLoading(false);
  }else{
  setLoading(true);
  }
};
const handleName = (event)=>{
  event.preventDefault();
  form.current.validateAll();
  setNloading(false);
  if(inputName.trim().length === 0){
    setNloading(false);
  }else{
    setNloading(true);
  }
}



  return (
    <div>
      <h2 className="ui header" style={{ color: "pink" }}>
        PNR SEARCH
      </h2>
      <Form ref={inputRef}>
      <div className="ui fluid action input">
        <Input type="text"
         placeholder="PNR "
         value ={inputMessage}
         onChange={handleChangeInput}
         validations={[required]}
          />
          </div>
          <button className="ui toggle button" onClick={handleClick} >
        {loading  ?  <Link  to={{pathname: "/train-pnr",
           state: {inputMessage}}}>
            {<div className="active item">Search</div>}
          </Link> : <div className="active item">Search</div>}
          </button>
      </Form>


      <Form  ref={form}>
      <h2 className="ui header" style={{ color: "pink", marginTop:"50px" }}>
        SEARCH TRAIN
      </h2>
      <div className="ui fluid action input">
        <Input type="text"
         placeholder="Train name " 
          value={inputName}
          onChange={handleChangeName}
          validations={[required]}
         />
      </div>
      <button className="ui toggle button" onClick={handleName} >
        {nloading  ?  <Link  to={{pathname: "/find",
           state: {inputName}}}>
            {<div className="active item">Search</div>}
          </Link> : <div className="active item">Search</div>}
          </button>
      </Form>
    </div>
  );
};

export default PnrSearch;
