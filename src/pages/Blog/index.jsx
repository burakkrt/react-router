import BlogSidebar from "./BlogSidebar.jsx";
import {Outlet} from "react-router-dom";

export default function BlogLayout() {

    return (
        <div className="container mx-auto minHeightFullScreen flex">
            <div className="grow-[4] bg-yellow-200 p-4">
                <Outlet/>
            </div>
            <div className="grow-[1] bg-red-200">
                <BlogSidebar/>
            </div>

        </div>
    );
}