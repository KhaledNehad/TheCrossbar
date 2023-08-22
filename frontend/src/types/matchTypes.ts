// Type definitions for match types

type Team = {
  id: string;
  name: string;
  logo: string;
  points: number;
  position: number;
  shorthand: string;
  matches?: {
    won: number;
    draw: number;
    lost: number;
  };
  goals?: {
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
  };
};

export type Match = {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  matchDetails: {
    league: string;
    leagueId?: string;
    leagueLogo: string;
    date: string;
    time: string;
    stadium: string;
    referee: string;
    attendance: string;
    daysRemaining: string;
  };
  weatherOnMatchDay?: {
    weather: string;
    temperature: string;
    humidity: string;
    wind: string;
  };
  status?: {
    live: boolean;
    minute: string;
    started: boolean;
    isFinished: boolean;
    score: {
      home: number;
      away: number;
    };
    starting_at?: {
      date_time: string;
      date: string;
      time: string;
      timestamp: number;
      timezone: string;
    };
  };
};
