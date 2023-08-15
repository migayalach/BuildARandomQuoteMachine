// COMPONENT
import ContainerText from "../../Components/ContainerText";

//HOOK'S
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhrase } from "../../Redux/actions";

// STILE SHEETS
import "../../StyleSheets/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const phraseRedux = useSelector((state) => state.phrase);
  useEffect(() => {
    dispatch(getPhrase(ramdonPhrase()));
  }, []);

  const handleClic = () => {
    const idRandom = ramdonPhrase();
    dispatch(getPhrase(idRandom));
  };

  const ramdonPhrase = () => Math.floor(Math.random() * 20) + 1;

  return (
    <>
      <div id="quote-box">
        <ContainerText phraseRedux={phraseRedux} handleClic={handleClic} />
      </div>
      <p className="footer">by hezag</p>
    </>
  );
};

export default Home;
