export const AnimeCard = ({anime}) => {
    return (<div className="anime-card flex flex-col md:flex-row items-center justify-center rounded-lg p-4 shadow-lg my-4">
        <a
            href={anime.url}
            target="_blank"
            rel="noreferrer">
            <figure className="">
                <img  
                className="w-60 h-80 rounded-lg object-cover mr-4 hover:" 
                src={anime.images.jpg.image_url} />
            </figure>
            <div className="anime-title font-semibold text-md text-align:left ">{anime.title}</div>
        </a>
    </div>
    )
}