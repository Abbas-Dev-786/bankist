import Navbar from "../../components/Navbar";
import Balance from "./Balance";
import Movements from "./Movements";
import Operations from "./Operations";
import Summary from "./Summary";
import Timer from "./Timer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Balance />
        <Movements />
        <Summary />
        <Operations />
        <Timer />
      </div>
    </>
  );
};

export default Main;
