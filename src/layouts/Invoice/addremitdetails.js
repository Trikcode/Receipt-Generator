/* eslint-disable */

import React, { useState, useEffect } from "react";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Grid } from "@mui/material";
import { Form, Alert, Button, Modal } from "react-bootstrap";
import ReceiptDetails from "receiptservice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase_config";
// import "./adddetails.css";

const AddRemitdetaisModal = (props) => {
  const newid = props.itemid;
  const getnewitems = props.refresh;
  const closemodal = props.close;
  const [state, setState] = useState({});
  const [tamount, setTamount] = useState("");
  const [paycharge, setPaycharge] = useState("");
  const [tcharge, setTcharge] = useState("");
  const [remitcost, setRemitcost] = useState("");
  const [remitamt, setRemitamt] = useState("");
  const [currency, setCurrency] = useState("");
  const [exchange, setExchange] = useState("");
  const [beneficiaryaccnumber, setBeneficiaryaccnumber] = useState("");
  const [beneficiaryaccname, setBeneficiaryaccname] = useState("");
  const [beneficiaryaccsddress, setBeneficiaryaccaddress] = useState("");
  const [bankcode, setBankcode] = useState("");
  const [bankname, setBankname] = useState("");
  const [bankaddress, setBankaddress] = useState("");
  const [paypurpose, setPaypurpose] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const SubmitInvoice = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      tamount === "" ||
      paycharge === "" ||
      tcharge === "" ||
      remitcost === "" ||
      remitamt === "" ||
      currency === "" ||
      exchange === "" ||
      beneficiaryaccnumber === "" ||
      beneficiaryaccsddress === "" ||
      bankcode === "" ||
      bankname === "" ||
      beneficiaryaccname === "" ||
      paypurpose === "" ||
      bankaddress === ""
    ) {
      setMessage({ error: true, msg: "Please Fill All Fields" });
      return;
    }
    const newItems = {
      tamount,
      paycharge,
      tcharge,
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
      bankaddress,
    };

    try {
      if (newid !== undefined && newid !== "") {
        await ReceiptDetails.updateItem(newid, newItems);
        setMessage({ error: false, msg: "Data has been updated successfully" });
      } else {
        await ReceiptDetails.addItems(newItems);
        setMessage({ error: false, msg: "New data added successfully" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setBeneficiaryaccaddress("");
    setBeneficiaryaccname("");
    setBeneficiaryaccnumber("");
    setBankcode("");
    setBankname("");
    setCurrency("");
    setExchange("");
    setPaycharge("");
    setPaypurpose("");
    setRemitamt("");
    setRemitcost("");
    setTamount("");
    setTcharge("");
    setBankaddress("");
    getnewitems();
    closemodal();
  };
  const [newbeneficiary, setBeneficiarylist] = useState([]);
  const getbeneficiaries = async () => {
    const beneficiaries = await getDocs(collection(db, "beneficiaries"));
    setBeneficiarylist(beneficiaries.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getbeneficiaries();
    return () => {
      setState({});
    };
  }, []);

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnapshot = await ReceiptDetails.getSingleItem(newid);
      setCurrency(docSnapshot.data().currency);
      setExchange(docSnapshot.data().exchange);
      setPaycharge(docSnapshot.data().paycharge);
      setPaypurpose(docSnapshot.data().paypurpose);
      setRemitamt(docSnapshot.data().remitamt);
      setRemitcost(docSnapshot.data().remitcost);
      setTamount(docSnapshot.data().tamount);
      setTcharge(docSnapshot.data().tcharge);
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
  };
  useEffect(() => {
    if (newid !== undefined && newid !== "") {
      editHandler();
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
            size="lg"
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
              <Form onSubmit={SubmitInvoice}>
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
                      <Form.Select
                        value={beneficiaryaccnumber}
                        onChange={(e) => setBeneficiaryaccnumber(e.target.value)}
                      >
                        <option>Choose...</option>
                        {newbeneficiary.map((item) => {
                          return (
                            <option key={item.id} value={item.baccountnumber}>
                              {item.baccountnumber}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Account Name</Form.Label>
                      <Form.Select
                        value={beneficiaryaccname}
                        onChange={(e) => setBeneficiaryaccname(e.target.value)}
                      >
                        <option>Choose...</option>
                        {newbeneficiary.map((item) => {
                          return (
                            <option key={item.id} value={item.baccountname}>
                              {item.baccountname}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Beneficiary Address</Form.Label>
                      <Form.Select
                        value={beneficiaryaccsddress}
                        onChange={(e) => setBeneficiaryaccaddress(e.target.value)}
                      >
                        <option>Choose...</option>
                        {newbeneficiary.map((item) => {
                          return (
                            <option key={item.id} value={item.baddress}>
                              {item.baddress}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank SWIFT Code</Form.Label>
                      <Form.Select value={bankcode} onChange={(e) => setBankcode(e.target.value)}>
                        <option>Choose...</option>
                        {newbeneficiary.map((item) => {
                          return (
                            <option key={item.id} value={item.bbankcode}>
                              {item.bbankcode}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank Name</Form.Label>
                      <Form.Select value={bankname} onChange={(e) => setBankname(e.target.value)}>
                        <option>Choose...</option>
                        {newbeneficiary.map((item) => {
                          return (
                            <option key={item.id} value={item.bbankname}>
                              {item.bbankname}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="labelsize">Bank Address</Form.Label>
                      <Form.Select
                        value={bankaddress}
                        onChange={(e) => setBankaddress(e.target.value)}
                      >
                        <option>Choose...</option>
                        {newbeneficiary.map((item, index) => {
                          return (
                            <option key={item.id} value={item.bbankaddress}>
                              {item.bbankaddress}
                            </option>
                          );
                        })}
                      </Form.Select>
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
                    Add /Update
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

export default AddRemitdetaisModal;
