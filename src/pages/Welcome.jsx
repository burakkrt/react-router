import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

export default function Welcome() {

    return (
        <div className="container relative mx-auto heightFullScreen">
            <img src="/assets/img/welcome-bg.jpg" alt="welcome image"
                 className="h-full w-full object-cover object-center"/>
            <div className="h-full w-full absolute bg-slate-500 top-0 start-0 mix-blend-multiply"></div>
            <div className="flex flex-col gap-8 absolute top-1/2 -translate-y-1/2  w-full text-center text-slate-100 ">
                <h1 className="text-3xl xl:text-6xl decoration-red-500 underline">Welcome
                    to
                    React Router Example <FontAwesomeIcon icon="fa-solid fa-hippo" className="text-red-500 ms-2 "/></h1>
                <Link to="/blog"
                      className="text-2xl bg-red-700 w-fit mx-auto px-4 py-2 rounded-lg hover:bg-red-600 duration-150 animate-pulse">Get
                    Started <FontAwesomeIcon icon="fa-solid fa-arrow-right "/></Link>
            </div>
        </div>
    );
}