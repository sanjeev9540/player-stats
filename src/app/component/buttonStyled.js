import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const ButtonContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'right',
    gap: '16px',
    alignItems: 'center',
    marginTop: '36px',
}));

export const MainButton = styled(Button)(() => ({
    background: '#416aa6',
    borderRadius: '5px',
    border: '1px solid #416aa6',
    padding: '10px 16px',
    color: '#fff',
    fontWeight: '600',
    fontSize: '18px'
}));

export const CancelButton = styled(MainButton)(() => ({
    color: '#416aa6',
    border: '1px solid #416aa6',
    background: '#fff'
}))