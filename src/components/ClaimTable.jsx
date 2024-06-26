import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CoverValue from "./CoverValue";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFirstClaim,
  updateSecondClaim,
  updateThirdClaim,
  updateFourthClaim,
  updateFifthClaim,
  updateTotalClaim,
} from "../features/claim/claimSlice";
import { setAlert } from "../features/alert/alertSlice";
import TotalClaimTable from "./TotalClaimTable";

export default function ClaimTable() {
  const state = useSelector((state) => state.claim);
  const dispatch = useDispatch();

  const firstYear = () => {
    return (state.coverAmount - state.firstClaim).toFixed(2);
  };
  const secondYear = () => {
    let result = ((firstYear() - state.secondClaim) * 70) / 100;
    result = result.toFixed(2);
    return result;
  };
  const thirdYear = () => {
    let result = ((secondYear() - state.thirdClaim) * 70) / 100;
    result = result.toFixed(2);
    return result;
  };
  const fourthYear = () => {
    let result = ((thirdYear() - state.fourthClaim) * 70) / 100;
    result = result.toFixed(2);
    return result;
  };
  const fifthYear = () => {
    let result = ((fourthYear() - state.fifthClaim) * 70) / 100;
    result = result.toFixed(2);
    return result;
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">PELW COVER YEARS</TableCell>
              <TableCell align="center">CALCULATION 70%</TableCell>
              <TableCell align="center">CLAIM</TableCell>
              <TableCell align="center">
                <CoverValue />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                1st years
              </TableCell>
              <TableCell align="center">Nil</TableCell>
              <TableCell align="center">
                <TextField
                  id="filled-basic"
                  label="RM"
                  variant="standard"
                  sx={{ width: "100px" }}
                  value={state.firstClaim}
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
                      dispatch(updateFirstClaim(value));
                      dispatch(updateTotalClaim());
                    }
                  }}
                />
              </TableCell>

              <TableCell
                align="center"
                sx={{ color: firstYear() < 0 ? "#FF407D" : "inherit" }}
              >
                RM{firstYear()}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                2nd years
              </TableCell>
              <TableCell align="center">70%</TableCell>
              <TableCell align="center">
                <TextField
                  id="filled-basic"
                  label="RM"
                  variant="standard"
                  sx={{ width: "100px" }}
                  value={state.secondClaim}
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
                      dispatch(updateSecondClaim(value));
                      dispatch(updateTotalClaim());
                    }
                  }}
                />
              </TableCell>

              <TableCell
                sx={{ color: secondYear() < 0 ? "#FF407D" : "inherit" }}
                align="center"
              >
                RM{secondYear()}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                3rd years
              </TableCell>
              <TableCell align="center">70%</TableCell>
              <TableCell align="center">
                <TextField
                  id="filled-basic"
                  label="RM"
                  variant="standard"
                  sx={{ width: "100px" }}
                  value={state.thirdClaim}
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
                      dispatch(updateThirdClaim(value));
                      dispatch(updateTotalClaim());
                    }
                  }}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: thirdYear() < 0 ? "#FF407D" : "inherit" }}
              >
                RM{thirdYear()}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                4th years
              </TableCell>
              <TableCell align="center">70%</TableCell>
              <TableCell align="center">
                <TextField
                  id="filled-basic"
                  label="RM"
                  variant="standard"
                  sx={{ width: "100px" }}
                  value={state.fourthClaim}
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
                      dispatch(updateFourthClaim(value));
                      dispatch(updateTotalClaim());
                    }
                  }}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: fourthYear() < 0 ? "#FF407D" : "inherit" }}
              >
                RM{fourthYear()}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                5th years
              </TableCell>
              <TableCell align="center">70%</TableCell>
              <TableCell align="center">
                <TextField
                  id="filled-basic"
                  label="RM"
                  variant="standard"
                  sx={{ width: "100px" }}
                  value={state.fifthClaim}
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
                      dispatch(updateFifthClaim(value));
                      dispatch(updateTotalClaim());
                    }
                  }}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: fifthYear() < 0 ? "#FF407D" : "inherit" }}
              >
                RM{fifthYear()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TotalClaimTable totalLeft={fifthYear} />
    </>
  );
}
