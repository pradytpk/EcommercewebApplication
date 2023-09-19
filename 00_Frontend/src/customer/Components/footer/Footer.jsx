import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid
      className='bg-black text-white mt-10 text-center'
      container
      color={'white'}
      sx={{ bgcolor: 'black', color: 'white', py: 3 }}
    >
      <Grid className='pt-20' item xs={12}>
        <Typography variant='body2' component='p' align='center'>
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant='body2' component='p' align='center'>
          Made with love by Me.
        </Typography>
        <Typography variant='body2' component='p' align='center'>
          Icons made by{' '}
          <Link
            href='https://www.freepik.com'
            color='inherit'
            underline='always'
          >
            Freepik
          </Link>{' '}
          from{' '}
          <Link
            href='https://www.flaticon.com/'
            color='inherit'
            underline='always'
          >
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
