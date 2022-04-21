import "./Outro.css";
import { Link } from "react-router-dom";

const Outro = () => {
  return (
    <div className="outro">
      <p className="outro__title">Thanks for stopping by!</p>
      <p className="outro__body">
        Check out 
        <span className="outro__projects">
          <Link className='outro__link' to='/projects'> projects()</Link>
        </span> for more details.
      </p>
    </div>
  );
};

export default Outro;
