//CORE
import { Outlet } from "react-router-dom";

//COMPONENTS
import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;