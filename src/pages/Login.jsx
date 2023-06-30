import {Auth} from '../contextapi/ContextProvider.jsx'
import {useNavigate, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Login = () => {

    const {setLogin} = Auth();
    const navigate = useNavigate();

    const loginHandler = (e) => {
        setLogin(login => !login)
        navigate('/create-post')
        e.preventDefault();
    }

    return (
        <div className="h-screen grid place-content-center bg-sky-700">
            <span className="mb-5 text-red-100 px-5 lg:px-0"><FontAwesomeIcon icon="fa-solid fa-triangle-exclamation"
                                                                              className="me-2"/>Sorry ! You must be logged in before you can view this page.</span>
            <form className="bg-slate-100 p-2 lg:p-5 shadow border-2 rounded">
                <label className="flex justify-around items-center gap-2 my-2">
                    Username :
                    <input type="text" value="lucas012"
                           className="bg-slate-200 border-2 border-slate-300 px-2 m-2 text-slate-600 cursor-no-drop"
                           disabled={true}/>
                </label>
                <label className="flex justify-around items-center gap-2 my-2">
                    Password :
                    <input type="password" value="lucaspass012"
                           className="bg-slate-200 border-2 border-slate-300 px-2 m-2 text-slate-600 cursor-no-drop"
                           disabled={true}/>
                </label>
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-0 justify-around mt-5">
                    <button
                        className="bg-sky-200 text-slate-700 px-2 py-1 rounded hover:bg-sky-300 duration-200 lg:w-1/3"
                        onClick={() => navigate(location.state?.return_url)}>I will just read
                    </button>
                    <button
                        className="bg-green-300 text-slate-700 px-2 py-1 rounded hover:bg-green-400 duration-200 lg:w-1/3"
                        onClick={loginHandler}>Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login