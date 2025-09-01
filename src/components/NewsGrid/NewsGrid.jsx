import { useEffect, useState } from "react"
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
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("http://10.92.199.7:3001/noticias")
        .then((res) => res.json())
        .then((data) => setNews(data.noticias))
        .catch((err) => console.log("Ocorreu um erro:", err))
    }, [])


    return (
    <div className="news-grid">
        <div className="news-header">
            <h2>Todas as noticias</h2>
            <span>{news.length} noticias</span>
        </div>

        <div className="news-cards">
            {
                news.map((news) => (
                    <NewsCard news={news}/>
                ))
            }

        </div>
        
    </div>

    )
}