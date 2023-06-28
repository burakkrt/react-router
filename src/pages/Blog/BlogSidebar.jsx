import {useContext} from "react";
import {Context} from "../../ContextAPI/ContextProvider.jsx"
import {Link} from "react-router-dom";

export default function BlogSidebar() {

    const {posts} = useContext(Context);

    return (
        <div>
            <h1 className="text-2xl font-bold uppercase text-slate-700 tracking-widest border-b-2 pb-2">Other
                Topics</h1>
            <ul className="mt-5">
                {posts && posts.map(post => (
                    <li key={post.id}
                        className="text-lg bg-slate-700 text-slate-100 p-5 rounded mb-4 ">
                        <Link to={`/blog/post-details/post/${post.id}`}
                              className="hover:text-green-400">{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}