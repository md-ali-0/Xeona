import PropTypes from "prop-types";
import { createElement, useState } from "react";
import * as Lucide from "react-icons/lu";
import { NavLink } from "react-router-dom";

const SidebarSubMenu = ({ menu, subMenu }) => {
    const { name, icon } = menu;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <li>
            <button
                className="dropdownSideBar"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {createElement(Lucide[icon])}
                {name}
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
                    {subMenu.map((item, idx) => (
                        <li key={idx}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "sideLinkActive" : "sideLink"
                                }
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    className="inline"
                                    height="14"
                                    width="14"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    ></path>
                                    <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                                </svg>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

SidebarSubMenu.propTypes = {
    menu: PropTypes.object,
    subMenu: PropTypes.array,
};
export default SidebarSubMenu;
