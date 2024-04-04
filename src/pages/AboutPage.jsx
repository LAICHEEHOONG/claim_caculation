import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function AboutPage() {
  return (
    <div className="home-container">
      <Card>
        <CardContent
          sx={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert severity="secondary">
            <AlertTitle>
              Annual Repair and Replacement Limitation Based on Internal Value
              Calculation
            </AlertTitle>
            The total amount of repair and replacement in a year shall not
            exceed the product yearly internal value which is determined at 70%
            of the previous year unclaimed internal value(product internal value
            in the first year is equivalent to the purchase price of the
            product). An internal value might not be the same as market value,
            but it is usually higher or equivalent to the market value in normal
            circumstances.
          </Alert>
          <h2>PELW BENEFIT</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">JOB DESCRIPTION</TableCell>
                  <TableCell align="center">NON PELW COVER</TableCell>
                  <TableCell align="center">PELW COVER</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    CHECKING / DIAGNOSTIC
                  </TableCell>
                  <TableCell align="center">RM50</TableCell>
                  <TableCell align="center">NIL</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    COURIER FEE
                  </TableCell>
                  <TableCell align="center">RM28</TableCell>
                  <TableCell align="center">NIL</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    WINDOWS FORMAT
                  </TableCell>
                  <TableCell align="center">RM100</TableCell>
                  <TableCell align="center">RM50</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    DEVICE CLEANING
                  </TableCell>
                  <TableCell align="center">RM50</TableCell>
                  <TableCell align="center">RM35</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}
