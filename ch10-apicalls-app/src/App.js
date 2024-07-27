import React, { Profiler } from 'react';
import usePeopleFast from './usePeopleFast';
import usePeopleSlow from './usePeopleSlow';

const ShowDetails = ({ onRender }) => {
  const peopleSlow = usePeopleSlow(1, 2, 3, 4);
  const peopleFast = usePeopleFast(1, 2, 3, 4);

  return (
    <Profiler id='profile1' onRender={onRender || (() => {})}>
      <div>
        <h1>People slow length: {peopleSlow.length};</h1>
        <h1>People fast length: {peopleFast.length};</h1>
      </div>
    </Profiler>
  );
};

export default ShowDetails;
