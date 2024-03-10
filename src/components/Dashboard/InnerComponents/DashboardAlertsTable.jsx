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
import { getFormattedTrigger } from "@/utils";

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



export default function DashboardAlertsTable(props) {
  const triggerOptions = (a, b) => {};
  const [rows, setRows] = React.useState([]);
  const [noRowsText, setNoRowsText] = React.useState("");

  const [anchorElArray, setAnchorElArray] = React.useState(new Array(rows?.length).fill(null));

  React.useEffect(()=>{
    console.log('alertss', props.alerts)
    setRows(props?.alerts);
  }, [props.alerts]);

  React.useEffect(()=>{
    setNoRowsText(props?.noRowsText);
  }, [props.noRowsText]);

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
              <h2 className="text-md font-semibold">Exchange</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">Pair(s)</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">Trigger</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">No of Indicators</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">Webhooks</h2>
            </StyledTableCell>
            <StyledTableCell align="left">
              <h2 className="text-md font-semibold">ACTIONS</h2>
            </StyledTableCell>
          </TableRow>
        </TableHead>
          {
          rows?.length 
          ?
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="left">
                <div className=" text-lg">{row.alertName}</div>
              </StyledTableCell>

              <StyledTableCell align="left">
                <div className="flex items-center gap-2">
                  <ConditionIcon condition="crossing" />
                  <div className="">{row.exchange}</div>
                </div>
              </StyledTableCell>

              <StyledTableCell align="left">
                <span className="font-semibold">
                  {row.multiPair.join(', ')}  
                </span>
              </StyledTableCell>

              <StyledTableCell align="left">
                <div className="font-semibold text-md">{getFormattedTrigger(row.trigger)}</div>
                <br />
                Expires on <span className="font-semibold">{row.expiration.slice(0,10)}</span>
              </StyledTableCell>
              <StyledTableCell align="left">{row.indicators.length}</StyledTableCell>

              <StyledTableCell align="left">
                {
                  row.webhooks.length 
                  ?
                    row.webhooks.map((webhook, index) => {
                      return  (<div className="font-semibold text-md" key={index}>{webhook.webhookURL}</div>)
                    })
                  : <div className="italic">No Webhooks</div>
                }
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
        : null
      }
      </Table>
      {
        rows?.length
        ? 
        null 
        :
        <div className="bg-white w-full text-center py-8 text-lg italic">
          {noRowsText}
        </div>
      }
    </TableContainer>
  );
}
