import Container from '../Container/Container';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FunctionComponent<MainProps> = ({ children }) => {
  return (
    <main className="grow">
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
