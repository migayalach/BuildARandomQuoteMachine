// HOOK'S
import PostAction from "../Components/PostAction";

// STYLE-SHEETS
import "../StyleSheets/ContainerText.css";

const ContainerText = ({ phraseRedux: { message, author }, handleClic }) => {
  return (
    <>
      <p id="text">
        <span className="comilla">"</span> {message}
      </p>
      <p id="author">- {author}</p>
      <PostAction handleClic={handleClic} message={message} author={author} />
    </>
  );
};

export default ContainerText;
