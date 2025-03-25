'use client';
import { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/system';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { ButtonContainer, CancelButton, MainButton } from './buttonStyled';
import dayjs from 'dayjs';

const MatchModalContent = ({details, handleClose, handleDetails, createEntry}) => {
    useEffect(() => {
        handleDetails('date', dayjs(new Date()));
    }, []);
    return (
        <>
            <Typography variant='h4' className='modal--heading'>Create New Match</Typography>
            <Grid container sx={{ alignItems: "center" }}>
                <Grid size={4}>
                    <Typography variant='label'>Date:</Typography>
                </Grid>
                <Grid size={8}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker value={details.date ?? dayjs(new Date())} onChange={(value) => handleDetails('date', value)} sx={{ width: '100%' }} />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Teams:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.teams ?? ''} onChange={(e) => handleDetails('teams', e.target.value)} id="outlined-basic" label="Teams" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Venue:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.venue ?? ''} onChange={(e) => handleDetails('venue', e.target.value)} id="outlined-basic" label="Venue" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>
            <ButtonContainer>
                <CancelButton onClick={() => handleClose(false)}>Cancel</CancelButton>
                <MainButton onClick={createEntry}>Create</MainButton>
            </ButtonContainer>
        </>
    )
}

export default MatchModalContent;