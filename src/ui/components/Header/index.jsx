// Components
import Stack from "@mui/material/Stack";
import Wrapper from "@/ui/components/Header/styledComponents";
import Button from "@/ui/components/Button";

// Engine
import { paths } from "@/engine/config/paths";

function Header() {
    return (
        <Wrapper>
            <Stack spacing={2} direction="row">
                <Button to={paths.main}>Home</Button>
                <Button to={paths.about}>About</Button>
            </Stack>
        </Wrapper>
    );
};

export default Header;