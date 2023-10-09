import { Link, useLocation } from "react-router-dom";
import { SiWindows11 } from "react-icons/si";
import { LuScreenShare } from "react-icons/lu";
import { BiError } from "react-icons/bi";
import { MdHardware } from "react-icons/md";
import { FaRegLightbulb, FaPlus } from "react-icons/fa";

interface SidebarLinkProps {
    name: string;
    closeSidebar: () => void;
  }

// Define a SidebarLink component that takes a name prop
const SidebarLink = ({name, closeSidebar} : SidebarLinkProps) => {
  // Define a constant for the base url
  const url = "/Stagisti/";

  // Define a function that returns the icon component based on the name prop
  const getIcon = (name: string) => {
    switch (name) {
      case "windows":
        return <SiWindows11 />;
      case "setup":
        return <LuScreenShare />;
      case "errori":
        return <BiError />;
      case "hardware":
        return <MdHardware />;
      case "curiosita":
        return <FaRegLightbulb />;
      case "altro":
        return <FaPlus />;
      default:
        return null;
    }
  };

  //GESTIONE ROUTE ATTIVA SIDEBAR
  
  const location = useLocation();

  // Define a function that returns a different style or class based on the current path and the link path
  const link = "px-4 py-2 hover:bg-gray-700 inline-flex items-center rounded-lg"

  const getLinkStyle = (linkPath: string) => {
    return location.pathname === linkPath
      ? link + " bg-gray-600" // Active link style
      : link; // Inactive link style
  };

  const capitalize = (string: string) => {
    const firstLetter = string.charAt(0)
    return string.replace(firstLetter, firstLetter.toUpperCase())
    
  }

  return (
    // Return a list item element that renders a Link component with the name, icon, and style
    <li className="m-2">
      <Link
        onClick={() => closeSidebar()}
        to={url + name}
        className={getLinkStyle(url + name)}
      >
        {getIcon(name)} <p className="ml-2">{capitalize(name)}</p>
      </Link>
    </li>
  );
};

export default SidebarLink;
