import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <img src="images/LogoBox.png" alt="Box" width={60} />
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Tortas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Bandejas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Desayunos</a>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar