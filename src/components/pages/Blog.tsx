import { FC, useEffect, useState } from "react";
import { Data, Posts } from "../../vite-env";
import { useParams } from "react-router-dom";
import axios from "axios";

export type BlogProps = {
    mediaData: Data[]
}

const Blog: FC = () => {
  const [blog, setBlog] = useState<Posts | null>(null);
  const [media, setMedia] = useState<BlogProps>({
    mediaData: []
  })

  const params = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Posts>(
        `https://tentfull.by/wp-json/wp/v2/pages/${params.id}`
      );
      if (data) {
        setBlog(data);
      }
    })();
  }, [params.id]);


  useEffect(() => {
        
    blog?._links["wp:attachment"].forEach(async (media) => {
        const {data} = await axios.get<Data[]>(media.href)
        
        setMedia({mediaData: data})
        
    })
     
  }, [blog?.id])

  return (
    <>
    {media.mediaData?.length ? <img src={media.mediaData[0].link} />: null}
      {blog ? (
        <div>
          <h2>{blog?.title.rendered}</h2>
          <p>{blog?.id}</p>
          

          <div
            dangerouslySetInnerHTML={{ __html: blog?.excerpt.rendered! }}
          ></div>
        </div>
      ) : <h2 style={{textAlign: 'center'}}>Loading...</h2>}
    </>
  );
};
export default Blog;
