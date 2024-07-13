import { Drawer } from "@mui/material";
import { useFormDrawer } from "../hooks/useFormDrawer";
export const FormDrawer: React.FC = () => {
  const { isOpen, content, closeFormDrawer } = useFormDrawer();
  console.log('FormDrawer', isOpen, content)
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isOpen}
      onClose={closeFormDrawer}
    >
      <div style={{padding: 16, marginTop: '4rem'}}>{content}</div>
    </Drawer>
  );
};
