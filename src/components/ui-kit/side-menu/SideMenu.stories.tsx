import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { SideMenu } from "./SideMenu";
import { ProSidebarProvider } from "react-pro-sidebar";
import {
  Dot,
  Dashboard,
  Products,
  Suppliers,
  Customers,
  Staff,
  Transactions,
  Payments,
  Integrations,
  Sellers,
  OrderGeneration,
  TeamManagement,
  Services,
  GenerateInvoice,
  Settings,
} from "../../icons";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "UI Kit/SideMenu",
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = () => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: <Dashboard name="dashboard" />,
      isActive: false,
      route: "",
    },
    {
      label: "Products",
      icon: <Products name="products" />,
      isActive: true,
      defaultOpen: true,
      route: "",
      subItems: [
        {
          label: "Product list",
          icon: <Dot name="dot" />,
          isActive: true,
          route: "",
        },
        {
          label: "Categories",
          icon: <Dot name="dot" />,
          isActive: false,
          route: "",
        },
      ],
    },
    {
      label: "Suppliers",
      icon: <Suppliers name="suppliers" />,
      isActive: false,
      route: "",
    },
    {
      label: "Customers",
      icon: <Customers name="customers" />,
      isActive: false,
      route: "",
    },
    {
      label: "Staff",
      icon: <Staff name="staff" />,
      isActive: false,
      route: "",
    },
    {
      label: "Transactions",
      icon: <Transactions name="transactions" />,
      isActive: false,
      route: "",
    },
    {
      label: "Payments",
      icon: <Payments name="payments" />,
      isActive: false,
      route: "",
    },
    {
      label: "Integration",
      icon: <Integrations name="integrations" />,
      isActive: false,
      defaultOpen: true,
      route: "",
      subItems: [
        {
          label: "Accountancy platform",
          icon: <Dot name="dot" />,
          isActive: false,
          route: "",
        },
        {
          label: "eCommerce platforms",
          icon: <Dot name="dot" />,
          isActive: false,
          route: "",
        },
      ],
    },
    {
      label: "Sellers",
      icon: <Sellers name="sellers" />,
      isActive: false,
      route: "",
    },
    {
      label: "Order Generation",
      icon: <OrderGeneration name="order-generation" />,
      isActive: false,
      route: "",
    },
    {
      label: "Team Management",
      icon: <TeamManagement name="team-management" />,
      isActive: false,
      route: "",
    },
    {
      label: "Services",
      icon: <Services name="services" />,
      isActive: false,
      route: "",
    },
    {
      label: "Generate Invoice",
      icon: <GenerateInvoice name="generate-invoice" />,
      isActive: false,
      route: "",
    },
    {
      label: "Settings",
      icon: <Settings name="settings" />,
      isActive: false,
      defaultOpen: true,
      route: "",
      subItems: [
        {
          label: "Online ordering setup",
          icon: <Dot name="dot" />,
          isActive: false,
          route: "",
        },
        {
          label: "Connect your website",
          icon: <Dot name="dot" />,
          isActive: false,
          route: "",
        },
      ],
    },
  ];
  return (
    <BrowserRouter>
      <ProSidebarProvider>
        <SideMenu menuItems={menuItems} />
      </ProSidebarProvider>
    </BrowserRouter>
  );
};

export const SideNavMenu = Template.bind({});
