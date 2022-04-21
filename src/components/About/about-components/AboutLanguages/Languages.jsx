/* eslint-disable react/jsx-no-comment-textnodes */
import "./Languages.css";

const Languages = () => {
  return (
    <div className="languages">
      <div className="languages__title--main">I can communicate with below verbal tools</div>
      <div className="languages__body--columns">
        <div className="languages__body--column">
					<p>// fluent</p>
					<div><span>ka-GE</span> Georgian</div>
					<div><span>en-GB</span> English</div>
					<div><span>ru-RU</span> Russian</div>
        </div>
        <div className="languages__body--column">
         <p>// Intermediate</p>
				 <div><span>fr-FR</span> French</div>
        </div>
				<div className="languages__body--column">
         <p>// Beginner</p>
				 <div><span>it-IT</span> Italian</div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
