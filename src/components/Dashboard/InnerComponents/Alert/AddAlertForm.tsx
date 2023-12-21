import * as React from "react";
import {Button as MUIButton} from "@mui/material/";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from "@mui/material";
import Button from "@/components/shared/Button";
import DateTimePicker from "@/components/shared/MUIDateTimePicker";

export default function AddAlertForm(props: any) {

  const handleAlertAddAPI = () => {

  }

  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <h2 className="font-semibold text-lg">
          Add Alert
        </h2>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{marginBottom:'12px'}}>Alerts notify you instantly when your conditions are met.
        </DialogContentText>
        
        <div className="flex flex-col gap-2">
          <FormControl fullWidth sx={{marginTop:'8px'}}>
          <InputLabel id="condition-select-label">Condition</InputLabel>
            <Select
              labelId="condition-select-label"
              id="condition-select"
              label="Condition"
              variant="outlined"
              placeholder="age"
              onChange={() => {}}
            >
              <MenuItem selected value={10}>Crossing</MenuItem>
              <MenuItem value={20}>Crossing Up</MenuItem>
              <MenuItem value={30}>Crossing Down</MenuItem>
              <MenuItem value={30}>Greater Than</MenuItem>
              <MenuItem value={30}>Less Than</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Price"
              type="email"
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{marginTop:'8px'}}>
          <InputLabel id="trigger-select-label">Trigger</InputLabel>
            <Select
              labelId="trigger-select-label"
              id="trigger-select"
              label="Trigger"
              variant="outlined"
              onChange={() => {}}
            >
              <MenuItem sx={{fontWeight:'500'}} selected value={'only_once'}>Only Once</MenuItem>
              <MenuItem sx={{fontWeight:'500'}} value={'everytime'}>Every Time</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <DateTimePicker />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              id="alert_name"
              label="Alert Name"
              type="email"
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              id="message"
              label="Message"
              type="email"
              fullWidth
              variant="outlined"
              multiline
              minRows={3}
            />
          </FormControl>

        </div>
      </DialogContent>
      <DialogActions>
        <div className="flexCenter mr-4 mb-2 gap-2">
          <Button title="Cancel" type="secondary" onClick={props.handleClose} size="sm" />
          <Button title="Add Alert" type="primary" onClick={handleAlertAddAPI} size="sm" />
        </div>
      </DialogActions>
    </Dialog>
  );
}
