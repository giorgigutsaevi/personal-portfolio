import "./LoveLetter.css"

const LoveLetter = () => {
  return (
    <div className="loveLetter" data-testid='loveLetter'>
      <p className="loveLetter__line1">
        I fell in love with <span className="loveLetter__coding">coding.</span>
      </p>
      <p className="loveLetter__line2">
        When I am not coding, I am probably out somewhere searching for my next
        favourite<span className="loveLetter__cheese"> cheese.</span>
      </p>
      <p className="loveLetter__line3">
       The smellier, the better.
      </p>
    </div>
  );
};

export default LoveLetter;
