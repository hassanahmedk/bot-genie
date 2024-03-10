import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmDelete(props) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.closeDialog();
    setOpen(false);
  };

  React.useEffect(()=>{
    setOpen(props?.open)
  }, [props?.open])

  const handleDeleteAlertAPI = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const response = await fetch('/api/dashboard/alerts/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
          'alertID': props?.deleteID
        },
      });
      const data = await response.json();
      alert("Alert is deleted.");
      handleClose();
      props.handleAlertDelete(props?.deleteID);
      setLoading(false);
    } catch (error) {
      alert("An error occured on Vercel while deleting the alert.");
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the alert?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={loading} onClick={handleDeleteAlertAPI}>
            <span className="text-red-700 cursor-pointer font-semibold">Delete</span>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
