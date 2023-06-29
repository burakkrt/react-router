import {Context} from '../../ContextAPI/ContextProvider.jsx'
import {useContext} from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Blogs() {

    const {posts} = useContext(Context);

    return (
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
            {posts && posts.map(post => (
                <div className="flex flex-col gap-4 bg-slate-200 p-2 rounded shadow" key={post.id}>
                    <Link to={`post-details/post/${post.id}`}><img src={post.image} alt=""
                                                                   className="w-full h-64 object-cover object-center"/></Link>
                    <div className="flex-auto">
                        <div className="flex flex-col justify-between gap-4 px-4 h-full">
                            <h1 className="text-xl font-bold">{post.title}</h1>
                            <p>{post.description}</p>
                            <div className="flex flex-row justify-between items-center">
                                <Link to={`post-details/post/${post.id}`}
                                      className="bg-slate-800 text-slate-100 px-4 py-2 rounded hover:bg-slate-600 duration-200">Read
                                    More <FontAwesomeIcon icon="fa-solid fa-arrow-right"/></Link>
                                <span className="">{post.author} - {post.history}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}