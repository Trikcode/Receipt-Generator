/* eslint-disable */

import React, { useState } from "react";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Grid } from "@mui/material";
import { Form, Alert, Button, Modal } from "react-bootstrap";
import ReceiptDetails from "receiptservice";
import "./adddetails.css";

const AdddetailsModal = (props) => {
  const [tamount, setTamount] = useState("");
  const [paycharge, setPaycharge] = useState("");
  const [tcharge, setTcharge] = useState("");
  const [bonus, setBonus] = useState("");
  const [remitcost, setRemitcost] = useState("");
  const [remitamt, setRemitamt] = useState("");
  const [currency, setCurrency] = useState("");
  const [exchange, setExchange] = useState("");
  const [beneficiaryaccnumber, setBeneficiaryaccnumber] = useState("");
  const [beneficiaryaccname, setBeneficiaryaccname] = useState("");
  const [beneficiaryaccsddress, setBeneficiaryaccaddress] = useState("");
  const [bankcode, setBankcode] = useState("");
  const [bankname, setBankname] = useState("");
  const [paypurpose, setPaypurpose] = useState("");

  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    setMessage("");
    if (
      tamount === "" ||
      paycharge === "" ||
      tcharge === "" ||
      bonus === "" ||
      remitcost === "" ||
      remitamt === "" ||
      currency === "" ||
      exchange === "" ||
      beneficiaryaccnumber === "" ||
      beneficiaryaccsddress === "" ||
      bankcode === "" ||
      bankname === "" ||
      beneficiaryaccname === "" ||
      paypurpose === ""
    ) {
      setMessage({ error: true, msg: "Please Fill All Fields" });
      return;
    }
    const newItems = {
      tamount,
      paycharge,
      tcharge,
      bonus,
      remitcost,
      remitamt,
      currency,
      exchange,
      beneficiaryaccnumber,
      beneficiaryaccsddress,
      beneficiaryaccname,
      bankcode,
      paypurpose,
      bankname,
    };
    console.log(newItems);

    try {
      await ReceiptDetails.addItems(newItems);
      setMessage({ error: false, msg: "Items added successfully" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setBeneficiaryaccaddress("");
    setBeneficiaryaccname("");
    setBeneficiaryaccnumber("");
    setBankcode("");
    setBankname("");
    setBonus("");
    setCurrency("");
    setExchange("");
    setPaycharge("");
    setPaypurpose("");
    setRemitamt("");
    setRemitcost("");
    setTamount("");
    setTcharge("");
  };

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid>
          <Modal
            show={props.show}
            cancel={props.close}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "10000" }}
          >
            <Modal.Header>
              <Modal.Title
                id="contained-modal-title-vcenter customer"
                style={{ paddingLeft: "20%" }}
              >
                Add Customer Details
              </Modal.Title>
            </Modal.Header>
            {message?.msg && (
              <Alert
                variant={message?.error ? "danger" : "success"}
                dismissible
                onClose={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <Form.Text> Remittance Details</Form.Text>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Transaction Amount</Form.Label>
                      <Form.Control
                        type="text"
                        value={tamount}
                        onChange={(e) => setTamount(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Payment Channel Charge</Form.Label>
                      <Form.Control
                        type="text"
                        value={paycharge}
                        onChange={(e) => setPaycharge(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Transfer Charge</Form.Label>
                      <Form.Control
                        type="text"
                        value={tcharge}
                        onChange={(e) => setTcharge(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bonus</Form.Label>
                      <Form.Control
                        type="text"
                        value={bonus}
                        onChange={(e) => setBonus(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Cost of Remmmittance</Form.Label>
                      <Form.Control
                        type="text"
                        value={remitcost}
                        onChange={(e) => setRemitcost(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Amount Remitted</Form.Label>
                      <Form.Control
                        type="text"
                        value={remitamt}
                        onChange={(e) => setRemitamt(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Currency</Form.Label>
                      <Form.Control
                        type="text"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Exchange Rate</Form.Label>
                      <Form.Control
                        type="text"
                        value={exchange}
                        onChange={(e) => setExchange(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-sm-6">
                    <Form.Text> Beneficiary Details</Form.Text>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Account Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={beneficiaryaccnumber}
                        onChange={(e) => setBeneficiaryaccnumber(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Account Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={beneficiaryaccname}
                        onChange={(e) => setBeneficiaryaccname(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Address</Form.Label>
                      <Form.Control
                        type="text"
                        value={beneficiaryaccsddress}
                        onChange={(e) => setBeneficiaryaccaddress(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Text> Beneficiary Bank Details</Form.Text>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank SWIFT Code</Form.Label>
                      <Form.Control
                        type="text"
                        value={bankcode}
                        onChange={(e) => setBankcode(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={bankname}
                        onChange={(e) => setBankname(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Purpose of Payment</Form.Label>
                      <Form.Control
                        type="text"
                        value={paypurpose}
                        onChange={(e) => setPaypurpose(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="d-grid gap-2 mb-3">
                  <Button variant="primary" type="Submit">
                    Add
                  </Button>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.close}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default AdddetailsModal;

            
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


