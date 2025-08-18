import { NewsCard } from "../NewsCard/NewsCard"
import "./NewsGrid.css"

const newsList = [
    {
        id: 1,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o pais ao pódio",
        category: "esporte",
        image: "https://conceitos.com/wp-content/uploads/Natacao.jpg"
    },
     {
        id: 2,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o pais ao pódio",
        category: "esporte",
        image: "https://conceitos.com/wp-content/uploads/Natacao.jpg"
    },
     {
        id: 3,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o pais ao pódio",
        category: "esporte",
        image: "https://conceitos.com/wp-content/uploads/Natacao.jpg"
    },
     {
        id: 4,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o pais ao pódio",
        category: "esporte",
        image: "https://conceitos.com/wp-content/uploads/Natacao.jpg"
    },
     {
        id: 5,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o pais ao pódio",
        category: "esporte",
        image: "https://conceitos.com/wp-content/uploads/Natacao.jpg"
    },
     {
        id: 6,
        title: "Brasil conquista primeira medalha de ouro nas olimpiadas",
        summary: "Atleta brasileiro bate recorde mundial na natação e leva o pais ao pódio",
        category: "esporte",
        image: "https://conceitos.com/wp-content/uploads/Natacao.jpg"
    }
]

export function NewsGrid(){
    return (
    <div className="news-grid">
        <div className="news-header">
            <h2>Todas as noticias</h2>
            <span>{newsList.length} noticias</span>
        </div>

        <div className="news-cards">
            {
                newsList.map((news) => (
                    <NewsCard news={news}/>
                ))
            }

        </div>
        
    </div>

    )
}