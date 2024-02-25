export const Offer = () => {
    return(
        <>
        <div className="offer-container">
            <div className="offer-box">
                <h1 className="offer-header">Architektura</h1>
                <p className="offer-description">
                Zajmujemy się projektowaniem budynków mieszkalnych jak i użyteczności publicznej. Do każdego projektu podchodzimy indywidualnie. Nie straszna nam żadna przestrzeń. Chcesz przebudować lub wybudować budynek? Napisz do nas 
                </p>
                <div className="button-container">
                    <a href="/" className="button-text">
                        Zapytaj o wycenę
                    </a>
                    <a href="/" className="button-icon">
                        <i className="fa fa-icon" aria-hidden="true">OOO</i>
                    </a>
                </div>
            </div>
            <div className="offer-box">
                <h1 className="offer-header">Wnętrza</h1>
                <p className="offer-description">
                Projektujemy wnętrza komercyjne jak i wystrój przestrzeni mieszkalnych. Kierujemy się zasadą funkcja ponad formę. Każdy nasz projekt jest dopracowany do potrzeb klienta. Staramy się poznać jego osobowość by czuł się komfortowo w swojej inwestycji.
                </p>
                <div className="button-container">
                    <a href="/" className="button-text">
                        Zapytaj o wycenę
                    </a>
                    <a href="/" className="button-icon">
                        <i className="fa fa-icon" aria-hidden="true">OOO</i>
                    </a>
                </div>
            </div>
            <div className="offer-box">
                <h1 className="offer-header">Od <b>A</b>rchitektury do <br/> <b>Z</b>amieszkania</h1>
                <p className="offer-description">
                Jesteś perfekcjonistą? Zaprojektujemy dla Ciebie budynek dbając o każdy szczegół. Projektując dla Ciebie budynek wraz z aranżacją wnętrza jesteśmy w stanie zaplanować przestrzeń tak by zapewnić Ci największy poziom funkcjonalności. 
                </p>
                <div className="button-container">
                    <a href="/" className="button-text">
                        Zapytaj o wycenę
                    </a>
                    <a href="/" className="button-icon">
                        <i className="fa fa-icon" aria-hidden="true">OOO</i>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <h1 className="coop-header">JAK WYGLĄDA PROCES PROJEKTOWANIA WNĘTRZ</h1>
            <div className="coop-container">
                <div className="box">
                    <h2 className="offer-header pb-4">POZNAJMY SIĘ</h2>
                    <p className="mb-1">Spotkanie z klientem, rozmowa o potrzebach i stylu projektowanego wnętrza.</p>
                    <p className="mb-1">Ustalenie konkretnych wytycznych projektowych.</p>
                    <p className="mb-1">Pomiar obiektu.</p>
                </div>
                <div className="box">
                    <h2 className="offer-header pb-4">PROCES PROJEKTOWY</h2>
                    <p className="mb-1">Na <b>pierwszym etapie</b> prac przygotowywujemy 2-3 koncepcje układu funkcjonalnego projektowanego wnętrza. Następnie po zapoznaniu się przez Państwa z koncepcją ustalamy jedną odpowiadającą Państwa potrzebą.</p>
                    <p className="mb-1">W <b>drugim etapie</b> przystępujemy do modelowania całego lokalu i tworzenia wizualizacji.</p>
                    <p className="mb-1">W <b>trzecim etapie</b> analizujemy przedstawioną przez nas propozycje aranżacji wnętrza i na jej podstawie opracowujemy finalny projekt.</p>
                </div>
                <div className="box">
                    <h2 className="offer-header pb-4">PROCES TWORZENIA DOKUMENTACJI TECHNICZNEJ</h2>
                    <p className="offer-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem porro numquam quaerat doloribus vero possimus, nostrum adipisci.</p>
                </div>
            </div>
            <h1 className="text-center">Dodatkowo możesz zamówić nadzór nad inwestycją</h1>
            <div className="additional-box">
                    <h2 className="offer-header">Będziemy za Ciebie:</h2>
                    <p className="mb-1">Nadzorować prace remontowe </p>
                    <p className="mb-1">Ustalać terminy poszczególnych wykonawców</p>
                    <p className="mb-1">Składać zamówienia na materiały</p>
                    <p className="mb-1">Zamawiać meble</p>
                </div>
        </div>
        </>
    )
}