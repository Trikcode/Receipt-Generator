/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";
import Icon from "@mui/material/Icon";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";

import logo from "assets/logo.svg";

export default function data() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "customers", accessor: "customers", width: "45%", align: "left" },
      { Header: "action", accessor: "action", align: "right" },
    ],

    rows: [
      {
        customers: <Company image={logo} name="Ryan Tompson" />,
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <MDTypography variant="button" fontWeight="bold">
              &nbsp;PDF
            </MDTypography>
          </MDBox>
        ),
      },
      {
        customers: <Company image={logo} name="Romina Hadid" />,
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <MDTypography variant="button" fontWeight="bold">
              &nbsp;PDF
            </MDTypography>
          </MDBox>
        ),
      },
      {
        customers: <Company image={logo} name="Romina Hadid" />,
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <MDTypography variant="button" fontWeight="bold">
              &nbsp;PDF
            </MDTypography>
          </MDBox>
        ),
      },
      {
        customers: <Company image={logo} name="Romina Hadid" />,
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <MDTypography variant="button" fontWeight="bold">
              &nbsp;PDF
            </MDTypography>
          </MDBox>
        ),
      },
      {
        customers: <Company image={logo} name="Romina Hadid" />,
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <MDTypography variant="button" fontWeight="bold">
              &nbsp;PDF
            </MDTypography>
          </MDBox>
        ),
      },
      {
        customers: <Company image={logo} name="Romina Hadid" />,
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <MDTypography variant="button" fontWeight="bold">
              &nbsp;PDF
            </MDTypography>
          </MDBox>
        ),
      },
      {
        customers: <Company image={logo} name="Romina Hadid" />,
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
            </MDBox>
            <MDTypography variant="button" fontWeight="bold">
              &nbsp;PDF
            </MDTypography>
          </MDBox>
        ),
      },
    ],
  };
}
