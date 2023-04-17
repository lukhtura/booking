//CORE
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

//COMPONENTS
import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        }
    }
});

function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;