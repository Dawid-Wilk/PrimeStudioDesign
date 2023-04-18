import { Slider } from "../components/Slider"

export const HomePage = () => {
    return(
        <>
            <Slider />
            <div className="about">
                <div className="about-image-container">
                    <img src="./images/logo.png" alt="Architekt Przemysław Broniec" />
                </div>
                <div className="about-description-container">
                    <h1>O MNIE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit enim fugiat, provident voluptatem omnis recusandae expedita consectetur vel reprehenderit maxime.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolorem distinctio laboriosam sequi. Repellendus, libero unde nulla vero odio enim, dolore, minima vel repudiandae dignissimos error. Nostrum dolores eius minima.</p>
                    <button onClick={()=> console.log('DZWON')}>ZADZOWN / NAPISZ</button>
                </div>
            </div>
        </>
    )
}