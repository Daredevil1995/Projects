import React, { useState } from "react";

function Slider({ slides }) {
  console.log(slides, "slides");
  const [active, setActive] = useState(0);
  let allSlides = slides;

  const onReset = () => {
    setActive(0);
  };
  const onPrevious = () => {
    console.log(slides);
    let step = active;
    setActive(--step);
  };
  const onNext = () => {
    let step = active;
    setActive(++step);
  };
  const getContent = () => {
    let data = allSlides[active];

    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
      </div>
    );
  };
  return (
    <React.Fragment>
      <button disabled={active === 0} onClick={() => onReset()}>
        {" "}
        Reset{" "}
      </button>
      <button disabled={active === 0} onClick={() => onPrevious()}>
        {" "}
        Previous{" "}
      </button>
      <button disabled={active === slides.length - 1} onClick={() => onNext()}>
        {" "}
        Next{" "}
      </button>
      <div>{getContent()}</div>
    </React.Fragment>
  );
}

export default Slider;
