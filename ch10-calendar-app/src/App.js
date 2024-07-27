import PropTypes from 'prop-types';
import { Profiler, useState } from 'react';
import YearCalendar from './YearCalendar';
import React from 'react';
import './App.css';

let renders = [];
let tracker = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  renders.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
};

function App({ onRender }) {
  const [year, setYear] = useState(2023);

  return (
    <div className='App'>
      <h1>Year: {year}</h1>
      <Profiler id='app' onRender={tracker}>
        <Profiler id='previous-button' onRender={onRender}>
          <button onClick={() => setYear((y) => y - 1)}>Previous</button>
        </Profiler>
        <Profiler id='next-button' onRender={onRender}>
          <button onClick={() => setYear((y) => y + 1)}>Next</button>
        </Profiler>
        <br />
        <YearCalendar year={year} onRender={onRender} />
      </Profiler>
      <button onClick={() => console.table(renders)}>Stats</button>
    </div>
  );
}

App.propTypes = {
  onRender: PropTypes.func,
};

App.defaultProps = {
  onRender: () => {},
};

export default App;
