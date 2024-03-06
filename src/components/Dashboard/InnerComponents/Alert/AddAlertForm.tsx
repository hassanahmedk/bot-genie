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
import { nullCheck } from "@/utils";

export default function AddAlertForm(props: any) {

  const handleAlertAddAPI = async () => {
    if(nullCheck(formData)){
      setFormError("* Please fill in all the fields")
      return;
    }
    
    if(!formData.condition.length){
      setFormError("* Please add a condition for alert")
      return;  
    }

    if(!formData.indicators.length){
      setFormError("* Please add atleast one indicator")
      return;  
    }
    setFormError("");

    const token = localStorage.getItem("token");
    try {
      const response = await fetch('/api/dashboard/alerts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token as string
        },
        body: JSON.stringify({...formData, webhooks})
      });
      const data = await response.json();
      alert("alert saved")
    } catch (error) {
      console.log(error);
    }

  };

  const [form, setForm] = useState('main');
  const [formData, setFormData] = useState({
    alertName: '',
    exchange: '',
    multiPairCheck: false,
    pair: [],
    trigger: 'only_once',
    neverExpires: false,
    date: null,
    receiveEmailNotification: false,
    receiveTelegramNotification: false,
    indicators: [],
    condition: []
  });
  const [formError, setFormError] = useState('');

  const handleChange = (key: string, value: string | boolean | string[]) => {
    setFormError("");
    // reset pairs
    if(key === "multiPairCheck"){
      setFormData((prevData) => ({
        ...prevData, 
        pair: []
      }))
    }

    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const setFormIndicators = (updatedIndicators:any) => {
    setFormData((prevData) => {
      return {
        ...prevData, 
        indicators: updatedIndicators
      }
    });
  }

  const setFormCondition = (condition:any) => {
    console.log(condition)
    setFormData((prevData:any) => {
      return {
        ...prevData,
        condition
      }
    })
  }

  // managing webhooks separately for simplicity
  const [webhooks, setWebhooks] = useState<any>([]);

  const addWebhook = () => {
    setWebhooks((prev: any) => {
      return([...prev, {
        webhookURL: "",
        message: ""
      }])
    })
  }

  const handleWebhookChange = (field:string, value:string, index:number) => {
    setWebhooks((prev:any) => {
      const updatedWebhooks = prev.filter((webhook:any, i:number) => {
        if(i === index){
          webhook[field] = value;
        }
        return webhook;
      })
      return updatedWebhooks;
    })
  }

  const handleDeleteWebhook = (index:number) => {
    setWebhooks((prev:any) => prev.filter((_:any, i:number) => i !== index));
  }


  return (
    <Dialog open={true} fullWidth PaperProps={{style:{height: '90vh', minWidth: '40vw'}}}>
      <DialogTitle>
        <h2 className="font-semibold text-lg">Add Alert</h2>
      </DialogTitle>
        <DialogContentText sx={{ marginBottom: "12px", marginLeft:"25px" }}>
          Alerts notify you instantly when your conditions are met.
        </DialogContentText>
        
        <div id="alert-form-tabs" className="flex gap-1 ml-4">
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
          <AlertForm 
            handleChange={handleChange} 
            formData={formData} 
            webhooks={webhooks}
            addWebhook={addWebhook}
            handleWebhookChange={handleWebhookChange}
            handleDeleteWebhook={handleDeleteWebhook}
          />
          : 
            form === "indicator"
            ?
            <IndicatorForm 
              indicators={formData.indicators} 
              setIndicators={setFormIndicators} 
            />
            :
            <ConditionForm 
              indicatorsList={formData.indicators} 
              setCondition={setFormCondition} 
            />
        }
      </DialogContent>
      <DialogActions>
        <div className="flex flex-col gap-2">
          {
            formError.length 
            ? 
            <h2 className="my-1 text-red-700">
              {formError}
            </h2>
            : null
          }
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
        </div>
      </DialogActions>
    </Dialog>
  );
}
