import PropTypes from "prop-types";
import { useState } from "react";
import {
    HiOutlineAcademicCap,
    HiOutlineCog,
    HiOutlineCube,
    HiOutlineLockClosed,
    HiOutlineViewGridAdd
} from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo-dark.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownToggle = ()=>{
        setDropdownOpen(!dropdownOpen)
    }
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
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive
                                        ? "sideLinkActive"
                                        : "sideLink"
                                }
                            >
                                <HiOutlineViewGridAdd
                                    className="inline"
                                    size={20}
                                />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "sideLinkActive"
                                        : "sideLink"
                                }
                            >
                                <HiOutlineCube className="inline" size={20} />
                                Pages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "sideLinkActive"
                                        : "sideLink"
                                }
                            >
                                <HiOutlineAcademicCap
                                    className="inline"
                                    size={20}
                                />
                                Forms
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "sideLinkActive"
                                        : "sideLink"
                                }
                            >
                                <HiOutlineCog className="inline" size={20} />
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <button
                                className="dropdownSideBar"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <HiOutlineLockClosed className="inline" size={20} />
                                Authentication
                                <svg
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                        dropdownOpen ? "rotate-180" : ""
                                    }`}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                        fill=""
                                    ></path>
                                </svg>
                            </button>

                            <div
                                className={`translate transform overflow-hidden ${
                                    dropdownOpen ? "block" : "hidden"
                                }`}
                            >
                                <ul className="flex flex-col gap-2.5 my-2 px-3.5 overflow-hidden">
                                    <li>
                                        <NavLink
                                            to='/login'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "sideLinkActive"
                                                    : "sideLink"
                                            }
                                        >
                                            <MdArrowForwardIos
                                                className="inline"
                                                size={14}
                                            />
                                            Sign In
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/register"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "sideLinkActive"
                                                    : "sideLink"
                                            }
                                        >
                                            <MdArrowForwardIos
                                                className="inline"
                                                size={14}
                                            />
                                            Sign Up
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button
                                className="dropdownSideBar"
                                onClick={() => dropdownToggle()}
                            >
                                <HiOutlineLockClosed className="inline" size={20} />
                                Authentication
                                <svg
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                        dropdownOpen ? "rotate-180" : ""
                                    }`}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                        fill=""
                                    ></path>
                                </svg>
                            </button>

                            <div
                                className={`translate transform overflow-hidden ${
                                    dropdownOpen ? "block" : "hidden"
                                }`}
                            >
                                <ul className="flex flex-col gap-2.5 my-2 px-3.5 overflow-hidden">
                                    <li>
                                        <NavLink
                                            to='/login'
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "sideLinkActive"
                                                    : "sideLink"
                                            }
                                        >
                                            <MdArrowForwardIos
                                                className="inline"
                                                size={14}
                                            />
                                            Sign In
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/register"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "sideLinkActive"
                                                    : "sideLink"
                                            }
                                        >
                                            <MdArrowForwardIos
                                                className="inline"
                                                size={14}
                                            />
                                            Sign Up
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "sideLinkActive"
                                        : "sideLink"
                                }
                            >
                                <HiOutlineCog className="inline" size={20} />
                                Settings
                            </NavLink>
                        </li>
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
