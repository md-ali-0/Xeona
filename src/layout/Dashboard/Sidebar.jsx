import PropTypes from "prop-types";
import logo from "../../assets/logo/logo-dark.png";
import SideBarMenuItem from "../../components/SideBarMenuItem";
import SidebarSubMenu from "../../components/SidebarSubMenu";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
                    sidebarOpen ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 flex flex-col bg-[#030712] min-h-screen transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <div className="flex items-center justify-center border-b border-gray-900 py-[18px]">
                    <img src={logo} alt="" className="w-28" />
                </div>
                <div className="overflow-y-auto custom-scroll">
                    <nav className="mt-5 px-3">
                        <ul>
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Main
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Dashboard",
                                    icon: "LuCommand",
                                    path: "/dashboard/home",
                                }}
                            />
                            <SideBarMenuItem
                                menu={{
                                    name: "Pages",
                                    icon: "LuCommand",
                                    path: "/",
                                }}
                            />
                            <h4 className="text-gray-400 font-semibold text-xs mt-2">
                                UI Components
                            </h4>
                            <SidebarSubMenu
                                menu={{ name: "Common", icon: "LuAtom" }}
                                subMenu={[
                                    { name: "Button", path: "button" },
                                    { name: "Grid", path: "grid" },
                                    { name: "Widgets", path: "widgets" },
                                    { name: "Icons", path: "icons" },
                                ]}
                            ></SidebarSubMenu>
                            <SidebarSubMenu
                                menu={{
                                    name: "Feedback",
                                    icon: "LuBringToFront",
                                }}
                                subMenu={[
                                    { name: "Alert", path: "button" },
                                    { name: "Dialog", path: "grid" },
                                    { name: "Progress", path: "icons" },
                                    { name: "Spinner", path: "icons" },
                                    { name: "Toast", path: "icons" },
                                ]}
                            ></SidebarSubMenu>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};
export default Sidebar;
