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
import HistoryIcon from "@mui/icons-material/History";

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
              <div className="create-container">
                <HistoryIcon
                  type="button"
                  onClick={getInvoicenames}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />
                {isShown && (
                  <div style={{ fontWeight: 10, color: "#33A8FF" }}>Click to Refresh Table</div>
                )}
                <button
                  className="btn create"
                  type="button"
                  onClick={() => setShowaddremitdetails(true)}
                >
                  Create
                </button>
              </div>

              <MDBox pt={3}>
                <TableContainer>
                  <Table>
                    <MDBox component="thead">
                      <TableRow style={{ background: "#dddddd" }}>
                        <TableCell style={{ fontWeight: 500 }}>No.</TableCell>
                        <TableCell style={{ fontWeight: 500 }}>Names</TableCell>
                        <TableCell style={{ fontWeight: 500 }}>Acount Number</TableCell>
                        <TableCell style={{ fontWeight: 500, textAlign: "center" }}>
                          Action
                        </TableCell>
                      </TableRow>
                    </MDBox>
                    <TableBody>
                      {invoicedetails.map((invoiceitems) => {
                        const { id, beneficiaryaccnumber, beneficiaryaccname } = invoiceitems;
                        i++;
                        return (
                          <TableRow key={id}>
                            <TableCell>{i}.</TableCell>
                            <TableCell>{beneficiaryaccname}</TableCell>
                            <TableCell>{beneficiaryaccnumber}</TableCell>
                            <TableCell
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginRight: 20,
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
                </TableContainer>
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
            close={() => setShowaddremitdetails(false)}
          />
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default InvoiceTable;
