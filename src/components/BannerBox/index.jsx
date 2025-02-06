import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BannerBoxV2 = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <Link to={props.link}>
        <img
          src={props.image}
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="banner"
        />
      </Link>
    </div>
  );
};

export default BannerBoxV2;
