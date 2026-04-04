import { ChevronNav } from "../../components/tags/ChevronNav";
import HomeLeftPanel from "./components/HomeLeftPanel";
import HomeRightPanel from "./components/HomeRightPanel";

export default function HomeMain() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
      <div className="mt-[15vh] justify-center flex flex-col-reverse w-[87%] items-center md:flex-row md:items-start">
          <HomeLeftPanel />
          <HomeRightPanel />
      </div> 

      <ChevronNav targetId={'aboutme'} />
    </div>
  );
}
