import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image'

import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Rows = ({ rows }) => {
    return (
        <>
            {rows.map((row, idx) => (
                <StyledTableRow key={idx}>
                    {row.data.map((d, index)=>(
                        <StyledTableCell align="left" key={index}>{d}</StyledTableCell>
                    ))}
                </StyledTableRow>
            ))}
        </>
    )
}

const EncuestaCustomTable = ({ dataTable }) => {
  return (
    <TableContainer component={Paper} sx={{ 
        overflowX: 'auto'
    }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {dataTable.colums.map((colum, id)=>(
                <StyledTableCell key={id}>{colum}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <Rows rows={dataTable.rows}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EncuestaCustomTable