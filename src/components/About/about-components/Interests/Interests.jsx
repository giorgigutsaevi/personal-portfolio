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
					<p>Video games, Vinyl records</p>
        </div>
				<div className="interests__body--column">
					<p>Geeking out</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
