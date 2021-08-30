import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    minWidth: "340px",
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f50057",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, name, members, status, created_ts) {
  return { id, name, members, status, created_ts };
}

const rows = [
  createData(159, "X-KEYSCORE", 3, "In Progress", new Date()),
  createData(175, "EPIC-SHELTER", 6, "Completed", new Date()),
  createData(215, "KUDRAT OS", 2, "Cancelled", new Date()),
];

export default function TableComponent() {
  const classes = useStyles();

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Project ID</StyledTableCell>
              <StyledTableCell align="right">Project Name</StyledTableCell>
              <StyledTableCell align="right">Members</StyledTableCell>
              <StyledTableCell align="right">Project Status</StyledTableCell>
              <StyledTableCell align="right">Project Created</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.members}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">
                  {moment(row.created_ts).format("LL")}
                </StyledTableCell>
                <StyledTableCell align="right">View Details</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
