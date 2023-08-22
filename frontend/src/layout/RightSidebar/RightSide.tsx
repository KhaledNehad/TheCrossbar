import { Container } from '..';

import Upcoming from '../../components/Upcoming/Upcoming';

const RightSide: React.FC = () => {
  return (
    <aside className="w-full flex-none md:w-1/3">
      <Container>
        <Upcoming />
      </Container>
    </aside>
  );
};

export default RightSide;
