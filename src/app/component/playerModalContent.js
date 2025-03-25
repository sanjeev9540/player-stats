'use client';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/system';
import { MenuItem, TextField } from '@mui/material';
import { ButtonContainer, CancelButton, MainButton } from './buttonStyled';
import { SelectContainer } from './modalStyled';

const PlayerModalContent = ({details, handleDetails, handleClose, createEntry}) => {
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
                <SelectContainer
                        value={details.role ?? ''}
                        onChange={(e) => handleDetails('role', e.target.value)}
                    >
                        {
                            ['Batsman', 'Wicket Keeper', 'All-Rounder', 'Bowler'].map(playerRole => {
                                return <MenuItem value={playerRole}>{playerRole}</MenuItem>
                            })
                        }
                    </SelectContainer>
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Team:</Typography>
                </Grid>
                <Grid size={8}>
                <SelectContainer
                        value={details.team ?? ''}
                        onChange={(e) => handleDetails('team', e.target.value)}
                    >
                        {
                            ['SRH', 'KKR', 'RCB', 'MI', 'CSK', 'RR'].map(teamName => {
                                return <MenuItem value={teamName}>{teamName}</MenuItem>
                            })
                        }
                    </SelectContainer>
                </Grid>
            </Grid>
            <ButtonContainer>
                <CancelButton onClick={() => handleClose(false)}>Cancel</CancelButton>
                <MainButton onClick={createEntry}>Create</MainButton>
            </ButtonContainer>
        </>
    )
}

export default PlayerModalContent;