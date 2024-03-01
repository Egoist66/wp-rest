import { useEffect, useState } from "react";
import { Blog } from "./Blog";
import { Data, RootPosts } from "../../vite-env";
import axios from "axios";
import { BlogProps } from "../pages/Blog";

type LoadingStatuses = "idle" | "loading" | "resolved";

export const BlogContainer = () => {
  const [posts, setPosts] = useState<RootPosts>([]);
  const [status, setStatus] = useState<LoadingStatuses>("idle");
  const [media, setMedia] = useState<BlogProps>({
    mediaData: [],
  });

  useEffect(() => {
    setStatus("loading");

    (async () => {
      try {
        const res = await axios.get<RootPosts>("https://tentfull.by/wp-json/wp/v2/pages");
        if (res.data) {
          setPosts(res.data);
          setStatus("resolved");

        }
      }
      catch(e){
        console.log(e);
        
      }
    })();
  }, []);

 
  useEffect(() => {
      
   if(posts){
      posts.forEach(async (post,i) => {
            
        console.log(post?._links["wp:attachment"][i]);
        const { data } = await axios<Data[]>(
          post._links["wp:attachment"][0]?.href
        );
        
        
        setMedia({mediaData: [...media.mediaData, ...data] });
          
        
      
        
    
      })
   }
  }, [posts.length])

  return (
    <>
      {status === "loading" ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        posts?.map((post, i: number) => (
          <Blog 
            image={media.mediaData && media.mediaData[i]?.link}
            index={i} 
            key={post.id} 
            post={post} 
          />
        ))
      )}
    </>
  );
};
