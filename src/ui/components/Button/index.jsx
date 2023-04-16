//CORE
import ButtonMUI from "@mui/material/Button";

//COMPONENTS
import LinkWrapper from "@/ui/components/Button/styledComponents";


function Button({ disabled, type, children, sx, color, to }) {

    return (
        <ButtonMUI
            disabled={disabled}
            type={type}
            sx={{ color: color, ...sx }}
            variant="contained"
        >
            <LinkWrapper to={to} style={{ color: color }}>{children}</LinkWrapper>
        </ButtonMUI>
    );
};

export default Button;