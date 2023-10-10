import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminPanel from './Admin/AdminPanel';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/*' element={<CustomerRoutes />} />
        <Route path='/admin/*' element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
