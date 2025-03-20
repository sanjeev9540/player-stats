'use client';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/system';
import { TextField } from '@mui/material';
import { ButtonContainer, CancelButton, MainButton } from './buttonStyled';

const PlayerStatsModal = ({details, handleDetails, handleClose}) => {
    return (
        <>
            <Typography variant='h4' className='modal--heading'>Create Player Stats</Typography>
            <Grid container sx={{ alignItems: "center" }}>
                <Grid size={4}>
                    <Typography variant='label'>Player Id:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.player_id ?? ''} onChange={(e) => handleDetails('player_id', e.target.value)} id="outlined-basic" label="Player Id" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Match Id:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.match_id ?? ''} onChange={(e) => handleDetails('match_id', e.target.value)} id="outlined-basic" label="Match Id" variant="outlined" sx={{ width: '100%' }} />
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
                    <Typography variant='label'>Score:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.score ?? ''} onChange={(e) => handleDetails('score', e.target.value)} id="outlined-basic" label="Score" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>

            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Balls Faced:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.balls_faced ?? ''} onChange={(e) => handleDetails('balls_faced', e.target.value)} id="outlined-basic" label="Balls Faced" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>

            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Strike Rate:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.strike_rate ?? ''} onChange={(e) => handleDetails('strike_rate', e.target.value)} id="outlined-basic" label="Strike Rate" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>

            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Wickets:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.wickets ?? ''} onChange={(e) => handleDetails('wickets', e.target.value)} id="outlined-basic" label="Wickets" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>

            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Economy:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.economy ?? ''} onChange={(e) => handleDetails('economy', e.target.value)} id="outlined-basic" label="Economy" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>

            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Catches:</Typography>
                </Grid>
                <Grid size={8}>
                    <TextField value={details.catches ?? ''} onChange={(e) => handleDetails('catches', e.target.value)} id="outlined-basic" label="Catches" variant="outlined" sx={{ width: '100%' }} />
                </Grid>
            </Grid>
            <ButtonContainer>
                <CancelButton onClick={() => handleClose(false)}>Cancel</CancelButton>
                <MainButton>Create</MainButton>
            </ButtonContainer>
        </>
    )
}

export default PlayerStatsModal;