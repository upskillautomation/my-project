import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

import popUpImg from "../Images/popup.jpg";
import { Link } from "react-router-dom";
const PopupExample = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setOpen(true);
  },[])

  return (
    <div>
      {/* Button to Open Popup */}
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Popup
      </Button> */}

      {/* Popup Component */}
      <Dialog open={open} onClose={handleClose} sx={{ overflowX: "hidden" }}>
        <DialogTitle>
          
          {/* Close Button */}
          <Button
            onClick={handleClose}
            style={{
              position: "absolute",
              right: "8px",
              top: "8px",
            }}
          >
            ✖
          </Button>
        </DialogTitle>
        <DialogContent component={Link} to="/contact">
          <img src={popUpImg} alt="noimg" width="380px" height="420px"/>
        </DialogContent>
        <DialogActions>
          {/* Footer Actions */}
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupExample;
