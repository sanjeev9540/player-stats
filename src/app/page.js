'use client';

import { useState } from "react";

import Image from "next/image";

import BackgroundImage from '@/../public/bgVs.jpg';
import AddDetailsModal from "./component/modal";
import MatchModalContent from "./component/matchModalContent";
import PlayerModalContent from "./component/playerModalContent";
import PlayerStatsModal from "./component/playerStatsModal";
import { useLazyGetMatchQuery, useCreateMatchMutation, useCreatePlayerMutation, useCreatePlayerStatsMutation } from "@/store/slices/statsApi";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function Home() {
  const [entryType, setEntryType] = useState('match_entry');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [details, setDetails] = useState({});
  const [createMatch, matchResult] = useCreateMatchMutation();
  const [createPlayer, playerResult] = useCreatePlayerMutation();
  const [createPlayerStats, playerStatsResult] = useCreatePlayerStatsMutation();

  const modalTypeApi = {
    'match_entry': createMatch,
    'player_entry': createPlayer,
    'player_stats_entry': createPlayerStats
  }

  const handleDetails = (name, value) => {
    setDetails({ ...details, [name]: value });
  }

  const clearDetails = () => {
    setDetails({});
  }

  const createEntry = async () => {
    const api = modalTypeApi[entryType];
    await api(details);
    clearDetails();
  }


  return (
    <div style={{ position: 'relative' }}>
      <Image className="blur-[1px] w-full h-screen absolute" src={BackgroundImage} alt="background image" width={1280} height={768} />
      <div className="absolute w-full h-screen z-1 bg-black opacity-25"></div>
      <div className="max-w-[1500px] relative z-1 m-auto p-4">
        <div className="text-white text-[48px] text-center pt-[16px]">IPL STATS</div>
        <div className="flex mt-[20px]">
          <form className="max-w-sm mx-auto">
            <div className="flex items-center">
              <select id="create_entry"
                className="text-[24px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-[250px]"
                value={entryType}
                onChange={(e) => setEntryType(e.target.value)}
              >
                <option value="match_entry">Match Entry</option>
                <option value="player_entry">Player Entry</option>
                <option value="player_stats_entry">Player Stats Entry</option>
              </select>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenModal(true);
                  clearDetails();
                }}
                className="ml-[16px] text-white text-[24px] border-1 border-white py-2 px-6 rounded-sm cursor-pointer">Add</button>
            </div>
          </form>

        </div>

        <TableContainer sx={{marginTop: '30px'}} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{marginBottom: '5px'}}>
                <TableCell sx={{fontSize: '18px', fontWeight: '600'}}>Dessert (100g serving)</TableCell>
                <TableCell align="center" sx={{fontSize: '18px', fontWeight: '600'}}>Calories</TableCell>
                <TableCell align="center" sx={{fontSize: '18px', fontWeight: '600'}}>Fat</TableCell>
                <TableCell align="center" sx={{fontSize: '18px', fontWeight: '600'}}>Carbs</TableCell>
                <TableCell align="center" sx={{fontSize: '18px', fontWeight: '600'}}>Protein</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  row name
                </TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">fat</TableCell>
                <TableCell align="center">carbs</TableCell>
                <TableCell align="center">protiens</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


        <AddDetailsModal open={isOpenModal} handleClose={setIsOpenModal}>
          {
            entryType === 'match_entry' &&
            <MatchModalContent details={details} handleClose={setIsOpenModal} handleDetails={handleDetails} createEntry={createEntry} />
          }

          {
            entryType === 'player_entry' &&
            <PlayerModalContent details={details} handleClose={setIsOpenModal} handleDetails={handleDetails} createEntry={createEntry} />
          }

          {
            entryType === 'player_stats_entry' &&
            <PlayerStatsModal details={details} handleClose={setIsOpenModal} handleDetails={handleDetails} createEntry={createEntry} />
          }
        </AddDetailsModal>

      </div>
    </div>
  );
}
