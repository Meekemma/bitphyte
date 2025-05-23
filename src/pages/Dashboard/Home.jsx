import Layout from "../../components/Dash/Layout";
import Chart from "../../components/Dash/Chart";
import Portfolio from "../../components/Dash/Portfolio";
import Referral from "../../components/Dash/Referral";

const Home = () => {
  return (
    <Layout>
      <Portfolio />
      <Chart />
      <Referral />
    </Layout>
  );
};

export default Home;
