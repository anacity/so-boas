import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>So boas</h4>
                    <p>Sua fonte confiavel para noticias sustentáveis e conscientes. Informação que faz a diferença para um mundo melhor</p>
                    <div>
                        <a href="">📘</a>
                        <a href="">🐦</a>
                        <a href="">📷</a>
                        <a href="">💼</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Categorias</h4>
                    <ul>
                        <li>
                            <a href="">Saúde</a>
                        </li>
                        <li>
                            <a href="">Mundo</a>
                        </li>
                        <li>
                            <a href="">Educação</a>
                        </li>
                        <li>
                            <a href="">Tecnologia</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Sobre</h4>
                    <ul>
                        <li>
                            <a href="">Nossa Missao</a>
                        </li>
                        <li>
                            <a href="">Equipe</a>
                        </li>
                        <li>
                            <a href="">Contato</a>
                        </li>
                        <li>
                            <a href="">Politica de Privacidade</a>
                        </li>
                    </ul>
                </div>



                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <p>Receba as ultimas noticias diretamente no seu e-mail</p>

                    <div className="newsletter-form">
                        <input type="email" placeholder="Seu e-mail" />
                        <button>Inscrever</button>
                    </div>
                </div>
            </div>

        </footer>
    )
}