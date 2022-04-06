/* eslint-disable */

import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Grid } from "@mui/material";
import { Form, Alert, Button, Modal } from "react-bootstrap";
import ReceiptDetails from "receiptservice";
import "./adddetails.css";

const AdddetailsModal = (props) => {
  const newid = props.beneid;
  const getnewitems = props.refresh;
  const closemodal = props.close;
  const [baccountnumber, setBaccountnumber] = useState("");
  const [baccountname, setBaccountname] = useState("");
  const [baddress, setBeneficiaryaccaddress] = useState("");
  const [bbankcode, setBbankcode] = useState("");
  const [bbankname, setBbankname] = useState("");
  const [bbankaddress, setBankddress] = useState("");
  const [state, setState] = useState({});

  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      baccountnumber === "" ||
      baddress === "" ||
      bbankcode === "" ||
      bbankname === "" ||
      baccountname === "" ||
      bbankaddress === ""
    ) {
      setMessage({ error: true, msg: "Please Fill All Fields" });
      return;
    }
    const newItems = {
      baccountnumber,
      baddress,
      baccountname,
      bbankcode,
      bbankname,
      bbankaddress,
    };

    try {
      if (newid !== undefined && newid !== "") {
        await ReceiptDetails.updateBeneficiary(newid, newItems);
        setMessage({ error: false, msg: "Data has been updated successfully" });
      } else {
        await ReceiptDetails.addBeneficiaries(newItems);
        setMessage({ error: false, msg: "Items added successfully" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setBeneficiaryaccaddress("");
    setBaccountname("");
    setBaccountnumber("");
    setBbankcode("");
    setBbankname("");
    setBankddress("");
    getnewitems();
    closemodal();
  };
  const editBeneHandler = async () => {
    setMessage("");
    try {
      const docSnapshot = await ReceiptDetails.getBeneSingleItem(newid);
      setBaccountname(docSnapshot.data().baccountname);
      setBaccountnumber(docSnapshot.data().baccountnumber);
      setBbankcode(docSnapshot.data().bbankcode);
      setBbankname(docSnapshot.data().bbankname);
      setBeneficiaryaccaddress(docSnapshot.data().baddress);
      setBankddress(docSnapshot.data().bbankaddress);
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
  };
  useEffect(() => {
    if (newid !== undefined && newid !== "") {
      editBeneHandler();
    }
    return () => {
      setState({});
    };
  }, [newid]);

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid>
          <Modal
            show={props.show}
            onHide={props.close}
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
                Add Beneficiary Details
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
                    <Form.Text> Beneficiary Details</Form.Text>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Account Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={baccountnumber}
                        onChange={(e) => setBaccountnumber(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Account Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={baccountname}
                        onChange={(e) => setBaccountname(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Address</Form.Label>
                      <Form.Control
                        type="text"
                        value={baddress}
                        onChange={(e) => setBeneficiaryaccaddress(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-sm-6">
                    <Form.Text> Beneficiary Bank Details</Form.Text>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank SWIFT Code</Form.Label>
                      <Form.Control
                        type="text"
                        value={bbankcode}
                        onChange={(e) => setBbankcode(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={bbankname}
                        onChange={(e) => setBbankname(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank Address</Form.Label>
                      <Form.Control
                        type="text"
                        value={bbankaddress}
                        onChange={(e) => setBankddress(e.target.value)}
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
