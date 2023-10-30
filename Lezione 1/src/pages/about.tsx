import React from "react";
import Layout from "./component/Layout/Layout";
import { request } from "../../lib/datocms";
import Image from "next/image"


const ABOUT_QUERY = `{
    aboutPage {
      backgroundImage {
        width
        height
        alt
        url
      }
      title
    }
  }`;

//Questa funzione viene eseguita durante la build
export async function getStaticProps() { //Funzione del framework, viene gestita direttamente da esso 
  const data = await request({
    query: ABOUT_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

const about = ({data}: any) => {
    const image = data.aboutPage.backgroundImage

  return <Layout>
    About project
    <h1>{data.aboutPage.title}</h1>
    <Image src={image.url}
    alt={image.alt}
    width={data.aboutPage.backgroundImage.width}
    height={data.aboutPage.backgroundImage.height}
    />
  </Layout>;
};

export default about;
