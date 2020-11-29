import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Link, useHistory } from "react-router-dom";
import { CSVLink } from "react-csv";
import smartlogo from "../logo-color.svg";

import { Button } from "@material-ui/core";
// import { auth } from "../../firebase";
import axios from "axios";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "OrganizationType",
    numeric: true,
    disablePadding: false,
    label: "OrganizationType",
  },
  {
    id: "OrganizationName",
    numeric: true,
    disablePadding: false,
    label: "OrganizationName",
  },
  {
    id: "Poc",
    numeric: false,
    disablePadding: true,
    label: "Point of Contact",
  },
  { id: "Email", numeric: true, disablePadding: false, label: "Email" },
  { id: "City", numeric: true, disablePadding: false, label: "City" },
  { id: "Phone", numeric: true, disablePadding: false, label: "Phone" },
  { id: "sectors", numeric: true, disablePadding: false, label: "Sector" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    backgroundColor: "#69BFC3",
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 1),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
    color: "#fff",
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    top: "0px",
    zIndex: "9999",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  buttonStyle: {
    color: "#fff",
  },
}));

const AdminDashboard = () => {
  const history = useHistory();
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("Email");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const [errorMsg, setErrorMsg] = React.useState("")
  const newRows = rows?.length
    ? rows.map((row) => {
        return {
          OrganizationType: row.OrganizationType,
          OrganizationName: row.OrganizationName,
          Poc: row.Poc,
          Email: row.Email,
          City: row.City,
          Phone: row.Phone,
          datasets: JSON.stringify(row.datasets[0]),
        };
      })
    : [];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.Poc);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, Poc) => {
    const selectedIndex = selected.indexOf(Poc);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Poc);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (Poc) => selected.indexOf(Poc) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleLogin = () => {
    history.push("/admin");
  };

  const signOut = () => {
    const url = "api/users/logout";
    axios
      .get(url)
      .then((res) => {
        setUser(null);
        setRows([]);
        history.push("/admin");
      })
      .catch((err) => setErrorMsg(err));
  };

  useEffect(() => {
    const url = "api/users/auth";
    axios
      .get(url)
      .then((res) => {
        const { isAuth } = res.data;
        if (isAuth) {
          setUser(isAuth);
          const url = "/api/cities/getdata";
          axios
            .get(url)
            .then((res) => setRows(res.data))
            .catch((err) => {
              setRows([]);
              setErrorMsg(err)
            });
        } else {
          setUser(null);
          setRows([]);
          history.push("/admin");
        }
      })
      .catch((err) => {
        setErrorMsg("Authentication Error");
        setUser(null);
        setRows([]);
        history.push("/admin");
      });
  }, [user, history]);

  const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <Link to="/">
          <img
            src={smartlogo}
            alt="smartmovelogo"
            style={{ width: "100px", maxWidth: "120px", maxHeight: "80px" }}
          />
        </Link>

        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Dashboard
        </Typography>
        <Tooltip title="Download">
          <CSVLink data={newRows} filename={"City-datasets.csv"}>
            <CloudDownloadIcon style={{ color: "#fff", margin: "10px" }} />
          </CSVLink>
        </Tooltip>
        {user ? (
          <Tooltip title="Login">
            <Button onClick={signOut} style={{ color: "#fff", margin: "10px" }}>
              Logout
            </Button>
          </Tooltip>
        ) : (
          <Tooltip title="Login">
            <Button
              onClick={handleLogin}
              style={{ color: "#fff", margin: "10px" }}
            >
              login
            </Button>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.Poc);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const datasetList = row.datasets[0];
                    const sectorsList = datasetList
                      ? Object.keys(datasetList)
                      : [];
                    
                    let subsectors = sectorsList.map((sector) => {
                      return { [sector]: datasetList[sector].join(",") };
                    });
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.Poc)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          {row.OrganizationType}
                        </TableCell>
                        <TableCell align="right">
                          {row.OrganizationName}
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.Poc}
                        </TableCell>
                        <TableCell align="right">{row.Email}</TableCell>
                        <TableCell align="right">{row.City}</TableCell>
                        <TableCell align="right">{row.Phone}</TableCell>
                        <TableCell align="right">
                          {JSON.stringify(subsectors[0])}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{ height: (dense ? 33 : 53) * emptyRows }}
                    key={Math.random()}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
          <Typography style={{color:'red'}}>{errorMsg}</Typography>
        </Paper>
    </div>
  );
};

export default AdminDashboard;
