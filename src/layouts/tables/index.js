/* eslint-disable */
// @mui material components
import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableCell } from "@mui/material";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ViewBeneficiaryModal from "./ViewBeneficials";
import AdddetailsModal from "./beneficiarymodel";
import { collection, getDocs } from "firebase/firestore";
import HistoryIcon from "@mui/icons-material/History";

import { db } from "firebase_config";
import "./adddetails.css";
import "./Invoice.css";

function Tables() {
  const [viewbenefiaries, setViewbeneficiaries] = useState(false);
  const [showbenedetails, setShowaddbenedetails] = useState(false);
  const [items, setItems] = useState([]);
  const [beneficiary, setBeneficiary] = useState([]);
  const [beneid, setBeneid] = useState("");
  const [isShown, setIsShown] = useState(false);

  const getbeneficiaries = async () => {
    const beneficiaries = await getDocs(collection(db, "beneficiaries"));
    setItems(beneficiaries.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getbeneficiaries();
  }, []);
  const navigate = (items) => {
    setViewbeneficiaries(true);
    setBeneficiary(items);
  };

  const editBeneficiary = (id) => {
    setBeneid(id);
    setShowaddbenedetails(true);
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
                  Beneficiaries Table
                </MDTypography>
              </MDBox>
              <div style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
                <HistoryIcon
                  type="button"
                  onClick={getbeneficiaries}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />
                {isShown && (
                  <div style={{ fontWeight: 10, color: "#33A8FF" }}>Click to Refresh Table</div>
                )}
                <button
                  className="btn create"
                  type="button"
                  onClick={() => setShowaddbenedetails(true)}
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
                      {items.map((item) => {
                        const { id, baccountname, baccountnumber } = item;
                        i++;
                        return (
                          <TableRow key={id}>
                            <TableCell>{i}.</TableCell>
                            <TableCell>{baccountname}</TableCell>
                            <TableCell>{baccountnumber}</TableCell>
                            <TableCell
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                maxWidth: 140,
                              }}
                            >
                              <Icon
                                variant="button"
                                color="warning"
                                onClick={() => editBeneficiary(id)}
                              >
                                edit
                              </Icon>
                              <MDTypography style={{ fontSize: 15 }} onClick={() => navigate(item)}>
                                {" "}
                                View
                              </MDTypography>
                            </TableCell>
                          </TableRow>
                        );
                        ``;
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </MDBox>
            </Card>
            <ViewBeneficiaryModal
              view={viewbenefiaries}
              benedetails={beneficiary}
              hide={() => setViewbeneficiaries(false)}
            />
            <AdddetailsModal
              show={showbenedetails}
              beneid={beneid}
              close={() => setShowaddbenedetails(false)}
            />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
