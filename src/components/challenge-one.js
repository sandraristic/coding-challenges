import React from 'react';
import useFocus from '../hooks/useFocus';

const ChallengeOne = () => {

  const { ref, isFocused } = useFocus();


  return (
    <div>
      <p>Challenge #1</p>

      {/*
        CSS pseudo-class [:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
        could be used to allow conditional rendering in the parent element on the focus state of descendant elements.
      */}

      {/*
        While it is cool, in complex web apps, it might be better to control the state in script.
      */}

      {/*
        Now please create `useFocus()` to support this.
      */}

      <input ref={ref}/>
      {isFocused && <p>focused</p>}
    </div>
  );
}

export default ChallengeOne;
