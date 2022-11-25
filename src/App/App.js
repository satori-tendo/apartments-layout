import Benefits from '../components/Benefits/Benefits';
import Building from '../components/Building/Building';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import './_base.scss';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='header-main'>
          <Header />
          <Main />
        </div>
        <Benefits />
        <Building />
      </div>
      <Footer />
    </div>
  );
}

export default App;
