import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import TextField from "@mui/material/TextField";

export default function CoverValue() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="secondary"
            {...bindTrigger(popupState)}
          >
            VALUE COVER BY PELW
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem>
              <TextField
                id="filled-basic"
                label="VALUE COVER BY PELW"
                variant="standard"
         
              />
            </MenuItem>
            {/* <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
