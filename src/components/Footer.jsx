export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                <img 
                    width="130"
                    height="50" 
                    src="./images/logo.png" 
                    alt="logo"
                    className="mb-4"
                />
                <p className="mb-4">Tutaj dodac krotki odpis motywacyjno zachecajacy blablalblbalbl Lorem ipsum dolor sit amet. jdjfasdjfaj</p>
                <a className="footer-social" href="https://www.facebook.com/PRIMEStudioDesign" rel="noreferrer" target="_blank">
                    <img src="images/facebook.svg" alt="Facebook" />
                </a>
                <a className="footer-social" href="https://www.instagram.com/prime.studio.design/" rel="noreferrer" target="_blank">
                    <img src="images/instagram.svg" alt="Instagram" />
                </a>
                <a className="footer-social" href="mailto:prime.studio.arch@gmail.com" rel="noreferrer" target="_blank">
                    <img src="images/gmail.svg" alt="E-Mail" />
                </a>
                <a className="footer-social" href="tel:+48502262616" rel="noreferrer" target="_blank">
                    <img src="images/phone.svg" alt="Phone" />
                </a>
                </div>

                <div className="footer-column">
                    <h3 className="py-3">Kontakt</h3>
                    <a href="https://goo.gl/maps/C7PwS2VxcVHRKBAB6" rel="noreferrer" target="_blank"><img src="images/pin.svg" alt="Pin" />Zobacz Nas na Google Maps</a>
                    <p>???????</p>
                    <p>???????</p>
                    <p>??????</p>
                </div>
            </div>
        </footer>
    )
}