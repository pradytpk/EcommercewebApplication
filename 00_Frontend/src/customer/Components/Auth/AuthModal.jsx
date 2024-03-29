import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RegisterUserForm from './Register';
import { useEffect } from 'react';
import LoginUserForm from './Login';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ handleClose, open }) {
  const location = useLocation();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (auth.user) handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.user]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        size='large'>
        <Box className='rounded-md' sx={style}>
          {location.pathname === '/login' ? (
            <LoginUserForm />
          ) : (
            <RegisterUserForm />
          )}
        </Box>
      </Modal>
    </>
  );
}
