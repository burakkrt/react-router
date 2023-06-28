import {Link} from 'react-router-dom'

const Public404 = () => {

    return (
        <div className="container mx-auto bg-red-200 h-screen flex flex-col items-center justify-center gap-5">
            <h1 className="text-6xl text-slate-700 uppercase font-bold">404 Not Found</h1>
            <Link to="/" className="text-2xl hover:text-blue-700 hover:font-bold duration-150">Go to
                Home</Link>
        </div>
    );
}

export default Public404