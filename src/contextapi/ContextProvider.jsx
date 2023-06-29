import {createContext, useContext, useEffect, useState} from 'react'

export const Context = createContext({});
export const Auth = () => {
    return useContext(Context);
}

// eslint-disable-next-line react/prop-types
export default function ContextProvider({children}) {

    const [posts, setPosts] = useState();
    const [login, setLogin] = useState(false);

    const data = {
        posts,
        login,
        setLogin
    }

    useEffect(() => {
        fetch("/assets/fakeBlogs.json")
            .then(response => response.json())
            .then(data => {
                setPosts(data.posts);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
}