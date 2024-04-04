import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export default function TotalCalimTable() {
  const cellColor = {
    backgroundColor: "#9C27B0",
    borderColor: "#9C27B0",
    color: "white",
    fontSize: "1.2rem",
  };
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={cellColor}>
              TOTAL CLAIM
            </TableCell>
            <TableCell align="center" sx={cellColor}>
              RM1,000
            </TableCell>
            <TableCell align="center" sx={cellColor}>
              TOTAL VALUE LEFT
            </TableCell>
            <TableCell align="center" sx={cellColor}>
              RM573.3
            </TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
              />
            </TableCell>
            <TableCell align="center">RM4000</TableCell>
          </TableRow>
          
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
              />
            </TableCell>
            <TableCell align="center">RM</TableCell>
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
              />
            </TableCell>
            <TableCell align="center">RM</TableCell>
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
              />
            </TableCell>
            <TableCell align="center">RM</TableCell>
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
              />
            </TableCell>
            <TableCell align="center">RM</TableCell>
          </TableRow>
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}
