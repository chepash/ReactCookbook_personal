import './App.css';

const App = () => {
  // const contexts = useTaskContexts();
  // const { tasks, save, remove } = useTasks();
  // const [editTask, setEditTask] = useState();
  // const [taskToRemove, setTaskToRemove] = useState();
  // const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {/* <ul className='card-list'>
        <li className='card-container rain'>
          <div className='weather-card'>...</div>
        </li>
        <li className='card-container cloudy'>
          <div className='weather-card'>...</div>
        </li>
        <li className='card-container cloudy sunny'>
          <div className='weather-card'>...</div>
        </li>
        <li className='card-container sunny'>
          <div className='weather-card'>...</div>
        </li>
      </ul> */}

      <section class='parent'>Don't Style This</section>

      <section class='parent'>
        <p id='someId'>Style This with id</p>
      </section>

      <section class='parent'>
        <h2 class='style-me'>Style This</h2>
      </section>
    </>
  );
};

export default App;
