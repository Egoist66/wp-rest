import { FC, Suspense, lazy } from "react";
import {Routes, Route} from 'react-router-dom'
import { BlogContainer } from "./blog/BlogContainer";

const LazyBlog = lazy(() => import('./pages/Blog'))

export const AppRoutes: FC = () => {

    return (
        <Suspense fallback={<h2 style={{textAlign: 'center'}}>Loading...</h2>}>
            <Routes>
                <Route index element={<BlogContainer />} />
                <Route path="/post/:id" element={<LazyBlog />} />
                <Route path="*" element={<h2>404 not found</h2>} />
            </Routes>
        </Suspense>
    )
}