import { useState } from 'react';

import { Match } from '../../types/matchTypes';
import UpcomingItem from './UpcomingItem';

const Upcoming: React.FC = () => {
  const [activeTab, setActiveTab] = useState('today');

  const matchesToday: Match[] = [
    {
      id: 1,
      homeTeam: {
        id: 'ch001',
        name: 'Chelsea',
        logo: 'https://media.api-sports.io/football/teams/49.png',
        points: 25,
        position: 3,
        shorthand: 'CHE'
      },
      awayTeam: {
        id: 'sp001',
        name: 'Spurs',
        logo: 'https://media.api-sports.io/football/teams/47.png',
        points: 15,
        position: 9,
        shorthand: 'TOT'
      },
      matchDetails: {
        league: 'Premier League',
        leagueLogo: 'https://media.api-sports.io/football/leagues/39.png',
        date: 'SAT, 12 DEC',
        time: '15:00',
        stadium: 'Stamford Bridge, London',
        referee: 'Mike Dean',
        attendance: '53,000',
        daysRemaining: Math.abs(Math.ceil((new Date('2023-09-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24))) + ' days'
      },
      weatherOnMatchDay: {
        weather: 'Cloudy',
        temperature: '12°C',
        humidity: '60%',
        wind: '10 km/h'
      },
      status: {
        live: true,
        minute: '72',
        started: true,
        isFinished: false,
        score: {
          home: 1,
          away: 0
        },
        starting_at: {
          date_time: '2021-09-11 14:00:00',
          date: '2021-09-11',
          time: '14:00:00',
          timestamp: 1631371200,
          timezone: 'UTC'
        }
      }
    },

    {
      id: 2,
      homeTeam: {
        id: 'mc001',
        name: 'Manchester City',
        logo: 'https://media.api-sports.io/football/teams/50.png',
        points: 25,
        position: 1,
        shorthand: 'MCI'
      },
      awayTeam: {
        id: 'av001',
        name: 'Aston Villa',
        logo: 'https://media.api-sports.io/football/teams/66.png',
        points: 15,
        position: 10,
        shorthand: 'AVL'
      },
      matchDetails: {
        league: 'Premier League',
        leagueLogo: 'https://media.api-sports.io/football/leagues/39.png',
        date: 'SAT, 12 DEC',
        time: '15:00',
        stadium: 'Etihad Stadium, Manchester',
        referee: 'Mike Dean',
        attendance: '53,000',
        daysRemaining: Math.abs(Math.ceil((new Date('2023-09-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24))) + ' days'
      },
      weatherOnMatchDay: {
        weather: 'Cloudy',
        temperature: '12°C',
        humidity: '60%',
        wind: '10 km/h'
      },
      status: {
        live: true,
        minute: '42',
        started: true,
        isFinished: false,
        score: {
          home: 4,
          away: 2
        },
        starting_at: {
          date_time: '2021-09-11 14:00:00',
          date: '2021-09-11',
          time: '14:00:00',
          timestamp: 1631371200,
          timezone: 'UTC'
        }
      }
    },
    {
      id: 3,
      homeTeam: {
        id: 'rm001',
        name: 'Real Madrid',
        logo: 'https://media.api-sports.io/football/teams/541.png',
        points: 25,
        position: 3,
        shorthand: 'RMA'
      },
      awayTeam: {
        id: 'mu001',
        name: 'Manchester United',
        logo: 'https://media.api-sports.io/football/teams/33.png',
        points: 15,
        position: 9,
        shorthand: 'MUN'
      },
      matchDetails: {
        league: 'UEFA Champions League',
        leagueLogo: 'https://media.api-sports.io/football/leagues/2.png',
        date: 'SAT, 12 DEC',
        time: '15:30',
        stadium: 'San Bernabeu, Madrid',
        referee: 'Mike Dean',
        attendance: '53,000',
        daysRemaining: Math.abs(Math.ceil((new Date('2023-09-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24))) + ' days'
      },
      weatherOnMatchDay: {
        weather: 'Cloudy',
        temperature: '12°C',
        humidity: '60%',
        wind: '10 km/h'
      },
      status: {
        live: false,
        minute: '72',
        started: true,
        isFinished: false,
        score: {
          home: 1,
          away: 0
        },
        starting_at: {
          date_time: '2021-09-11 14:00:00',
          date: '2021-09-11',
          time: '14:00:00',
          timestamp: 1631371200,
          timezone: 'UTC'
        }
      }
    },
    {
      id: 3,
      homeTeam: {
        id: 'ahl001',
        name: 'Al Ahly SC',
        logo: 'https://seeklogo.com/images/A/Al_Ahly_Club-logo-BA70BE3AE8-seeklogo.com.png',
        points: 65,
        position: 1,
        shorthand: 'AHL'
      },
      awayTeam: {
        id: 'zm002',
        name: 'Zamalek SC',
        logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/ZamalekSC.png',
        points: 45,
        position: 4,
        shorthand: 'ZAM'
      },
      matchDetails: {
        league: 'Egyptian Premier League',
        leagueLogo: 'https://media.api-sports.io/football/leagues/271.png',
        date: 'SAT, 12 DEC',
        time: '19:30',
        stadium: 'Cairo International Stadium, Cairo',
        referee: 'Ibrahim Nour El Din',
        attendance: '63,000',
        daysRemaining: Math.abs(Math.ceil((new Date('2023-09-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24))) + ' days'
      },
      weatherOnMatchDay: {
        weather: 'Cloudy',
        temperature: '12°C',
        humidity: '60%',
        wind: '10 km/h'
      },
      status: {
        live: false,
        minute: '72',
        started: true,
        isFinished: false,
        score: {
          home: 6,
          away: 1
        },
        starting_at: {
          date_time: '2021-09-11 14:00:00',
          date: '2021-09-11',
          time: '14:00:00',
          timestamp: 1631371200,
          timezone: 'UTC'
        }
      }
    },
    {
      id: 3,
      homeTeam: {
        id: 'ps001',
        name: 'Paris Saint-Germain',
        logo: 'https://media.api-sports.io/football/teams/85.png',
        points: 25,
        position: 3,
        shorthand: 'RMA'
      },
      awayTeam: {
        id: 'bc001',
        name: 'Barcelona',
        logo: 'https://media.api-sports.io/football/teams/529.png',
        points: 15,
        position: 9,
        shorthand: 'MUN'
      },
      matchDetails: {
        league: 'UEFA Champions League',
        leagueLogo: 'https://media.api-sports.io/football/leagues/2.png',
        date: 'SAT, 12 DEC',
        time: '20:30',
        stadium: 'Parc des Princes, Paris',
        referee: 'Mike Dean',
        attendance: '53,000',
        daysRemaining: Math.abs(Math.ceil((new Date('2023-09-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24))) + ' days'
      },
      weatherOnMatchDay: {
        weather: 'Cloudy',
        temperature: '12°C',
        humidity: '60%',
        wind: '10 km/h'
      },
      status: {
        live: false,
        minute: '72',
        started: true,
        isFinished: false,
        score: {
          home: 2,
          away: 2
        },
        starting_at: {
          date_time: '2023-09-11 14:00:00',
          date: '2023-09-11',
          time: '20:30:00',
          timestamp: 1631371200,
          timezone: 'UTC'
        }
      }
    }
  ];

  const matchesTomorrow: Match[] = [];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-black">Upcoming</h1>
      <div className="mt-3 flex  flex-wrap  bg-white px-3">
        <div className="w-full border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <ul className="-mb-px flex  flex-wrap border-b border-gray-300" role="tablist">
            <li className="mr-2" role="presentation">
              <a
                href="#"
                aria-controls="today"
                id="today-tab"
                onClick={() => setActiveTab('today')}
                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                  activeTab === 'today'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500'
                    : 'border-transparent  hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                Today
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                aria-controls="tomorrow"
                id="tomorrow-tab"
                onClick={() => setActiveTab('tomorrow')}
                className={`inline-block rounded-t-lg border-b-2 p-4 ${
                  activeTab === 'tomorrow'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500'
                    : 'border-transparent  hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                aria-current="page"
              >
                Tomorrow
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full pt-2">
          <div className={`${activeTab === 'today' ? 'block' : 'hidden'} rounded-lg bg-gray-50 p-4 dark:bg-gray-800`} id="today" role="tabpanel" aria-labelledby="today-tab">
            {matchesToday.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No Matches Today! <br /> Check back later
              </p>
            ) : (
              matchesToday?.map((match) => <UpcomingItem key={match.id} match={match} />)
            )}
          </div>
          <div className={`${activeTab === 'tomorrow' ? 'block' : 'hidden'} rounded-lg bg-gray-50 p-4 dark:bg-gray-800`} id="tomorrow" role="tabpanel" aria-labelledby="tomorrow-tab">
            {matchesTomorrow.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No Matches Tomorrow! <br /> Check back later
              </p>
            ) : (
              matchesTomorrow?.map((match) => <UpcomingItem key={match.id} match={match} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
