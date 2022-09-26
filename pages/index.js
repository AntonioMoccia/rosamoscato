import React, { useEffect } from "react";
import { client } from "../prismic";
export async function getStaticProps() {
    const data = await client.getByType("home")

    return {
        props: {
            data:data.results[0].data
        },
    };
}

function Home({ data }) {
  useEffect(() => {
     console.log(data.video.url);
  }, [data]);
  return (
    <div className="home-wrapper">
      <div className="video-wrapper" data-scroll-section>
        <video
          id="video-hero-id"
          className="video-hero"
          autoPlay
          loop
          controls
          muted={true}
          playsInline
        >
          <source src={data.video.url} />
        </video>
      </div>
    </div>
  );
}

export default Home;
