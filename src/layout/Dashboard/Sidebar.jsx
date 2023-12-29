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
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-[#030712] lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <div className="flex items-center justify-center border-b border-gray-900 py-[18px]">
                    <img src={logo} alt="" className="w-28" />
                </div>
                <nav className="mt-5 px-3">
                    <ul>
                        <SideBarMenuItem
                            menu={{
                                name: "Dashboard",
                                icon: "LuCommand",
                                path: "/dashboard",
                            }}
                        />
                        <SideBarMenuItem
                            menu={{
                                name: "Pages",
                                icon: "LuCommand",
                                path: "/",
                            }}
                        />
                        <SideBarMenuItem
                            menu={{
                                name: "Forms",
                                icon: "LuCommand",
                                path: "/",
                            }}
                        />
                        <SideBarMenuItem
                            menu={{
                                name: "Settings",
                                icon: "LuCommand",
                                path: "/",
                            }}
                        />

                        <SidebarSubMenu
                            menu={{ name: "Authentication", icon: "LuUser2" }}
                            subMenu={[
                                { name: "SignIn", path: "/login" },
                                { name: "SignUp", path: "/register" },
                            ]}
                        ></SidebarSubMenu>
                        <SidebarSubMenu
                            menu={{ name: "Authentication", icon: "LuUser2" }}
                            subMenu={[
                                { name: "SignIn", path: "/login" },
                                { name: "SignUp", path: "/register" },
                            ]}
                        ></SidebarSubMenu>
                        <SidebarSubMenu
                            menu={{ name: "Authentication", icon: "LuUser2" }}
                            subMenu={[
                                { name: "SignIn", path: "/login" },
                                { name: "SignUp", path: "/register" },
                            ]}
                        ></SidebarSubMenu>
                    </ul>
                </nav>
            </div>
        </>
    );
};
Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};
export default Sidebar;
