/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Grid, TextField, Button } from '@mui/material';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  findProductById,
  updateProduct,
} from '../../../Redux/Customers/Product/Action';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const initialSizes = [
  { name: 'S', quantity: 0 },
  { name: 'M', quantity: 0 },
  { name: 'L', quantity: 0 },
];

const UpdateProductForm = () => {
  const [productData, setProductData] = useState({
    id: 0,
    imageUrl: '',
    brand: '',
    title: '',
    color: '',
    discountedPrice: '',
    price: '',
    discountPersent: '',
    size: initialSizes,
    quantity: '',
    topLavelCategory: '',
    secondLavelCategory: '',
    thirdLavelCategory: '',
    description: '',
  });
  console.log(productData);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { customersProduct } = useSelector((store) => store);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productData, productData.id));
    return navigate('/admin/products');
  };

  useEffect(() => {
    // Check if productId exists before dispatching the action
    if (productId) {
      dispatch(findProductById({ productId }));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    // Check if customersProduct.product exists before updating productData
    if (customersProduct.product) {
      // Create a new object with the updated productData
      const updatedProductData = { ...productData };
      for (let key in updatedProductData) {
        updatedProductData[key] = customersProduct.product[key];
      }
      // Update the state with the new productData
      setProductData(updatedProductData);
    }
  }, [customersProduct.product]);

  return (
    <Fragment key={productData.id}>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center' }}
        className='py-10 text-center'>
        Update Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className='createProductContainer min-h-screen'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Image URL'
              name='imageUrl'
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Brand'
              name='brand'
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Title'
              name='title'
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Color'
              name='color'
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Quantity'
              name='quantity'
              value={productData.quantity}
              onChange={handleChange}
              type='number'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label='Price'
              name='price'
              value={productData.price}
              onChange={handleChange}
              type='number'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label='Discounted Price'
              name='discountedPrice'
              value={productData.discountedPrice}
              onChange={handleChange}
              type='number'
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label='Discount Percentage'
              name='discountPersent'
              value={productData.discountPersent}
              onChange={handleChange}
              type='number'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='outlined-multiline-static'
              label='Description'
              multiline
              name='description'
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              sx={{ p: 1.8 }}
              className='py-20'
              size='large'
              type='submit'>
              Update Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default UpdateProductForm;
