import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text, Group, Flex } from "@mantine/core";
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
      <Modal opened={opened} onClose={close} centered size={"lg"}>
        <Flex direction={"column"} gap={"xl"}>
          <Group position={"center"}>
            <Text>"Are you sure you want to delete?"</Text>
          </Group>
          <Group position={"center"}>
            <Button
              bg={"green"}
              c={"white"}
              onClick={handleDelete}
              styles={() => ({
                root: { "&:hover": { backgroundColor: "#006400" } },
              })}
            >
              YES
            </Button>
            <Button
              bg={"#E03131"}
              c={"white"}
              onClick={close}
              w={"4.1rem"}
              styles={() => ({
                root: { "&:hover": { backgroundColor: "#C92A2A" } },
              })}
            >
              NO
            </Button>
          </Group>
        </Flex>
      </Modal>
      <Button
        c={"white"}
        bg={"#E03131"}
        radius={"xl"}
        styles={() => ({
          root: { "&:hover": { backgroundColor: "#C92A2A" } },
        })}
        onClick={open}
      >
        <TbTrashX size="1.5rem"></TbTrashX>
      </Button>
    </>
  );
};

export default DeleteModal;
