import { Link } from "react-router-dom"

export const Porftolio = () => {
    return(
        <div className="portfolio">
            <h1 className="portfolio-header">Nasze projekty</h1>
            <div className="portfolio-container">
                <div className="portfolio-image-container">
                    <Link to={"/"}>
                        <img className="image-container-img" src="./images/gory.jpeg" alt="Obraz 1" />
                        <p className="image-container-description">Tekst na obrazie 1</p>
                    </Link>
                </div>
                <div className="portfolio-image-container">
                    <Link to={"/"}>
                        <img className="image-container-img" src="./images/gory.jpeg" alt="Obraz 2" />
                        <p className="image-container-description">Tekst na obrazie 2</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}