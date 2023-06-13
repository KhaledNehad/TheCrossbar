import { Typography } from '@mui/material';

interface UpcomingMatchItemProps {
  homeTeamName: string;
}

const UpcomingMatchItem = (props: UpcomingMatchItemProps) => {
  const { homeTeamName } = props;

  return (
    <Typography variant='body2' component={'span'}>
      {homeTeamName}
    </Typography>
  );
};

export default UpcomingMatchItem;
