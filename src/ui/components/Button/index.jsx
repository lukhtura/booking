//CORE
import ButtonMUI from "@mui/material/Button";

// Components
import LinkWrapper from "@/ui/components/Button/styledComponents";


function Button({ disabled, type = "button", children, sx, color = "#fff", to }) {

    return (
        <ButtonMUI
            disabled={disabled}
            type={type}
            sx={{ color: color, ...sx }}
            variant="contained"
        >
            {to ? <LinkWrapper to={to} style={{ color: color }}>{children}</LinkWrapper>
                : children}
        </ButtonMUI>
    );
};

export default Button;