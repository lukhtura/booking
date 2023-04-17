// Components
import TextFieldMUI from "@mui/material/TextField";

function TextField({ meta, input, ...rest }) {
    return (
        <TextFieldMUI
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error}
            {...rest}
            {...input} />
    );
};

export default TextField;