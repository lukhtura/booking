//CORE
import { styled } from "@mui/system";

//COMPONENTS
import Box from "@mui/material/Box";

const Wrapper = styled(Box)({
    padding: "20px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
});

export default Wrapper;