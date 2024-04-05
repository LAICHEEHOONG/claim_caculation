import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { updateCoverAmount } from "../features/claim/claimSlice";
import { setAlert } from "../features/alert/alertSlice";

export default function CoverValue() {
  const state = useSelector((state) => state.claim);
  const dispatch = useDispatch();
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
                label="VALUE"
                variant="standard"
                color="secondary"
                value={state.coverAmount}
                onChange={(e) => {
                  let value = e.target.value;
                  if (isNaN(value)) {
                    dispatch(
                      setAlert({
                        alert: true,
                        alertMessage: "Please enter only numbers.",
                      })
                    );
                  } else {
                    dispatch(updateCoverAmount(e.target.value));
                  }
                }}
              />
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
