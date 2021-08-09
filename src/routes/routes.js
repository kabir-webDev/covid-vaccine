// @material-ui/icons
import StorageIcon from "@material-ui/icons/Storage";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import Image from "@material-ui/icons/Image";
import Another from "../components/Dashboard/Another/Another";
import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import HospitalUpdate from "../components/Dashboard/Hospital/HospitalUpdate";

const dashRoutes = [
  {
    path: "/data-table",
    name: "User Data Table",
    icon: StorageIcon,
    component: DashboardHome,
    layout: "/dashboard",
  },
  {
    path: "/hospital",
    name: "Hospital Info",
    icon: LocalHospitalIcon,
    component: HospitalUpdate,
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
