import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useCreateCategory } from '../hooks/useCategories';

interface AddCategoryDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddCategoryDialog: React.FC<AddCategoryDialogProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const createProduct = useCreateCategory();

  const handleAddProduct = () => {
    createProduct.mutate({ name, price: parseFloat(price) });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Name'
          type='text'
          fullWidth
          variant='standard'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin='dense'
          label='Price'
          type='number'
          fullWidth
          variant='standard'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddProduct}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryDialog;
