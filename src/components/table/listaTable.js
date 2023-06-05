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
  padding: '7px 10px'
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


const Rows = ({ rows, handleAddToList, handleModifyAsistencia }) => {
    return (
        <>
            {rows.map((row, idx) => (
                <StyledTableRow key={idx}>
                    {
                        row.data.map((d, index)=>(
                            <StyledTableCell align="left" 
                                onClick={
                                    () => index === 3 ? handleModifyAsistencia(idx) : 
                                        handleAddToList(idx)
                                }
                                key={index}
                            >
                                {d === true ? 'Asistió' : d === false ? 'No asistió' : d}
                            </StyledTableCell>
                        ))
                    }
                </StyledTableRow>
            ))}
        </>
    )
}

const ListaTable = ({ dataTable, handleAddToList = () => {}, handleModifyAsistencia = () => {} }) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {dataTable.colums.map((colum, id)=>(
                <StyledTableCell key={id}>{colum}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <Rows
            rows={dataTable.rows} handleAddToList={handleAddToList} 
            handleModifyAsistencia={handleModifyAsistencia}
        />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListaTable