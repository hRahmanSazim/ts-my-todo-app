import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Flex, Center, TextInput } from "@mantine/core";
import { FormEvent, useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";

export default function EditModal({ todo, editTodo }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [newTask, setNewTask] = useState<string>("");
  const handleSubmit = (e: FormEvent): void => {
    if (newTask) {
      e.preventDefault();
      editTodo(todo.id, newTask);
      setNewTask("");
    }
    close();
  };
  return (
    <>
      <Button onClick={open}>
        <HiOutlinePencil size="1.5rem"></HiOutlinePencil>
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
              <form onSubmit={handleSubmit}>
                <TextInput
                  data-autoFocus
                  placeholder="Edit chosen Todo..."
                  size="2rem"
                  radius="xl"
                  withAsterisk
                  onChange={(e) => setNewTask(e.target.value)}
                  variant="filled"
                />
              </form>
            </Center>
            <Center>
              <Button
                bg={"#00BDD7"}
                c={"white"}
                onClick={handleSubmit}
                radius={"xl"}
                size="lg"
              >
                Update
              </Button>
            </Center>
          </Flex>
        </Modal>
      </Button>
    </>
  );
}
