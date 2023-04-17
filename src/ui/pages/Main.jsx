// Components
import Box from "@mui/material/Box";
import DestinationsForm from "@/ui/components/DetinationsForm";

function Main() {
    return (
        <div>
            <DestinationsForm />
            <Box
                component="h4"
                sx={{ fontSize: "40px", lineHeight: 1, margin: 0 }}>
                Travel With
                <Box
                    component="span"
                    sx={{ color: "primary.main" }}> Booking</Box>
            </Box>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusamus reiciendis minima mollitia sed aspernatur non aperiam, eveniet ipsum amet voluptas dolorum distinctio accusantium illum ipsa illo, pariatur, reprehenderit ratione! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sunt repudiandae molestias itaque quos asperiores dolore nulla! Temporibus consequuntur facilis possimus rerum fuga nemo, magnam accusamus itaque, explicabo tempore totam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cumque voluptatem repudiandae tenetur cupiditate, consectetur non labore. Soluta, hic qui. Aliquam, hic. Cum accusamus eaque magni praesentium tenetur ducimus quam.</p>
        </div>
    );
};

export default Main;
