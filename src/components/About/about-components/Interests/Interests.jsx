import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests">
      <div className="interests__title--main">Sometimes I also do these things</div>
      <div className="interests__body--columns">
        <div className="interests__body--column">
					Cooking,
					Making <span className="interests__kimchi">Kimchi</span>
        </div>
        <div className="interests__body--column">
					Video games, Vinyl records
        </div>
				<div className="interests__body--column">
					Geeking out
        </div>
      </div>
    </div>
  );
};

export default Interests;
