import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import { TbTrashX } from "react-icons/tb";
import { FormEvent } from "react";

const DeleteModal = ({ removeTodo, todo }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleDelete = (e: FormEvent): void => {
    removeTodo(todo.id);
    close();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="You really want to delete!">
        <Group position="center"></Group>
      </Modal>
      <Button
        c={"white"}
        bg={"#E03131"}
        radius={"xl"}
        styles={() => ({
          root: { "&:hover": { backgroundColor: "#C92A2A" } },
        })}
        onClick={handleDelete}
      >
        <TbTrashX size="1.5rem"></TbTrashX>
      </Button>
    </>
  );
};

export default DeleteModal;
