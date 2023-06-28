import {NavLink} from 'react-router-dom'

export default function Header() {

    return (
        <header
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between border-b pb-5 mb-5 py-5 sticky top-0 bg-slate-100 shadow z-10">
            <div className="grow-[1] text-3xl lg:text-6xl font-bold lg:ps-5">
                <h1 className="">LOGO</h1>
            </div>
            <nav className="grow-[6] mt-5 lg:mt-0">
                <ul className="flex flex-col lg:flex-row justify-start gap-8 text-xl text-center lg:text-start">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}