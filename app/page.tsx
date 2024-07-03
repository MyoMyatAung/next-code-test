import Chip from "./components/shared/Chip";
import { CiSearch } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import GenreList from "./components/GenreList";

export default function Home() {
  return (
    <main>
      <div className="flex justify-start items-center gap-3 overflow-x-scroll bg-background-thin py-2 px-4 mt-1">
        <div className="flex justify-start items-center gap-3">
          <Chip isActive={false} rounded={false}>
            <CiSearch />
          </Chip>
          <Chip isActive={true} rounded={false}>
            <MdElectricBolt />
            <span className="text-xs">Explore</span>
          </Chip>
          <Chip isActive={false} rounded={false}>
            <BsStars />
            <span className="text-xs">Generate</span>
          </Chip>
          <div className="bg-gray-400 h-5 w-[1px]" />
          <GenreList />
        </div>
      </div>
    </main>
  );
}
