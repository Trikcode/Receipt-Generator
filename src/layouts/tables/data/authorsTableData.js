/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Names", accessor: "author", width: "45%", align: "left" },
      { Header: "action", accessor: "action", align: "right" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Richard Gran" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
    ],
  };
}
