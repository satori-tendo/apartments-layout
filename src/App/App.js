import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import './_base.scss';

function App() {
  return (
    <div className='App'>
      <div className='header_main'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
