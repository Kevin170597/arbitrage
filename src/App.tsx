import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import { Public, Private, Dashboard, Login, Register } from "./pages";

export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Public />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<div>404 not found</div>} />
          </Route>
          <Route path='/' element={<Private />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}