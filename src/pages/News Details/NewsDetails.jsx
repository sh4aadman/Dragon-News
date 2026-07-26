import { useLoaderData, useParams } from "react-router";
import Header from "../../components/common/Header/Header";
import Details from "./Details";
import RightAside from "../../components/common/Right Aside/RightAside";

function NewsDetails() {
  const newsData = useLoaderData();
  const { id } = useParams();

  const news = newsData.find((news) => news._id === id);

  return (
    <section className="w-5/6 mx-auto my-8">
      <Header></Header>
      <section className="ml-4 mt-8 grid grid-cols-12 gap-8">
        <section className="col-span-9">
          <h2 className="text-xl font-semibold text-primary leading-7">
            Dragon News
          </h2>
          <Details news={news}></Details>
        </section>
        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </section>
    </section>
  );
}

export default NewsDetails;
