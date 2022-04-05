/* eslint-disable */

import React, { useState } from "react";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Grid } from "@mui/material";
import { Modal } from "react-bootstrap";
import InvoiceTableHeader from "components/InvoiceTable/InvoiceTableHeader";
import html2pdf from "html2pdf.js";
import logo from "../../assets/logo.svg";
import "./Invoice.css";

const PDFmodal = (props) => {
  const finalitems = props.newitemlist;
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const generatePDF = () => {
    const stage = document.querySelector(".container");
    const opt = {
      margin: 0,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(stage).toPdf().save();
  };
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
                INVOICE
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="pdf-container">
                <div className="container">
                  <div className="head">
                    <div className="brand">
                      <img src={logo} alt="logo" />
                      <h2 className="type">Outward Remittance</h2>
                    </div>
                    <div className="base">
                      <div className="tref">
                        <p>
                          <strong>Ref:</strong> {finalitems.id}
                        </p>
                      </div>
                      <div className="tdate">
                        <p>
                          <strong>Date:</strong> {date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <InvoiceTableHeader constantitems={finalitems} />
                  <div className="footer">
                    <div className="tref">
                      <p>sales@internopay.com</p>
                    </div>
                    <div className="tdate">
                      <p>www.internopay.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" onClick={generatePDF}>
                GeneratePDF
              </button>
            </Modal.Footer>
          </Modal>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default PDFmodal;
