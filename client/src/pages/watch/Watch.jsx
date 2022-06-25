import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const { movie } = location;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        src={movie.video}
        className="video"
        progress
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
