import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Navbuttons({ onPrev, onNext }) {
  return (
    <>
      <button className="nav-left" onClick={onPrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="nav-right" onClick={onNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
}

export default Navbuttons;