import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

export function NewsDetail(){
    const { id } = useParams()
    const [news, setNews] = useState(null)

    useEffect(() => {
        api.get("/noticias/" + id)
        .then((res) => setNews(res.data.noticia))
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