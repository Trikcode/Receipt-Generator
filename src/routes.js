// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Notifications from "layouts/notifications";
import SignIn from "layouts/authentication/sign-in";
import Invoice from "layouts/Invoice";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Beneficiaries",
    key: "beneficiary",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/beneficiaries",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Invoice",
    key: "invoice",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/invoice",
    component: <Invoice />,
  },

  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },

  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
