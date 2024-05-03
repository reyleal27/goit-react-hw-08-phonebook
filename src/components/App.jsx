import { Register } from './pages/RegisterPage';
import Phonebook from './pages/Phonebook';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/contacts" element={<Phonebook />}></Route>
      </Routes>
    </div>
  );
};

export default App;
