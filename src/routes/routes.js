// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Another from "../components/Dashboard/Another/Another";
import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";

const dashRoutes = [
  {
    path: "/data-table",
    name: "User Data Table",
    icon: DashboardIcon,
    component: DashboardHome,
    layout: "/dashboard",
  },
  {
    path: "/hospital",
    name: "Hospital Info",
    icon: DashboardIcon,
    component: DashboardHome,
    layout: "/dashboard",
  },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   icon: Image,
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/another",
  //       name: "Dashbaord Another",
  //       mini: "PP",
  //       component: Another,
  //       layout: "/dashboard",
  //     },
  //     {
  //       path: "/another-auth",
  //       name: "Another page",
  //       mini: "PP",
  //       component: Another,
  //       layout: "/dashboard",
  //     },
  //   ],
  // },
];
export default dashRoutes;
