import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: "", links: [] });
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openSubmenu = (text, cordinates) => {
		const page = sublinks.find((sublink) => sublink.page === text);
		setPage(page);
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
				page,
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
