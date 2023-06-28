import {Link} from 'react-router-dom'

const Public404 = () => {

    return (
        <div
            className="container mx-auto bg-slate-100 flex flex-col items-center justify-center gap-5 minHeightFullScreen">
            <h1 className="text-6xl text-slate-700 uppercase font-bold text-center">404 Not Found</h1>
            <Link to="/" className="text-2xl text-blue-700 font-bold hover:text-blue-400 duration-150">Go to
                Home</Link>
        </div>
    );
}

export default Public404