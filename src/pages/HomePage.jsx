import { Slider } from "../components/Slider"

export const HomePage = () => {
    
    return(
        <>
            <Slider />
            <div className="about">
                <div className="about-image-container">
                    <img src="./images/przemyslawbroniec.jpg" alt="Architekt Przemysław Broniec" />
                </div>
                <div className="about-description-container">
                    <h1 className="about-header">Kilka Słów O Mnie</h1>
                    <p>Witam. Nazywam się Przemysław Broniec, jestem architektem. W trakcie studiów zacząłem pracę w różnych biurach architektonicznych. Po paru latach zbierania doświadczenia w innych firmach postanowiłem otworzyć własny biznes. Od kilku lat tworzę niesamowite budynki i przestrzenie z niesamowitymi ludźmi. Może chcesz stworzyć coś ze mną?</p>
                    <p>Oferujemy kompleksowe aranżację wnętrz obiektów prywatnych jak i użyteczności publicznej. Jesteśmy w stanie przeprowadzić Cię przez cały proces projektowania swojej inwestycji. Od projektu domu do jego aranżacji. Wykonujemy Projekty indywidualne domów oraz aranżację wnętrz. Działamy w oparciu o aktualne trendy jakie przynosi branża architektury oraz architektury wnętrz. W naszej pracy łączymy funkcjonalność z estetyką. Stawiamy na kontakt z klientem i staramy się go poznać.  Tworzymy wnętrza , które wpasują się w gusta każdego klienta.</p>
                    <p>Skontaktuj się z nami by stworzyć razem niesamowitą przestrzeń.</p>
                    <button type="button" className="btn btn-dark mt-3">Zadzwoń / Napisz</button>
                </div>
            </div>
        </>
    )
}