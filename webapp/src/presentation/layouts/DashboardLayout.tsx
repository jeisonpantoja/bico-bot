import { Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";
import { SidebarMenuItem } from "../components";

export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-7">
      <nav className="hidden sm:flex flex-col ml-3 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-2xl">
        <h1 className="font-semibold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
          BiCo Bot
        </h1>
        <span className="text-lg">Bienvenido</span>

        <div className="border-waikawa-gray-500 border my-3" />

        {/* Opciones del menú */}
        {menuRoutes.map((option) => (
          <SidebarMenuItem key={option.to} {...option} />
        ))}
      </nav>

      <section className="mx-3 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-2xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};
