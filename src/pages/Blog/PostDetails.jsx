import {useParams} from 'react-router-dom'
import {useContext} from 'react'
import {Context} from "../../ContextAPI/ContextProvider.jsx"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import parse from 'html-react-parser'

export default function PostDetails() {

    const {posts} = useContext(Context);
    const {postId} = useParams();
    let post = {};
    if (posts) {
        post = posts.find(post => post.id === Number(postId))
        console.log(post)
    }


    return (
        <div className="p-3">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div className="my-3">
                <span className="me-3"><FontAwesomeIcon icon="fa-solid fa-user" className="me-2"/>{post.author}</span>
                <span><FontAwesomeIcon icon="fa-solid fa-clock" className="me-2"/>{post.history}</span>
            </div>
            <div className="mt-5">
                {parse(post.content ? post.content : "")}
            </div>
        </div>
    );
}