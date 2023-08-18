import Arsenal_logo from '../assets/teams_logos/arsenal.svg';
import Liverpool_logo from '../assets/teams_logos/liverpool.svg';

function Featured() {
  return (
    <div>
      <h1>Featured</h1>
      <div className="flex flex-wrap">
        <div className="w-full rounded-md  bg-white">
          <div className="mb-1 flex flex-wrap border-b py-4 text-sm text-lightGray">
            <div className="w-1/2 pr-4 text-right">
              <h4>Premier League</h4>
            </div>
            <div className="w-1/2 pl-4 text-left">Anfield Stadium, Liverpool</div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-2/5 justify-end py-1">
              <div className="flex flex-row-reverse flex-wrap items-center py-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-appBlue-200">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                    <img className="h-10 w-10" src={Liverpool_logo} alt="Liverpool" />
                  </div>
                </div>

                <div className="pr-6 text-right">
                  <h4 className="text-xl text-black">Liverpool</h4>
                  <span className="text-xs text-lightGray">25 POINTS</span>
                </div>
              </div>
            </div>

            <div className="flex w-1/5 flex-col items-center justify-center gap-0.5 text-center">
              <span className="rounded-md bg-appBlue-200 px-2 py-0.5 text-xs text-appBlue-500">
                <span className="font-bold text-appBlue-600">1 DAY</span> TO MATCH
              </span>
              <span className="text-lg font-semibold">13:00</span>
              <span className="text-xs text-lightGray">SAT, 12 DEC</span>
            </div>

            <div className="w-2/5 py-1">
              <div className="flex flex-row flex-wrap items-center py-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-appBlue-200">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                    <img className="h-10 w-10" src={Arsenal_logo} alt="Liverpool" />
                  </div>
                </div>
                <div className="pl-6 text-left">
                  <h4 className="text-xl text-black">Arsenal</h4>
                  <span className="text-xs text-lightGray">15 POINTS</span>
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
