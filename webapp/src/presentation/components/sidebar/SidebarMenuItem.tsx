import { NavLink } from "react-router-dom";

type TSidebarMenuItemProps = {
  to: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

export const SidebarMenuItem = (option: TSidebarMenuItemProps) => {
  return (
    <NavLink
      to={option.to}
      className={({ isActive }) =>
        isActive
          ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
          : "flex justify-center items-center rounded-md hover:bg-gray-800 p-2 transition-colors"
      }
    >
      <span>{option.icon}</span>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-base">{option.title}</span>
        <span className="text-gray-400 text-sm">{option.description}</span>
      </div>
    </NavLink>
  );
};
