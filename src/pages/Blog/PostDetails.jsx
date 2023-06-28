import {useParams} from 'react-router-dom'
import {useContext} from 'react'
import {Context} from "../../ContextAPI/ContextProvider.jsx"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PostDetails() {

    const {posts} = useContext(Context);
    const {postId} = useParams();
    let post = {};
    if (posts) {
        post = posts.find(post => post.id === Number(postId))
    }


    return (
        <>
            {post !== undefined &&
                <div className="p-3">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <div className="my-3">
                        <FontAwesomeIcon icon="fa-solid fa-user me-3"/>
                        <span className="me-3">{post.author}</span>
                        <span>{post.history}</span>
                    </div>
                </div>}
        </>
    );
}