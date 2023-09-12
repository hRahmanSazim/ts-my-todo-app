import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Flex, Center, TextInput } from "@mantine/core";
import { FormEvent, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { Task } from "../App";

type editValue = {
  todo: Task;
  editTodo: (id: string, value: string) => void;
};
export default function EditModal({ todo, editTodo }: editValue) {
  const [opened, { open, close }] = useDisclosure(false);
  const [newTask, setNewTask] = useState<string>("");

  const handleEdit = (e: FormEvent): void => {
    if (newTask) {
      e.preventDefault();
      editTodo(todo.id, newTask);
      setNewTask("");
    }
    close();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="" centered size={"40%"}>
        <Flex
          direction="column"
          justify={"center"}
          align={"center"}
          gap={"3.5rem"}
          wrap={"wrap"}
          h={"18rem"}
        >
          <Center>
            <form onSubmit={handleEdit}>
              <TextInput
                data-autoFocus
                placeholder="Edit chosen Todo..."
                size="4.5rem"
                radius="xl"
                withAsterisk
                onChange={(e) => setNewTask(e.target.value)}
                variant="filled"
                styles={() => ({
                  input: {
                    padding: "2rem",
                    fontSize: "2rem",
                  },
                })}
              />
            </form>
          </Center>
          <Center>
            <Button
              bg={"#00BDD7"}
              c={"white"}
              onClick={handleEdit}
              radius={"xl"}
              size="lg"
              styles={() => ({
                root: {
                  boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.5)",
                  },
                },
              })}
            >
              Update
            </Button>
          </Center>
        </Flex>
      </Modal>
      <Button onClick={open} c={"black"} bg={"white"} radius={"xl"}>
        <HiOutlinePencil size="1.5rem"></HiOutlinePencil>
      </Button>
    </>
  );
}
