import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import HandymanIcon from "@mui/icons-material/Handyman";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { generateClientPassword } from "../features/login/loginSlice";
import LockMessage from "../components/LockMessage";

export default function LoginPage() {
  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handle = {
    generateClientPassword: (password) => {
      dispatch(generateClientPassword(password));
    },
  };

  const props = { state, handle };

  return (
    <div style={loginPageContainer()}>
      <div>
        <Content {...props} />
        {state.limit >= 100 ? <LockMessage /> : <PasswordField {...props} />}
      </div>
    </div>
  );
}

/********* Component ******************************************************************************************************************************/

const Content = ({ state }) => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          my: 2,
          fontSize: { xs: 45, md: 50 },
          "@media (max-width: 600px)": {
            fontSize: 30,
          },
        }}
      >
        <div
          className="navbar-header"
          style={
            state.limit >= 100 ? { color: "#d32f2f" } : { color: "#9C27B0" }
          }
        >
          <HandymanIcon
            sx={{
              fontSize: { xs: 45, md: 50 },
              "@media (max-width: 600px)": {
                fontSize: 30,
              },
            }}
          />
          <div
            style={
              state.limit >= 100 ? { color: "#d32f2f" } : { color: "#9C27B0" }
            }
          >
            CLAIM CALCULATION
          </div>
        </div>
      </Typography>
    </>
  );
};

const PasswordField = ({ state, handle }) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl sx={{ m: 1 }} fullWidth variant="outlined" color="secondary">
      <InputLabel htmlFor="outlined-adornment-password" color="secondary">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        color="secondary"
        type={show ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShow((boolean) => (boolean ? false : true))}
              edge="end"
            >
              {show ? (
                <VisibilityOff color="secondary" />
              ) : (
                <Visibility color="secondary" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        onChange={(event) => {
          // dispatch(generateClientPassword(event.target.value));
          handle.generateClientPassword(event.target.value);
        }}
      />
    </FormControl>
  );
};

/********* CSS ******************************************************************************************************************************/

const loginPageContainer = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});
