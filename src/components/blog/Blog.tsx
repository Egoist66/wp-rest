import { FC, memo } from "react";
import { Posts } from "../../vite-env";
import {NavLink} from 'react-router-dom'

type BlogProps = {
    post: Posts
}

export const Blog: FC<BlogProps> = memo(({post}) => {
  
    return (
       

        <div style={{background: 'ghostwhite', margin: '20px 0px', padding: 10}}>
            <h2>{post.title.rendered}</h2>
            <p>id: {post.id}</p>
            <img src={''} alt="" />
            <NavLink to={`/post/${post.id}`}>Read more</NavLink>
          
           

        </div>
    )
})