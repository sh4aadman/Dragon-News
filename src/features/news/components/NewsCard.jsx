import { FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router";

function NewsCard({ news }) {
  const { _id, author, title, image_url, details, rating, total_view } = news;

  const date = author.published_date;
  const day = date?.split(" ")[0];

  return (
    <section className="mt-7">
      <section className="flex justify-between items-center bg-base-100 p-5">
        <section className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={author.img}
            alt={`author - ${author.name}`}
          />
          <section>
            <h2 className="font-semibold text-primary leading-7">
              {author.name}
            </h2>
            <p className="text-sm text-base-300">{day || "Date unavailable"}</p>
          </section>
        </section>
        <section className="space-x-3 text-base-300 text-2xl">
          <button>
            <FaRegBookmark />
          </button>
          <button>
            <IoShareSocialOutline />
          </button>
        </section>
      </section>
      <section className="p-5 border border-t-0 border-base-200 rounded-sm">
        <section>
          <h2 className="text-xl font-bold text-primary mb-5 leading-7">
            {title}
          </h2>
          <img
            className="w-full object-cover"
            src={image_url}
            alt="news-thumbnail"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-8 text-base-300 leading-7">
            {details.slice(0, 200)}...
          </p>
          <Link
            to={`/news-details/${_id}`}
            className="mt-4 inline-block text-info font-semibold"
          >
            Read More
          </Link>
        </section>
        <hr className="my-5 text-base-200" />
        <section className="flex justify-between items-center">
          <section className="font-medium flex items-center gap-3">
            <section className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                  {star <= rating.number ? (
                    <FaStar className="text-info text-2xl" />
                  ) : (
                    <FaRegStar className="text-info text-2xl" />
                  )}
                </span>
              ))}
            </section>
            <p className="font-medium text-base-300 leading-7">
              {rating.number}
            </p>
          </section>
          <section className="text-base-300 flex items-center gap-2.5">
            <LuEye className="text-2xl" />
            <p className="font-medium leading-7">{total_view}</p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default NewsCard;
