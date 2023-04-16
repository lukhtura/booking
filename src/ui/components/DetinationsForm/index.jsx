//CORE
import { Form, Field } from "react-final-form";

//COMPONENTS
import { Box, Grid } from "@mui/material";
import TextField from "@/ui/components/FormElements/TextField";
import Select from "@/ui/components/FormElements/Select";

function DestinationsForm() {

    const onSubmit = (value) => console.log(value);

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <Box
                    sx={{ margin: "30px 0" }}
                    component="form"
                    onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <Field
                                name="adults"
                                label="Adults"
                                component={Select}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Field
                                name="adults"
                                label="Adults"
                                component={TextField}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Field
                                name="children"
                                label="Chidlren"
                                component={TextField}
                            />
                        </Grid>
                    </Grid>
                </Box>
            )} />
    );
};

export default DestinationsForm;