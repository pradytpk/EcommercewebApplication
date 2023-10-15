import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 50%;
`;

const CenteredCell = styled.td`
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
`;

const Profile = () => {
  const { auth } = useSelector((store) => store);
  console.log('auth', auth);
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CenteredCell>{auth.user.firstName}</CenteredCell>
            <CenteredCell>{auth.user.email}</CenteredCell>
          </tr>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Profile;
