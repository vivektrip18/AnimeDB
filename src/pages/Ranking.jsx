import { AnimeCard } from "../components/AnimeCard"

export const Ranking = ({ topAnime,setBlur}) => {
    return <div className="">
        <div>
            <h6 className="font-mono text-4xl font-bold">Top Anime</h6>
        </div>
        
        <div className="anime-card flex grid grid-cols-4 pl-10 items-center">
            {topAnime.map((anime) => (
                <AnimeCard
                    anime={anime}
                    key={anime.mal_id}
                />
            ))}
            
        {setBlur(true)};
        </div>
    </div>
}