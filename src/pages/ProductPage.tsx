import { Add } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from "@mui/icons-material/Publish";

import { Box, Button, Card, IconButton, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { FieldProps, Form } from "../components/Form";
import Title from "../components/Title";
import {
  useProducts,
  useCreateProduct,
  useDeleteProduct,
  useUpdateProduct,
  usePublishProduct,
} from "../hooks/useProducts";
import { useFormDrawer } from "../hooks/useFormDrawer";
import { useMedias } from "../hooks/useMedias";

const CreateProductDrawerContent = () => {
  const { medias } = useMedias();
  return (
    <React.Fragment>
      <TextField
        id="name"
        variant="filled"
        fullWidth={true}
        style={{ marginBottom: 16 }}
      />
      <TextField
        id="description"
        variant="filled"
        fullWidth={true}
        multiline={true}
        style={{ marginBottom: 16 }}
      />
      <TextField
        id="name"
        variant="filled"
        type={"number"}
        fullWidth={true}
        style={{ marginBottom: 16 }}
      />
      name description price medias options quantity category
    </React.Fragment>
  );
};

export default function ProductPage() {
  const { openFormDrawer, closeFormDrawer } = useFormDrawer();
  const { data: products } = useProducts();
  const { mutate: createProductMutate } = useCreateProduct();
  const { mutate: deleteProductMutate } = useDeleteProduct();
  const { mutate: updateProductMutate } = useUpdateProduct();
  const { mutate: publishProductMutate } = usePublishProduct();
  const createProductFormFields: FieldProps[] = [
    { name: "id", hidden: true },
    {
      name: "name",
      displayText: "Name",
      required: true,
    },
    {
      name: "link",
      displayText: "Link",
      required: true,
    },
  ];
  return (
    <React.Fragment>
      <Card style={{ padding: 16 }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Title>Products</Title>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<Add />}
            onClick={() =>
              openFormDrawer(
                <Form
                  fields={createProductFormFields}
                  onCancel={() => {
                    closeFormDrawer();
                  }}
                  title="Create Product"
                  onSave={(data) => {
                    createProductMutate(data);
                  }}
                />
              )
            }
          >
            Add new Product
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.link}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>{product.createdAt}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    color={"default"}
                    onClick={() => openFormDrawer(CreateProductDrawerContent())}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    color={"error"}
                    onClick={() => {
                      deleteProductMutate(product.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>

                  <IconButton
                    aria-label="publish"
                    color={"info"}
                    onClick={() => {
                      publishProductMutate(product.id);
                    }}
                  >
                    <PublishIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </React.Fragment>
  );
}
