'use client';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/system';
import { TextField } from '@mui/material';
import { ButtonContainer, CancelButton, MainButton } from './buttonStyled';

const PlayerModalContent = ({details, handleDetails, handleClose}) => {
    return (
        <>
            <Typography variant='h4' className='modal--heading'>Create New Player</Typography>
            <Grid container sx={{ alignItems: "center" }}>
                <Grid size={4}>
                    <Typography variant='label'>Name:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.name ?? ''} onChange={(e) => handleDetails('name', e.target.value)} id="outlined-basic" label="Name" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Role:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.role ?? ''} onChange={(e) => handleDetails('role', e.target.value)} id="outlined-basic" label="Role" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Team:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.teams ?? ''} onChange={(e) => handleDetails('teams', e.target.value)} id="outlined-basic" label="Team" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>
            <ButtonContainer>
                <CancelButton onClick={() => handleClose(false)}>Cancel</CancelButton>
                <MainButton>Create</MainButton>
            </ButtonContainer>
        </>
    )
}

export default PlayerModalContent;