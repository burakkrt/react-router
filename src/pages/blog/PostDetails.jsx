import {useParams} from 'react-router-dom'
import {Auth} from "../../contextapi/ContextProvider.jsx"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import parse from 'html-react-parser'
import {useEffect, useState} from "react";

export default function PostDetails() {


    const {posts} = Auth();
    const {postId} = useParams();
    let post = {};
    if (posts) {
        post = posts.find(post => post.id === Number(postId))
    }

    useEffect(() => {
        if (window.scrollY > 10) pageUpHandler();
    }, [])


    const [pageUpState, setPageUpState] = useState(false)
    window.addEventListener("scroll", () => {
        if (scrollY > 200) {
            if (!pageUpState) setPageUpState(true);
        } else if (pageUpState) setPageUpState(false)
    })

    const pageUpHandler = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="p-3">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div className="mt-3 mb-5">
                <span className="me-3"><FontAwesomeIcon icon="fa-solid fa-user" className="me-2"/>{post.author}</span>
                <span><FontAwesomeIcon icon="fa-solid fa-clock" className="me-2"/>{post.history}</span>
            </div>
            <img src={post.image} alt={post.title + " image"} className="mx-auto"/>
            <div className="mt-5">
                {parse(post.content ? post.content : "")}
            </div>
            <button onClick={pageUpHandler}><FontAwesomeIcon icon="fa-solid fa-arrow-up"
                                                             className={`pageUpBtn fixed bottom-10 end-10 bg-slate-700 text-slate-100 p-4 rounded animate-pulse ${pageUpState ? "active" : "passive"}`}/>
            </button>
        </div>
    );
}