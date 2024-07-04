import Chip from "./components/shared/Chip";
import { CiSearch } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import GenreList from "./components/GenreList";
import { FaChevronRight } from "react-icons/fa6";
import SongList from "./components/SongList";
import ArtistList from "./components/ArtistList";
import FilterButton from "./components/shared/FilterButton";
import { Playlist } from "./libs/playlists";
import Playlists from "./components/Playlists";

export const dynamic = 'force-dynamic';

async function getPlaylist(): Promise<Playlist[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/playlist')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home({ searchParams }: { searchParams: { genre: string } }) {

  const playlist = await getPlaylist();

  let genreSelected = false;
  if (!!searchParams.genre && searchParams.genre !== "all") {
    genreSelected = true;
  }
  return (
    <main>
      <div className={`${genreSelected ? 'bg-background-selected' : ''} pb-6`}>
        <div className={`flex justify-start items-center gap-3 overflow-x-scroll ${genreSelected ? "bg-background-thinselected" : "bg-background-thin"} py-2 px-8`}>
          <div className="flex justify-start items-center gap-3">
            <Chip bg={genreSelected ? "bg-background-thinselected" : "bg-background-thin"} rounded={false}>
              <CiSearch />
            </Chip>
            <Chip bg={genreSelected ? "bg-background-thinselected" : "bg-white"} color={genreSelected ? "text-white" : "text-gray-600"} rounded={false}>
              <MdElectricBolt />
              <span className="text-xs">Explore</span>
            </Chip>
            <Chip rounded={false}>
              <BsStars />
              <span className="text-xs">Generate</span>
            </Chip>
            <div className="bg-gray-400 h-5 w-[1px]" />
            <GenreList />
          </div>
        </div>
        {genreSelected && <div className="mx-8 pt-4 text-sm flex justify-start items-center gap-3">
          <span className="text-gray-300">Beats</span>
          <FaChevronRight className="text-white" />
          <span className="text-white">Genre</span>
        </div>}
        <div className="mx-8 mt-6 mb-4">
          <h1 className="text-3xl font-bold">{genreSelected ? searchParams.genre : "Explore"}</h1>
          <p className="text-gray-300 my-3">Explore our curated playlists</p>
        </div>
        <Playlists playlist={playlist} />
      </div>
      <div className="flex items-end justify-between mx-8 mt-4 mb-2">
        <div>
          {
            genreSelected ?
              <>
                <h3>Inspired your major artist</h3>
              </>
              :
              <>
                <h1 className="text-2xl font-bold">For you</h1>
                <p className="text-gray-400 my-2">Suggestion on your style</p>
              </>
          }
        </div>
        <button className="text-gray-400 text-sm flex items-center justify-evenly gap-2">
          View All <FaChevronRight />
        </button>
      </div>
      {genreSelected && <ArtistList />}
      {
        genreSelected && <div className="mx-8 my-4 p-4 bg-background-thin rounded-lg flex justify-between items-center">
          <div className="flex justify-start items-center gap-2 text-xs">
            <span className="text-sm">All beats</span>
            <div className="bg-gray-400 h-5 w-[1px]" />
            <Chip border="none" rounded={false}>
              <span>Mood</span>
            </Chip>
            <Chip border="none" rounded={false}>
              <span>Chord</span>
            </Chip>
            <Chip border="none" rounded={false}>
              <span>BPM</span>
            </Chip>
            <Chip border="none" rounded={false}>
              <span>Duration</span>
            </Chip>
            <Chip border="none" rounded={false}>
              <span>Vocal</span>
            </Chip>
          </div>
          <FilterButton />
        </div>
      }
      <SongList />

    </main>
  );
}
