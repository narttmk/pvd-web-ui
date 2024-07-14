import { Add } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Card, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { FieldProps, Form } from "../components/Form";
import Title from "../components/Title";
import { useFormDrawer } from "../hooks/useFormDrawer";
import { useDeleteMedia, useMedias, useUploadMedia } from "../hooks/useMedias";

export default function MediaPage() {
  const { openFormDrawer, closeFormDrawer } = useFormDrawer();
  const { data: medias } = useMedias();
  const uploadMedia = useUploadMedia();
  const deleteMediaMutate = useDeleteMedia();

  const createMediaFormFields: FieldProps[] = [
    {
      name: "files",
      displayText: "Choose files",
      type: "file",
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
          <Title>Media</Title>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<Add />}
            onClick={() =>
              openFormDrawer(
                <Form
                  fields={createMediaFormFields}
                  onCancel={() => {
                    closeFormDrawer();
                  }}
                  title="Upload files"
                  onSave={(data) => {
                    console.log(data)
                    uploadMedia.mutate(data as any);
                  }}
                />
              )
            }
          >
            Upload Media
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Path</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Preview</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medias?.map((media: any) => (
              <TableRow key={media.id}>
                <TableCell>{media.id}</TableCell>
                <TableCell>{media.name}</TableCell>
                <TableCell>{`${import.meta.env.VITE_IMAGE_URL}images/${media.name}`}</TableCell>
                <TableCell><img src={`${import.meta.env.VITE_IMAGE_URL}images/${media.name}`} width={128} height={64}/></TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    color={"error"}
                    onClick={() => {
                      deleteMediaMutate.mutate(media.id);
                    }}
                  >
                    <DeleteIcon />
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
