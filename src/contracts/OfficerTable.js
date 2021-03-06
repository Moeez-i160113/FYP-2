import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import Navbar from './Navbar'

const columns = [
  { id: 'id', label: '#', minWidth: 40 },
  { id: 'name', label: 'Name', minWidth: 40 },
  { id: 'CNIC', label: 'CNIC', minWidth: 40 },
  {
    id: 'Address',
    label: 'Address',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'designation',
    label: 'Designation',
    minWidth: 40,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'password',
    label: 'Password',
    minWidth: 40,
    align: 'right',
    format: value => value.toFixed(2),
  },
  { id: 'username', label: 'Username', minWidth: 40 },
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});


const StickyHeadTable = props => {
  const classes = useStyles();
   
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
    <Navbar />
      <div className={classes.tableWrapper}>
        <Typography class = "text-center" component="h1" variant="h1">
          Staff Information
        </Typography>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { props.officers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((officer, key) => {
              return(
                <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                    {columns.map((column, key1) => {
                    const value = officer[key1].toString();
                    return (
                      <TableCell key={key1} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}

                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.officerCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable;