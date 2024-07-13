# Tạo cấu trúc thư mục
mkdir src/api src/components src/pages src/hooks src/context src/styles src/utils

# Tạo các tệp tin ban đầu
touch src/api/product.ts
touch src/hooks/useProducts.ts
touch src/pages/ProductPage.tsx
touch src/components/AddProductDialog.tsx

# Tạo tệp tin main.tsx nếu chưa có
touch src/main.tsx

# Cài đặt các phụ thuộc cần thiết
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install axios react-query
npm install react-router-dom

# Thêm nội dung vào các tệp tin (nếu cần)
echo "import axios from 'axios';

const API_URL = 'http://your-api-url';

export const fetchProducts = async () => {
  const response = await axios.get(\`\${API_URL}/products\`);
  return response.data;
};

export const createProduct = async (product: any) => {
  const response = await axios.post(\`\${API_URL}/products\`, product);
  return response.data;
};

// Add updateProduct and deleteProduct methods similarly" > src/api/product.ts

echo "import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchProducts, createProduct } from '../api/product';

export const useProducts = () => {
  return useQuery('products', fetchProducts);
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
// Similarly, create hooks for updateProduct and deleteProduct" > src/hooks/useProducts.ts

echo "import React, { useState } from 'react';
import { useProducts, useCreateProduct } from '../hooks/useProducts';
import { Container, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import AddProductDialog from '../components/AddProductDialog';

const ProductPage = () => {
  const { data: products, isLoading } = useProducts();
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant='h4'>Products</Typography>
      <Button variant='contained' color='primary' onClick={() => setOpen(true)}>
        Add Product
      </Button>
      <AddProductDialog open={open} onClose={() => setOpen(false)} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                {/* Add buttons for update and delete */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ProductPage;" > src/pages/ProductPage.tsx

echo "import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useCreateProduct } from '../hooks/useProducts';

interface AddProductDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddProductDialog: React.FC<AddProductDialogProps> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const createProduct = useCreateProduct();

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

export default AddProductDialog;" > src/components/AddProductDialog.tsx

echo "import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

const theme = createTheme({
  // Add your custom theme options here
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);" > src/main.tsx

echo "import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
// Import other pages

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/products' component={ProductPage} />
        {/* Add routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;" > src/App.tsx

# Chạy ứng dụng
npm run dev
