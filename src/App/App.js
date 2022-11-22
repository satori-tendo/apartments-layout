import Benefits from '../components/Benefits/Benefits';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import './_base.scss';

function App() {
  return (
    <div className='App'>
      <div className='header-main'>
        <Header />
        <Main />
      </div>
      <Benefits />
    </div>
  );
}

export default App;
