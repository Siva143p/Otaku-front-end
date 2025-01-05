import ConnectedApps from "./setingsSubComponents/ConnectedApps";
import DeviceManagement from "./setingsSubComponents/DeviceManagement";
import Email from "./setingsSubComponents/Email";
import EmailNotifications from "./setingsSubComponents/EmailNotifications";
import MemberShip from "./setingsSubComponents/MemberShip";
import Password from "./setingsSubComponents/Password";
import Phone from "./setingsSubComponents/Phone";
import Preference from "./setingsSubComponents/Preference";

export const General = [
  { title: "MemberShip", path: "membership", component: <MemberShip /> },
  { title: "Pereference", path: "preference", component: <Preference /> },
  {
    title: "Email Notifications",
    path: "email-notifications",
    component: <EmailNotifications />,
  },
  {
    title: "Device Management",
    path: "device-mgmt",
    component: <DeviceManagement />,
  },
  {
    title: "Connected Apps",
    path: "cnnected-apps",
    component: <ConnectedApps />,
  },
];

export const Account = [
  { title: "Email", path: "email-settings", component: <Email /> },
  { title: "Phone", path: "phone-settings", component: <Phone /> },
  { title: "Password", path: "password-settings", component: <Password /> },
];
