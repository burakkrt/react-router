import {createContext, useEffect, useState} from 'react'
import JsonData from '../fakeBlogs.json'

export const Context = createContext({});

// eslint-disable-next-line react/prop-types
export default function ContextProvider({children}) {

    const [posts, setPosts] = useState(JsonData.posts);

    const data = {
        posts
    }

    // useEffect(() => {
    //     fetch("/fakeBlogs.json")
    //         .then(response => response.json())
    //         .then(data => {
    //             setPosts(data.posts);
    //         })
    //         .catch(err => console.error(err))
    // }, [])

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
}