//ICONS
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiTumblr } from "react-icons/si";

// STYLE SHEETS
import "../StyleSheets/PostAction.css";

const PostAction = ({ handleClic, message, author }) => {
  return (
    <div className="button-option">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          '"' + message + '" - ' + author + " #quotes"
        )}`}
        rel="noopener noreferrer"
      >
        <button className="btn-option">
          <AiFillTwitterCircle />
        </button>
      </a>

      <a
        href={`https://www.tumblr.com/widgets/share/tool?posttype=link&title=Random%20Quote&content=${encodeURIComponent(
          '"' + message + '" - ' + author + " #quotes #freecodecamp"
        )}&canonicalUrl=https://www.tu-sitio-web.com/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn-option">
          <SiTumblr />
        </button>
      </a>

      <div className="position-button">
        <button onClick={handleClic} value="next" className=" btn-option">
          New quote
        </button>
      </div>
    </div>
  );
};

export default PostAction;
