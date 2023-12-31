import {Link} from 'react-router-dom'

export default function Footer() {

    return (
        <footer className="py-8 bg-slate-700 text-slate-200 mt-5">
            <div className="container mx-auto flex flex-col text-center lg:flex-row lg:text-start justify-between">
                <span>Copyright 2023 <Link to="/" className="text-yellow-200">logo.com</Link></span>
                <div>
                    <a href="https://github.com/burakkrt" target="_blank" rel="noreferrer"
                       className="hover:text-yellow-200 duration-150 me-5">Github</a>
                    <a href="https://www.linkedin.com/in/kurt-burak/" target="_blank" rel="noreferrer"
                       className="hover:text-yellow-200 duration-150">Linkedin</a>
                </div>
            </div>
        </footer>
    );
}