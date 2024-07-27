import './App.css';

function App() {
  const e = 3;

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: '<p>This is a bad idea</p>',
          }}
        />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
