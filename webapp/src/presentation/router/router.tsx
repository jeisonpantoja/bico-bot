import { DashboardLayout } from "../layouts/DashboardLayout";
import { AssistantPage, TrainBotPage } from "../pages";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RiFileUploadLine, RiRobot2Line } from "react-icons/ri";

export const menuRoutes = [
  {
    to: "/train-bot",
    icon: <RiFileUploadLine className="text-2xl mr-4 text-waikawa-gray-500"/>,
    title: "Entrenar bot",
    description: "Entrenar el bot con documentos",
    component: <TrainBotPage />,
  },
  {
    to: "/assistant",
    icon: <RiRobot2Line className="text-2xl mr-4 text-waikawa-gray-500"/>,
    title: "Asistente",
    description: "Información del asistente",
    component: <AssistantPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      },
    ],
  },
]);
