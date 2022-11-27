import Benefits from '../components/Benefits/Benefits';
import Building from '../components/Building/Building';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Main from '../components/Main/Main';
import './_base.scss';

function App() {
  return (
    <div className='App'>
      <main className='wrapper'>
        <div className='header-main'>
          <Header />
          <Main />
        </div>
        <Benefits />
        <Building />
        <Layout />
      </main>
      <Footer />
    </div>
  );
}

export default App;
