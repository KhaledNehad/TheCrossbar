import Featured from '../../components/Featured/Featured';
import { Match } from '../../types/matchTypes';

const featuredMatchData: Match = {
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
    leagueLogo: 'https://cdn.footystats.org/img/competitions/egypt-egyptian-premier-league.png',
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
};

const HomeFeed = () => {
  return (
    <>
      <Featured match={featuredMatchData} />
    </>
  );
};

export default HomeFeed;
