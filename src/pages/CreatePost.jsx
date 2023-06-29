import {Link} from "react-router-dom";

export default function CreatePost() {


    return (
        <div className="container mx-auto minHeightFullScreen grid place-content-center bg-slate-100">
            <h1 className="text-center">Create Content Page</h1>
            <h3 className="text-slate-700">Sorry, this page is under construction. You can read our blog posts if you
                wish.</h3>
            <Link to="/blog"
                  className="text-xl text-center mt-4 bg-slate-300 py-2 rounded-lg hover:bg-green-200 duration-200">Blog
                Page</Link>
        </div>
    );
}