import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import Protected from './protected';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Protected><UpdateProduct /></Protected>} />
          <Route path="/add" element={<Protected><AddProduct /></Protected>} />
          <Route path="/" element={<Protected><ProductList /></Protected>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
