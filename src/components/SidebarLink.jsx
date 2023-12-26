import { useState } from "react";

const SidebarLink = ({children}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return <li>{children}</li>
};

export default SidebarLink;