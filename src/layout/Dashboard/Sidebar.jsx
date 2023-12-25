import PropTypes from "prop-types";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-dark.png";

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
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-slate-900 lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <div className="flex items-center justify-center border-b border-gray-800 py-5">
                    <img src={logo} alt="" className="w-28" />
                </div>

                <nav className="mt-5 px-3">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-2 hover:no-underline bg-[#1E293B] rounded text-white py-2 px-1.5"
                                : "flex items-center gap-2 hover:no-underline text-neutral-400 py-2 px-1.5 "
                        }
                    >
                        <HiOutlineViewGridAdd className="inline" size={20} />
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center gap-2 hover:no-underline bg-[#1E293B] rounded text-white py-2 px-1.5"
                                : "flex items-center gap-2 hover:no-underline text-neutral-400 py-2 px-1.5 "
                        }
                    >
                        <HiOutlineViewGridAdd className="inline" size={20} />
                        Dashboard
                    </NavLink>
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
