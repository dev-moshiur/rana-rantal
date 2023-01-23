import "./home.scss";
import Topdeals from "../../components/topDeals/Topdeals";
import Landing from "../../components/landing/Landing";
import Search from "../../components/search/Search";
import About from "../../components/about/About";
import Reviews from "../../components/reviews/Reviews";
export default function Home() {
  return (
    <div className="home">
      <Landing />
      <Search />
      <Topdeals />
      <About />
      <Reviews />
    </div>
  );
}
