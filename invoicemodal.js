// @mui material components
import Grid from "@mui/material/Grid";
import "./Invoice.css";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import InvoiceTableHeader from "components/InvoiceTable/InvoiceTableHeader";
import html2pdf from "html2pdf.js";

import logo from "../../assets/logo.svg";

function Invoice() {
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
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
                        <strong>Ref:</strong> 09833454656343234
                      </p>
                    </div>
                    <div className="tdate">
                      <p>
                        <strong>Date:</strong> {date}
                      </p>
                    </div>
                  </div>
                </div>
                <InvoiceTableHeader />
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
          </Grid>
          <button type="button" onClick={generatePDF}>
            GeneratePDF
          </button>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Invoice;
