import "./NewsCard.css"

export function NewsCard({news}){
    return(
        <article className="news-card">

            <div className="news-card-img">
                <img src={news.imageUrl} alt="" />
            </div>

            <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.description}</p>

                <button className="btn-read">
                    Ler mais
                </button>
            </div>
        </article>
    )
}