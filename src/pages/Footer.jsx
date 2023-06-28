import {Link} from 'react-router-dom'

export default function Footer() {

    return (
        <div className="mt-auto py-5 bg-slate-700 text-slate-200">
            <div className="container mx-auto flex flex-col text-center lg:flex-row lg:text-start justify-between">
                <h1>Copyright 2023 <Link to="/" className="text-yellow-200">logo.com</Link></h1>
                <div>
                    <a href="https://github.com/burakkrt" target="_blank" rel="noreferrer"
                       className="hover:text-yellow-200 duration-150 me-5">Github</a>
                    <a href="https://www.linkedin.com/in/kurt-burak/" target="_blank" rel="noreferrer"
                       className="hover:text-yellow-200 duration-150">Linkedin</a>
                </div>
            </div>
        </div>
    );
}