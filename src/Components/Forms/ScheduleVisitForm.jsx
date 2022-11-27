import React, { useState } from "react";
import "./Forms.css";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Grid } from "@mui/material";

const ScheduleVisitForm = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  
  
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitform = () => {
    if(!name){
      setNameError(true);
    }
    
    if(!phone || (phone.length !== 10) || (isNaN(phone))){
      setPhoneError(true);
    }

    if(email && !validateEmail(email)){
      setEmailError(true)
    }

    if(!nameError && !phoneError && !emailError){
      const data= {
        "name": name,
        "phone": phone,
        "email": email,
        "date": date
      }

      console.log(data)
    }


  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid style={{border: "8px solid transparent"}} sm={6}>
          <TextField error={nameError} onChange={ (newname) => {setName(newname.target.value); setNameError(false)}} value={name} fullWidth id="form-name-input" placeholder="Name*" />
        </Grid>
        <Grid style={{border: "8px solid transparent"}} sm={6}>
          <TextField error={phoneError} onChange={(newPhone) => {setPhone(newPhone.target.value); setPhoneError(false)}} value={phone} fullWidth id="form-phone-input" placeholder="Mobile*" />
        </Grid>
        <Grid style={{border: "8px solid transparent"}} sm={6}>
          <TextField error={emailError} onChange={(newEmail) => {setEmail(newEmail.target.value); setEmailError(false)}} value={email} fullWidth id="form-email-input" placeholder="Email (Optional)" type="email" />
        </Grid>
        <Grid style={{border: "8px solid transparent"}} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date*"
              disablePast={true}
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              minDate={new Date()}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <div style={{display: "flex", justifyContent: "end", paddingTop: "10px"}}>
        <Button onClick={handleSubmitform} className="round-outline-custom" >Schedule a visit</Button>
      </div>
      
    </div>
  );
};

export default ScheduleVisitForm;
