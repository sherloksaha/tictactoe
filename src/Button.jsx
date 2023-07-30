import React from "react";

const Button = ({
  index,
  currentAra,
  disable,
  updates,
  setIncludeArr,
  includeArr,
}) => {
  function isDis(index) {
    return includeArr.includes(index);
  }
  return (
    <>
      <button
        className="disb"
        disabled={disable || isDis(index)}
        style={{ maxHeight:'90px',maxWidth:'90px',minHeight:'90px',minWidth:'90px' }}
        onClick={() => {
          setIncludeArr((o) => [...o, index]);
          updates(index, currentAra);
        }}
      >
        
        {currentAra[index]?currentAra[index]:<span style={{visibility:'hidden'}}>'Cl'</span>}
      </button>
    </>
  );
};

export default Button;
