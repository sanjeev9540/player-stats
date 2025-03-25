'use client';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/system';
import { MenuItem, TextField } from '@mui/material';
import { ButtonContainer, CancelButton, MainButton } from './buttonStyled';
import { useGetMatchQuery, useGetPlayerQuery } from '@/store/slices/statsApi';
import { SelectContainer } from './modalStyled';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const PlayerStatsModal = ({ details, handleDetails, handleClose, createEntry }) => {
    const { data: matches } = useGetMatchQuery();
    const { data: players } = useGetPlayerQuery();
    const [team, setTeam] = useState('RCB');
    const playerData = {};

    players && players.map(item => {
        if(!playerData[item.team]){
            playerData[item.team] = [];
        }
        playerData[item.team].push({name: item.name, id: item._id});
    })

    return (
        <>
            <Typography variant='h4' className='modal--heading'>Create Player Stats</Typography>
            <Grid container sx={{ alignItems: "center" }}>
                <Grid size={4}>
                    <Typography variant='label'>Player Id:</Typography>
                </Grid>
                <Grid size={2}>
                    <SelectContainer
                        value={team ?? ''}
                        onChange={(e) => setTeam(e.target.value)}
                    >
                        {
                            playerData && Object.keys(playerData).map(team => {
                                return <MenuItem value={team}>{team}</MenuItem>
                            })
                        }
                    </SelectContainer>
                </Grid>
                <Grid size={6}>
                    <SelectContainer
                        value={details.player_id ?? ''}
                        onChange={(e) => handleDetails('player_id', e.target.value)}
                    >
                        {
                            playerData[team] && playerData[team].map(player => {
                                return <MenuItem value={player.id}>{player.name}</MenuItem>
                            })
                        }
                    </SelectContainer>
                </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", marginTop: '24px' }}>
                <Grid size={4}>
                    <Typography variant='label'>Match Id:</Typography>
                </Grid>
                <Grid size={8}>
                    <SelectContainer
                        value={details.match_id ?? ''}
                        onChange={(e) => handleDetails('match_id', e.target.value)}
                    >
                        {
                            matches && matches.map(match => {
                                return <MenuItem value={match._id}>{dayjs(match._id).format('DD-MM-YYYY hh-mm A')}</MenuItem>
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
                             playerData && Object.keys(playerData).map(teamName => {
                                return <MenuItem value={teamName}>{teamName}</MenuItem>
                            })
                        }
                    </SelectContainer>
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
                <MainButton onClick={createEntry}>Create</MainButton>
            </ButtonContainer>
        </>
    )
}

export default PlayerStatsModal;