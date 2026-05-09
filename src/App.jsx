import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />}></Route>

        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}
export default App;