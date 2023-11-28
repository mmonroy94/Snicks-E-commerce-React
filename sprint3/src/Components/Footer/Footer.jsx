import style from './Footer.module.css'

const Footer = () => {
    return(
        <div className={`container ${style.footerContainer}`}>
            <div className={`container-fluid p-0`}>
                <hr></hr>
                <footer className="py-2 m-0">
                    <p className="text-center small text-muted">Copyright &copy; Sniks 2023</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;