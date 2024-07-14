import { Add } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from '@mui/icons-material/Publish';

import { Box, Button, Card, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { FieldProps, Form } from "../components/Form";
import Title from "../components/Title";
import {
  useCategories,
  useCreateCategory,
  useDeleteCategory,
  useUpdateCategory,
  usePublishCategory,
} from "../hooks/useCategories";
import { useFormDrawer } from "../hooks/useFormDrawer";

export default function CategoryPage() {
  const { openFormDrawer, closeFormDrawer } = useFormDrawer();
  const { data: categories, isLoading } = useCategories();
  const { mutate: createCategoryMutate } = useCreateCategory();
  const { mutate: deleteCategoryMutate } = useDeleteCategory();
  const { mutate: updateCategoryMutate } = useUpdateCategory();
  const { mutate: publishCategoryMutate } = usePublishCategory();
  const createCategoryFormFields: FieldProps[] = [
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
          <Title>Categories</Title>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<Add />}
            onClick={() =>
              openFormDrawer(
                <Form
                  fields={createCategoryFormFields}
                  onCancel={() => {
                    closeFormDrawer();
                  }}
                  title="Create category"
                  onSave={(data) => {
                    createCategoryMutate(data);
                  }}
                />
              )
            }
          >
            Add new category
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
            {categories?.map((category: any) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.link}</TableCell>
                <TableCell>{category.status}</TableCell>
                <TableCell>{category.createdAt}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    color={"default"}
                    onClick={() =>
                      openFormDrawer(
                        <Form
                          fields={createCategoryFormFields.map((field) => ({
                            ...field,
                            value: category[field.name],
                          }))}
                          onCancel={() => {
                            closeFormDrawer();
                          }}
                          title="Update category"
                          onSave={(data) => {
                            updateCategoryMutate(data);
                          }}
                        />
                      )
                    }
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    color={"error"}
                    onClick={() => {
                      deleteCategoryMutate(category.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>

                  <IconButton
                    aria-label="publish"
                    color={"info"}
                    onClick={() => {
                      publishCategoryMutate(category.id);
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
