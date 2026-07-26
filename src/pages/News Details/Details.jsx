import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router";

function Details({ news }) {
  const { image_url, title, details, category_id } = news;

  return (
    <section className="border border-base-200 rounded-sm p-7 mt-5">
      <img src={image_url} alt="news-image" />
      <h2 className="text-2xl font-bold text-primary leading-11 mt-5">
        {title}
      </h2>
      <p className="mt-2 text-base-300 leading-6">{details}</p>
      <Link to={`/category/${category_id}`}>
        <button className="mt-8 bg-secondary text-xl font-medium text-white leading-7 py-2 px-6 flex gap-1 items-center">
          <IoArrowBackSharp /> All news in this category
        </button>
      </Link>
    </section>
  );
}

export default Details;
