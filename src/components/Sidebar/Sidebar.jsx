import "./Sidebar.css"

export function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>Categorias</h3>
                <ul>
                    <li>
                        <button>
                            <p>📰</p>
                            <p>Todas as noticias</p>
                        </button>
                    </li>
                     <li>
                        <button>
                            <p>💻</p>
                            <p>Tecnologia</p>
                        </button>
                    </li>
                     <li>
                        <button>
                            <p>🏛️</p>
                            <p>Politica</p>
                        </button>
                    </li>
                     <li>
                        <button>
                            <p>⚽</p>
                            <p>Esportes</p>
                        </button>
                    </li>
                     <li>
                        <button>
                            <p>🌍</p>
                            <p>Mundo</p>
                        </button>
                    </li>
                     <li>
                        <button>
                            <p>🪙</p>
                            <p>Todas as noticias</p>
                        </button>
                    </li>
                     <li>
                        <button>
                            <p>🏥</p>
                            <p>Saúde</p>
                        </button>
                    </li>
                     <li>
                        <button>
                            <p>🎬</p>
                            <p>Entretenimento</p>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}