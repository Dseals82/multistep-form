import SidebarLink from "../SidebarLink/SidebarLink";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="list">
                <SidebarLink step="1" text="Your info" />
                <SidebarLink step="2" text="Select plan" />
                <SidebarLink step="3" text="Add-ons" />
                <SidebarLink step="4" text="Summary" />
            </ul>
        </nav>
    );
}

export default Sidebar;