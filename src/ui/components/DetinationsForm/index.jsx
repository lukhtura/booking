//CORE
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

// Engine
import selectors from "@/engine/core/destinations/selectors";
import { getDestinationsAsync } from "@/engine/core/destinations/saga/asyncActions";

// Components
import { Box, Grid } from "@mui/material";
import TextField from "@/ui/components/FormElements/TextField";
import Select from "@/ui/components/FormElements/Select";
import DataPicker from "@/ui/components/FormElements/DataPicker";
import Button from "@/ui/components/Button";

function DestinationsForm() {

    /* STATE */
    const dispatch = useDispatch();
    const loader = useSelector(selectors.loader);

    /* SUBMIT */
    const onSubmit = (value) => console.log(value);

    useEffect

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <Box
                    sx={{ margin: "30px 0" }}
                    component="form"
                    onSubmit={handleSubmit}>

                    <Grid container spacing={2}>

                        {/* DESTINATION SELECTOR */}

                        <Grid item xs={3}>
                            <Field
                                name="destination"
                                label="Destination"
                                component={Select}
                                options={[{ label: "test", value: "test" }]}
                            />
                        </Grid>

                        {/* DATA PICKER CHECK IN */}

                        <Grid item xs={3}>
                            <Field
                                name="check_in"
                                label="Check in"
                                component={DataPicker}
                                minDate={() => new Date()}
                            />
                        </Grid>

                        {/* DATA PICKER CHECK OUT */}

                        <Grid item xs={3}>
                            <Field
                                name="check_out"
                                label="Check out"
                                component={DataPicker}
                            />
                        </Grid>

                        {/* ADULTS QUANTITY INPUT */}

                        <Grid item xs={1}>
                            <Field
                                name="adults"
                                label="Adults"
                                component={TextField}
                            />
                        </Grid>

                        {/* CHILDREN QUANTITY INPUT */}

                        <Grid item xs={1}>
                            <Field
                                name="children"
                                label="Children"
                                component={TextField}
                            />
                        </Grid>

                        {/* SUBMIT BUTTON */}

                        <Grid item xs={1}>
                            <Button type="submit" sx={{ height: "100%" }}>Submit</Button>
                        </Grid>

                    </Grid>

                </Box>
            )} />
    );
};

export default DestinationsForm;