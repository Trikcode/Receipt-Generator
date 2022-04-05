/* eslint-disable */

import React from "react";
import { Modal } from "react-bootstrap";
// import { useMatch } from "react-router-dom";
// import { useParams } from "react-router-dom";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Grid } from "@mui/material";
import { Button, Table } from "react-bootstrap";
import "./adddetails.css";

const ViewBeneficiaryModal = (props) => {
  const benedetails = props.benedetails;

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid>
          <Modal
            show={props.view}
            onHide={props.hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "10000" }}
          >
            <Modal.Header>
              <Modal.Title
                id="contained-modal-title-vcenter customer"
                style={{ textAlign: "center" }}
              >
                Beneficiary Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Account Name</th>
                    <th>Account Number</th>
                    <th>Address</th>
                    <th>Bank Name</th>
                    <th>Bank Code</th>
                    <th>Bank Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{benedetails.baccountname}</td>
                    <td>{benedetails.baccountnumber}</td>
                    <td>{benedetails.baddress}</td>
                    <td>{benedetails.bbankname}</td>
                    <td>{benedetails.bbankcode}</td>
                    <td>{benedetails.bbankaddress}</td>
                  </tr>
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.hide}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default ViewBeneficiaryModal;
