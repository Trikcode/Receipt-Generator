/* eslint-disable */
// @mui material components
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableCell } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebase_config";
import AddRemitdetaisModal from "./addremitdetails";
import PDFmodal from "./pdfmodal";
import Icon from "@mui/material/Icon";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "./style.css";
import "assets/Invoice.css";

function InvoiceTable() {
  const [showremitdetails, setShowaddremitdetails] = useState(false);
  const [invoicedetails, setInvoicedetails] = useState([]);
  const [showpdfmodal, setShowpdfmodal] = useState(false);
  const [newitemlist, setNewitemlist] = useState([]);
  const [itemid, setItemid] = useState("");
  const [isShown, setIsShown] = useState(false);
  const getInvoicenames = async () => {
    const invoicenames = await getDocs(collection(db, "internopay"));
    setInvoicedetails(invoicenames.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getInvoicenames();
  }, []);

  const transferPdfitems = (invoiceitems) => {
    setShowpdfmodal(true);
    setNewitemlist(invoiceitems);
  };
  const editField = (id) => {
    setItemid(id);
    setShowaddremitdetails(true);
  };
  let i = 0;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Invoice Table
                </MDTypography>
              </MDBox>
              <div style={{ textAlign: "right", padding: 10 }}>
                <button
                  className="btn create"
                  type="button"
                  onClick={() => setShowaddremitdetails(true)}
                >
                  Create
                </button>
              </div>
              <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <MDBox>
                  <MDTypography variant="h6" gutterBottom>
                    Customers
                  </MDTypography>
                </MDBox>
              </MDBox>
              <MDBox pr={4}>
                <Table>
                  <MDBox component="thead">
                    <TableRow>
                      <TableCell>
                        <MDTypography variant="h6" className="rowcolor">
                          No.
                        </MDTypography>
                      </TableCell>
                      <TableCell>
                        <MDTypography variant="h6" className="rowcolor">
                          {" "}
                          Names
                        </MDTypography>
                      </TableCell>
                      <TableCell>
                        <MDTypography variant="h6" className="rowcolor">
                          {" "}
                          Acount Number
                        </MDTypography>
                      </TableCell>
                      <TableCell>
                        <MDTypography variant="h6" className="rowcolor">
                          Amount
                        </MDTypography>
                      </TableCell>
                      <TableCell style={{ display: "flex", justifyContent: "space-between" }}>
                        <MDTypography variant="h6" className="rowcolor">
                          Edit
                        </MDTypography>
                        <MDTypography variant="h6" className="rowcolor">
                          PDF
                        </MDTypography>
                      </TableCell>
                    </TableRow>
                  </MDBox>
                  <TableBody>
                    {invoicedetails.map((invoiceitems) => {
                      const { id, beneficiaryaccnumber, beneficiaryaccname } = invoiceitems;
                      let myInt = parseInt(invoiceitems.remitamt);
                      let myInt1 = parseInt(invoiceitems.paycharge);
                      let myInt2 = parseInt(invoiceitems.tamount);
                      let myInt3 = parseInt(invoiceitems.tcharge);
                      let myInt4 = parseInt(invoiceitems.remitcost);

                      const subtotal = parseInt(myInt + myInt1 + myInt2 + myInt3 + myInt4);
                      const total = parseInt(subtotal - myInt1);
                      i++;
                      return (
                        <TableRow key={id}>
                          <TableCell>
                            <MDTypography variant="h6" className="itemcolor">
                              {i}.
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="h6" className="itemcolor">
                              {beneficiaryaccname}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="h6" className="itemcolor">
                              {beneficiaryaccnumber}
                            </MDTypography>
                          </TableCell>
                          <TableCell>
                            <MDTypography variant="h6" className="itemcolor">
                              {total}
                            </MDTypography>
                          </TableCell>
                          <TableCell
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Icon variant="button" color="warning" onClick={() => editField(id)}>
                              edit
                            </Icon>
                            &nbsp;
                            <PictureAsPdfIcon
                              variant="button"
                              onClick={() => transferPdfitems(invoiceitems)}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </MDBox>
            </Card>
          </Grid>
          <PDFmodal
            show={showpdfmodal}
            close={() => setShowpdfmodal(false)}
            newitemlist={newitemlist}
          />
          <AddRemitdetaisModal
            show={showremitdetails}
            itemid={itemid}
            refresh={getInvoicenames}
            close={() => setShowaddremitdetails(false)}
          />
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default InvoiceTable;
