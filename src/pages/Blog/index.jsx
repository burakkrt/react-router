import BlogSidebar from "./BlogSidebar.jsx";
import {Outlet} from "react-router-dom";

export default function BlogLayout() {

    return (
        <div className="container mx-auto minHeightFullScreen grid grid-cols-12 gap-x-2">
            <div className="col-span-12 lg:col-span-7 xl:col-span-8 p-4">
                <Outlet/>
            </div>
            <div className="col-span-12 lg:col-span-5 xl:col-span-4 p-4">
                <BlogSidebar/>
            </div>
        </div>
    );
}