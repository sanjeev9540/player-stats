'use client';

import { useState } from "react";

import Image from "next/image";

import BackgroundImage from '@/../public/bgVs.jpg';
import AddDetailsModal from "./component/modal";
import MatchModalContent from "./component/matchModalContent";
import PlayerModalContent from "./component/playerModalContent";
import PlayerStatsModal from "./component/playerStatsModal";

export default function Home() {
  const [entryType, setEntryType] = useState('match_entry');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [details, setDetails] = useState({});

  const handleDetails = (name, value) => {
    setDetails({...details, [name]:value});
  }

  console.log('sdkfjasjf', details);

  const clearDetails = () => {
    setDetails({});
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


        <AddDetailsModal open={isOpenModal} handleClose={setIsOpenModal}>
          {
            entryType === 'match_entry' &&
            <MatchModalContent details={details} handleClose={setIsOpenModal} handleDetails={handleDetails}/>
          }

          {
            entryType === 'player_entry' &&
            <PlayerModalContent details={details} handleClose={setIsOpenModal} handleDetails={handleDetails}/>
          }

          {
            entryType === 'player_stats_entry' &&
            <PlayerStatsModal details={details} handleClose={setIsOpenModal} handleDetails={handleDetails}/>
          }
        </AddDetailsModal>

      </div>
    </div>
  );
}
