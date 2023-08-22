import { HiLocationMarker } from 'react-icons/hi';

import { Match } from '../../types/matchTypes';

function Featured({ match }: { match: Match }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-black">Featured</h1>
      <div className="flex flex-wrap pt-3">
        <div className="w-full rounded-md bg-white">
          <div className="mb-1 flex flex-wrap border-b py-4 text-sm text-lightGray">
            <div className="flex w-1/2  flex-row-reverse items-center justify-start gap-1 pr-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                <img className="h-4 w-4" src={match.matchDetails.leagueLogo} alt={match.matchDetails.league} />
              </span>
              <h4>{match.matchDetails.league}</h4>
            </div>
            <div className="flex w-1/2 items-center justify-start pl-4 text-left">
              <span className="flex h-6 w-6 items-center justify-center ">
                <HiLocationMarker className="h-4 w-4" />
              </span>
              <h4>{match.matchDetails.stadium}</h4>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-2/5 justify-end py-1">
              <div className="flex flex-row-reverse flex-wrap items-center py-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-appBlue-200">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                    <img className="h-10 w-10" src={match.homeTeam.logo} alt={match.homeTeam.name} />
                  </div>
                </div>

                <div className="pr-6 text-right">
                  <h4 className="text-xl text-black">{match.homeTeam.name}</h4>
                  <span className="text-xs uppercase text-lightGray">{match.homeTeam.points} points</span>
                </div>
              </div>
            </div>
            <div className="flex w-1/5 flex-col items-center justify-center gap-0.5 text-center">
              <span className="rounded-md bg-appBlue-200 px-2 py-0.5 text-xs text-appBlue-500">
                <span className="font-bold uppercase text-appBlue-600">{match.matchDetails.daysRemaining}</span> TO MATCH
              </span>
              <span className="text-lg font-semibold">{match.matchDetails.time}</span>
              <span className="text-xs uppercase text-lightGray">{match.matchDetails.date}</span>
            </div>
            <div className="w-2/5 py-1">
              <div className="flex flex-row flex-wrap items-center py-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-appBlue-200">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                    <img className="h-10 w-10" src={match.awayTeam.logo} alt={match.awayTeam.name} />
                  </div>
                </div>
                <div className="pl-6 text-left">
                  <h4 className="text-xl text-black">{match.awayTeam.name}</h4>
                  <span className="text-xs uppercase text-lightGray">{match.awayTeam.points} points</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <button className="absolute -top-4 flex content-center rounded-md border-b border-r border-appBlue-200 bg-appBlue-600 px-6 py-2 text-center text-white hover:bg-appBlue-500">
              <span className="text-sm font-semibold">Match details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
