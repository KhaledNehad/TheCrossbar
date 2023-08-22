import { Match } from '../../types/matchTypes';

interface UpcomingItemProps {
  match: Match;
}

function UpcomingItem({ match }: UpcomingItemProps) {
  return (
    <div className="w-full bg-white odd:bg-appBlue-100">
      <div className="flex flex-wrap border-b py-4 text-sm text-lightGray">
        <div className="flex w-1/4 flex-col items-center justify-center gap-2 pl-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
            <img className="h-6 w-6" src={match.homeTeam.logo} alt={match.homeTeam.name} />
          </div>
          <h4>{match.homeTeam.shorthand}</h4>
        </div>
        <div className="flex w-2/4 flex-col items-center justify-center gap-1">
          {match.status?.live ? (
            <p className="rounded bg-red-500 px-2 py-0.5 text-xs font-medium uppercase text-white">
              Live <span className="text-red-200">{match.status.minute}&apos;</span>
            </p>
          ) : (
            <span className="font-bold  uppercase text-black">{match.matchDetails.time}</span>
          )}
          <span className="flex w-full justify-center text-lg font-semibold">
            {match.status?.live ? (
              <>
                <span className="w-1/2 pr-4 text-right">{match.status?.score.home}</span> - <span className="w-1/2 pl-4 text-left">{match.status?.score.away}</span>
              </>
            ) : (
              <>
                <span className="my-3 w-4 border-t-2 border-appBlue-600 text-appBlue-600"></span>
              </>
            )}
          </span>
          <p className="text-xs uppercase text-lightGray">{match.matchDetails.league}</p>
        </div>

        <div className="flex w-1/4 flex-col items-center justify-center gap-2 pl-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
            <img className="h-6 w-6" src={match.awayTeam.logo} alt={match.awayTeam.name} />
          </div>
          <h4 className="text-xs">{match.awayTeam.shorthand}</h4>
        </div>
      </div>
    </div>
  );
}

export default UpcomingItem;
