import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openSubmenu = (text, cordinates) => {
		setLocation(cordinates);
		setIsSubmenuOpen(true);
	};

	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				openSidebar,
				closeSidebar,
				isSidebarOpen,
				isSubmenuOpen,
				openSubmenu,
				closeSubmenu,
				sublinks,
				location,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};
