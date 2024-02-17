'use client'
import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@/components/shared/Button";
import AlertForm from "./AlertForm";
import IndicatorForm from "./IndicatorForm";
import ConditionForm from "./ConditionForm";

export default function AddAlertForm(props: any) {
  const handleAlertAddAPI = () => {};
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [form, setForm] = useState('indicator');
  const [formData, setFormData] = useState();


  return (
    <Dialog open={true} fullWidth PaperProps={{style:{height: '90vh', minWidth: '40vw'}}}>
      <DialogTitle>
        <h2 className="font-semibold text-lg">Add Alert</h2>
      </DialogTitle>
        <DialogContentText sx={{ marginBottom: "12px", marginLeft:"25px" }}>
          Alerts notify you instantly when your conditions are met.
        </DialogContentText>
        
        <div id="alert-form-tabs" className="flex gap-1 mb-4 ml-4">
          <div onClick={()=>setForm('main')} 
            className={`cursor-pointer 
            ${form==="main" ? "bg-primary-800 text-white" : null}
            px-4 py-1 text-lg font-semibold`}>
              Alert
            </div>
          <div onClick={()=>setForm('indicator')} 
            className={`cursor-pointer 
            ${form==="indicator" ? "bg-primary-800 text-white" : null}
            px-4 py-1 text-lg font-semibold`}>
              Indicators
            </div>
          <div onClick={()=>setForm('condition')} 
            className={`cursor-pointer 
            ${form==="condition" ? "bg-primary-800 text-white" : null}
            px-4 py-1 text-lg font-semibold`}>
              Condition
          </div>
        </div>
      <DialogContent>
        {
          form === "main"
          ?
          <AlertForm />
          : 
            form === "indicator"
            ?
            <IndicatorForm />
            :
            <ConditionForm />
        }


      </DialogContent>
      <DialogActions>
        <div className="flexCenter mr-4 mb-2 gap-2">
          <Button
            title="Cancel"
            type="secondary"
            onClick={props.handleClose}
            size="sm"
          />
          <Button
            title="Add Alert"
            type="primary"
            onClick={handleAlertAddAPI}
            size="sm"
          />
        </div>
      </DialogActions>
    </Dialog>
  );
}
