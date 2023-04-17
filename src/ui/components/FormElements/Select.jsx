// Components
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';

function Select({ options, label, input: { onChange, value } }) {

    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <SelectMUI
                value={value}
                label={label}
                onChange={onChange}
            >
                {options.map(option => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
            </SelectMUI>
        </FormControl>
    );
};

export default Select;