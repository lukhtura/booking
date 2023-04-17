// Core
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/engine/init/store";

// Components
import Header from "@/ui/components/Header";

// Styles
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import orange from "@mui/material/colors/orange";
import Container from "@mui/material/Container";

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
            <Provider store={store}>
                <CssBaseline />
                <Header />
                <Container>
                    <Outlet />
                </Container>
            </Provider>
        </ThemeProvider>
    );
};

export default Layout;