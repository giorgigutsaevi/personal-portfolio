import "./IntroductionText.css"

const IntroductionText = () => {
  return (
    <div className="introduction" data-testid='introduction-div'>
      <h1>
        <span className="introduction__name">giorgi</span><div className="introduction__dot"></div><span className="introduction__is--span">is()</span>
        <br />
        <p className="introduction__h5">Giorgi Gutsaev</p>
        <p className="introduction__dev--span">
          junior full stack developer.
        </p>
      </h1>
    </div>
  );
};

export default IntroductionText;
