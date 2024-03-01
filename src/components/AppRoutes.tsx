import { FC } from "react";
import {Routes, Route} from 'react-router-dom'
import { BlogContainer } from "./blog/BlogContainer";

export const AppRoutes: FC = () => {

    return (
        <Routes>
            <Route index element={<BlogContainer />} />
            <Route path="/post/:id" element={<h2>Blog</h2>} />
            <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
    )
}