import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';

import RegisterPage from './components/RegisterPage';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
     <RegisterPage />
        {/*<LoginPage />*/ }
      <Footer />
    </div>
  );
};

export default App;