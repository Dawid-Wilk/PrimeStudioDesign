import { Link } from "react-router-dom"

export const Porftolio = () => {
    return(
        <div className="portfolio">
            <h1 className="portfolio-header">Nasze projekty</h1>
            <div className="portfolio-container">
                <div className="portfolio-image-container">
                    <Link to={"/"}>
                        <img className="image-container-img" src="./images/wnetrze.jpg" alt="Projekty wnętrz" />
                        <p className="image-container-description">Projekty wnętrz</p>
                    </Link>
                </div>
                <div className="portfolio-image-container">
                    <Link to={"/"}>
                        <img className="image-container-img" src="./images/gory.jpeg" alt="Obraz 2" />
                        <p className="image-container-description">Architektura</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}