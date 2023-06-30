import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Auth} from '../contextapi/ContextProvider.jsx'

export default function Header() {

    const {login, setLogin} = Auth();

    const logoutHandler = () => {
        setLogin(!login)
    }

    return (
        <header
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between border-b pb-5 mb-0 lg:mb-5 py-5 sticky top-0 bg-slate-100 shadow z-10">
            <div className="grow-[1] text-3xl lg:text-6xl font-bold lg:ps-5">
                <h1 className="text-3xl lg:text-6xl font-bold"><Link to="/">LOGO</Link></h1>
            </div>
            <nav className="grow-[6] mt-5 lg:mt-0">
                <ul className="flex flex-col lg:flex-row justify-start gap-8 text-xl text-center lg:text-start">
                    <li><NavLink to="/"><FontAwesomeIcon icon="fa-solid fa-house" className="me-2"/>Home</NavLink></li>
                    <li><NavLink to="/blog"><FontAwesomeIcon icon="fa-solid fa-blog" className="me-2"/>Blog</NavLink>
                    </li>
                    <li><NavLink to="/create-post"><FontAwesomeIcon icon="fa-solid fa-feather" className="me-2"/>Create
                        Content</NavLink>
                    </li>
                    <li><NavLink to="/ddaDAS12DAsd1c2c%fdaX!1x23XDXFfx12"><FontAwesomeIcon icon="fa-solid fa-feather"
                                                                                           className="me-2"/>404
                        Page</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={`grow-[1] ${!login && "invisible"}`}>
                <button className="text-xl" onClick={logoutHandler}>
                    <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className="me-1"/>Logout
                </button>
            </div>
        </header>
    );
}