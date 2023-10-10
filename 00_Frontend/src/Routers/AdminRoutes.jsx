import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminPanel from '../Admin/AdminPanel';

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminPanel />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRoutes;
