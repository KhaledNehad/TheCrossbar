import { Nav, Main, RightSide, Footer, Layout } from '../../layout';

function Home() {
  return <Layout sidebar={<Nav />} mainContent={<Main />} rightSidebar={<RightSide />} footer={<Footer />} />;
}

export default Home;
