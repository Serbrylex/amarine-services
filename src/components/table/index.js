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
            {rows.map((row) => (
                <StyledTableRow key={row.image}>
                    <StyledTableCell component="th" scope="row">
                        <Image
                            src={row.image}
                            height={30}
                            width={30}
                            fit="cover"
                            duration={ 3000 }
                            easing= 'cubic-bezier(0.7, 0, 0.6, 1)'
                            errorIcon={ true }
                            shift={null}
                            distance="100px"
                            shiftDuration={ 900 }
                            bgColor="inherit"
                            alt="facebook"
                        />
                    </StyledTableCell>
                    {row.data.map((d, index)=>(
                        <StyledTableCell align="right" key={index}>{d}</StyledTableCell>
                    ))}
                </StyledTableRow>
            ))}
        </>
    )
}

const CustomizedTables = ({ dataTable }) => {
  return (
    <TableContainer component={Paper}>
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

export default CustomizedTables