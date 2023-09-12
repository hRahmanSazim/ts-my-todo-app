import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text, Group, Flex } from "@mantine/core";
import { TbTrashX } from "react-icons/tb";
import { Task } from "../App";

type deleteValue = {
  removeTodo: (id: string) => void;
  todo: Task;
};
const DeleteModal = ({ removeTodo, todo }: deleteValue) => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleDelete = () => {
    removeTodo(todo.id);
    close();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} centered size={"lg"} radius={"xl"}>
        <Flex direction={"column"} gap={"xl"}>
          <Group position={"center"}>
            <Text>"Are you sure you want to delete?"</Text>
          </Group>
          <Group position={"center"}>
            <Button
              bg={"#00BDD7"}
              c={"white"}
              onClick={handleDelete}
              styles={() => ({
                root: { "&:hover": { backgroundColor: "#006400" } },
              })}
              radius={"xl"}
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
              radius={"xl"}
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
