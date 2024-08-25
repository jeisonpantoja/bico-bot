import { createBrowserRouter } from "react-router-dom";
import { TrainBotPage, AssistantPage } from "../pages";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { BsRobot, BsTerminal } from "react-icons/bs";

export const menuRoutes = [
  {
    to: "/train-bot",
    icon: <BsRobot />,
    title: "Entrenar Bot",
    description: "Entrenar bot con documentos",
    component: <TrainBotPage />,
  },
  {
    to: "/assistant",
    icon: <BsTerminal />,
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
    ],
  },
]);
