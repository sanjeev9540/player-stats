import { Select } from "@mui/material";
import { Box, fontSize, fontWeight, padding, styled, textAlign } from "@mui/system";

export const ModalContainer = styled(Box)(() => ({
    width: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '32px',
    background: '#fff',
    borderRadius: '5px',
    maxHeight: '800px',
    overflow: 'auto',

    '& .modal--heading': {
        fontSize: '2rem',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '24px',
    }
}));

export const SelectContainer = styled(Select)(() => ({
    padding: '16px',
    borderRadius: '5px',
    width: '100%',

    '& .MuiSelect-select': {
        padding: 'unset',
    }
}));