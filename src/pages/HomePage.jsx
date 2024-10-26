import { AnimeCard } from "../components/AnimeCard";


export const HomePage = ({ search, setSearch, animeList, HandleSearch,setBlur }) => {
    return <div>
        <div>
            <div>

                <div className="mt-10 pb-10 justify-center rounded-lg">
                    <div className='max-w-md mx-auto bg-gray-100 rounded-lg '>
                        <div className="relative flex items-center w-full h-12 focus-within:shadow-lg bg-white  bg-#807c71 overflow-hidden rounded-lg bg-">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                                className="peer h-full w-full  outline-none  text-md text-gray-700 pr-2  rounded-lg mt-2 mb-2"
                                type="text"
                                id="search"
                                placeholder=" Search an anime...."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                onKeyUp={(e) => {
                                    if (e.key == "Enter") {
                                        HandleSearch();
                                        setBlur(true);
                                    }
                                }}
                            />

                        </div>


                    </div>
                </div>
            </div>
            <div className="anime-card flex grid md:grid-cols-4 pl-10 grid-cols-2">
                {animeList.map((anime) => (
                    <AnimeCard
                        anime={anime}
                        key={anime.mal_id}
                         />
                ))}
            </div>

        </div>
    </div>
}

function TopAnime() {

}