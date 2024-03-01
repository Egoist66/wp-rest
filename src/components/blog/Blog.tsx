import { FC } from "react";
import { Posts } from "../../vite-env";
import {NavLink} from 'react-router-dom'

type BlogProps = {
    post: Posts
    index: number
    image: string
}

export const Blog: FC<BlogProps> = ({post, image, index}) => {
  
    return (
       

        <div style={{background: 'ghostwhite', margin: '20px 0px', padding: 10}}>

            <h2>{post.title.rendered}</h2>
            <img src={image} alt={post.title.rendered} />
            <p>id: {post.id}</p>
            <p>Publish date: {post.date}</p>
            <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
            <NavLink to={`/post/${post.id}`}>Read more</NavLink>
          

        </div>
    )
}