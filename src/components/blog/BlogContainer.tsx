import { useEffect, useState } from "react";
import { Blog } from "./Blog";
import { RootPosts } from "../../vite-env";
import axios from "axios";

type LoadingStatuses = "idle" | "loading" | "resolved";

export const BlogContainer = () => {
  const [posts, setPosts] = useState<RootPosts>([]);
  const [status, setStatus] = useState<LoadingStatuses>("idle");

  useEffect(() => {
    setStatus("loading");

    (async () => {
      const res = await axios.get("https://tentfull.by/wp-json/wp/v2/pages");
      if (res.data) {
        setPosts(res.data);
        setStatus("resolved");
      }
    })();
  }, []);

  return (
    <>
      {status === "loading" ? (
        <h2>Loading...</h2>
      ) : (
        posts?.map((post) => <Blog key={post.id} post={post} />)
      )}
    </>
  );
};
