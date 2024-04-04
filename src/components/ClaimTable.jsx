import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CoverValue from "./CoverValue";

export default function ClaimTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">PELW COVER YEARS</TableCell>
            <TableCell align="center">CALCULATION 70%</TableCell>
            <TableCell align="center">CLAIM</TableCell>
            <TableCell align="center">
              <CoverValue />
              {/* <Button variant="contained" color='secondary'>VALUE COVER BY PELW</Button> */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
}
