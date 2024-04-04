import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { formatNumber } from "../utils/tool";

export default function TotalCalimTable() {
  const cellColor = {
    backgroundColor: "#9C27B0",
    borderColor: "#9C27B0",
    color: "white",
    fontSize: "1.2rem",
  };
  const state = useSelector((state) => state.claim);

  const totalClaim = () => {
    return formatNumber(
      state.firstClaim +
        state.secondClaim +
        state.thirdClaim +
        state.fourthClaim +
        state.fifthClaim
    );
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
              RM{totalClaim()}
            </TableCell>
            <TableCell align="center" sx={cellColor}>
              TOTAL VALUE LEFT
            </TableCell>
            <TableCell align="center" sx={cellColor}>
              RM{state.valueLeft.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
