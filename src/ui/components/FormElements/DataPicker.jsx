//CORE
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DatePickerMUI } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

function DataPicker({ input: { onChange, value }, label, disabled, minDate }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerMUI
                label={label}
                format="DD/MM/YYYY"
                value={value || null}
                onChange={onChange}
                minDate={minDate}
            >
            </DatePickerMUI>

        </LocalizationProvider>
    );
};

export default DataPicker;