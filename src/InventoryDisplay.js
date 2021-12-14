import React from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const DisplayList = ({ inputs }) => (
    <TableBody>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {inputs.item}
        </TableCell>
        <TableCell align="right">{inputs.quantity}</TableCell>
        {/* <TableCell align="right">{row.image}</TableCell> */}
      </TableRow>
    </TableBody>
);

export default DisplayList;