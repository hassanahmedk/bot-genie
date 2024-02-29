"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConditionIcon from "@/components/shared/ConditionIcon";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#005849",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F9FAFC",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  no,
  name,
  condition,
  price,
  indicater,
  symbol,
  currency,
  trigger
) {
  return { no, name, condition, price, indicater, symbol, currency, trigger };
}

// const rows = [
//   createData(1, "Alert No 45", 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const rows = [{}, {}, {}, {}, {}];

export default function DashboardTable() {
  const triggerOptions = (a, b) => {};

  const [anchorElArray, setAnchorElArray] = React.useState(new Array(rows.length).fill(null));

  const handleClick = (
    event,
    index  ) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">ALERT NAME</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">CONDITION</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">PRICE</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">INDICATOR</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">SYMBOL</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">TRIGGER</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">ACTIONS</h2>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index}
              </StyledTableCell>
              <StyledTableCell align="left">
                <div className=" text-lg">{"Alert No 45"}</div>
              </StyledTableCell>

              <StyledTableCell align="left">
                <div className="flex items-center gap-2">
                  <ConditionIcon condition="crossing" />
                  <div className="">{"Crossing"}</div>
                </div>
              </StyledTableCell>

              <StyledTableCell align="left">{"$112.00"}</StyledTableCell>

              <StyledTableCell align="left">{"3Crows"}</StyledTableCell>

              <StyledTableCell align="left">
                <div className="font-semibold text-md">{"BTC"}</div>
                <br />
                {"Binance"}
              </StyledTableCell>

              <StyledTableCell align="left">
                <div className="font-semibold text-md">{"Only Once"}</div>
                <br />
                Expires on {"26 June 2024"}
              </StyledTableCell>

              <StyledTableCell align="left" key={index}>
                <div className="">
                  <div
                    onClick={() => {
                      triggerOptions(1, 2);
                    }}
                  >
                    <Button
                      id={`basic-button-${index}`}
                      aria-controls={open ? `basic-menu-${index}` : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(event) => handleClick(event, index)}
                    >
                      <MoreHorizIcon />
                    </Button>
                    <Menu
                      id={`basic-menu-${index}`}
                      anchorEl={anchorElArray[index]}
                      open={Boolean(anchorElArray[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": `basic-button-${index}`,
                      }}
                      sx={{ boxShadow: 0 }}
                    >
                      <MenuItem onClick={() => {}}>
                        <div className="flex justify-between w-full">
                          Edit <EditIcon />
                        </div>
                      </MenuItem>
                      <MenuItem onClick={() => {}}>
                        <div className="flex justify-between w-full">
                          Delete <DeleteIcon />
                        </div>{" "}
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
