import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

export function NewsDetail(){
    const { id } = useParams()
    const [news, setNews] = useState(null)

    useEffect(() => {
        fetch("http://10.92.199.7:3001/noticias/" + id)
        .then((res) => res.json())
        .then((data) => setNews(data.noticia))
        .catch((err) => console.log("Ocorreu um erro ao carregar a noticia", err))
    }, [])

    return(
        <div>
            <Header/>
            <main>
                <article>
                    <div>
                        <h1>{news?.title}</h1>
                        <div>
                            <span>{news?.date}</span>
                            <span>{news?.categoria}</span>
                        </div>
                    </div>

                    <div>
                        <p>{news?.description}</p>
                    </div>

                    <div>
                        <p>{news?.content}</p>
                    </div>
                </article>
            </main>
            <Footer/>
        </div>
    )
}