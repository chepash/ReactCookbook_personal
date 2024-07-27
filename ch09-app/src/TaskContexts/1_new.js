/* eslint-disable react/style-prop-object */

function cardList({}) {
  return (
    <ul classname='card-list'>
      <li classname='card-container' style={{ '--rain': true }}>
        <div classname='weather-card'>...</div>
      </li>
      <li classname='card-container' style={{ '--cloudy': true }}>
        <div classname='weather-card'>...</div>
      </li>
      <li classname='card-container' style={{ '--cloudy': true, '--sunny': true }}>
        <div classname='weather-card'>...</div>
      </li>
      <li classname='card-container' style={{ '--sunny': true }}>
        <div classname='weather-card'>...</div>
      </li>
    </ul>
  );
}

export default cardList;
