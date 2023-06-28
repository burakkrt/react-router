import {Context} from "../ContextAPI/ContextProvider.jsx";
import {useContext} from "react";
import parse from 'html-react-parser'

export default function Contact() {

    const {posts} = useContext(Context);

    const content = `${posts.posts && posts.posts[0].content}`;


    return (
        <div>
            {parse(content)}
        </div>
    );
}