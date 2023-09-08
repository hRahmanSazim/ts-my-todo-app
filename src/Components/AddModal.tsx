import { useDisclosure } from "@mantine/hooks";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Modal,
  Center,
  ActionIcon,
  TextInput,
  Button,
  Flex,
} from "@mantine/core";
import { useState } from "react";
import { FormEvent } from "react";

type addValue = {
  addTodo: (value: string) => void;
};

export default function AddModal({ addTodo }: addValue) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: FormEvent): void => {
    if (value) {
      e.preventDefault();
      addTodo(value);
      setValue("");
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
            <form onSubmit={handleSubmit}>
              <TextInput
                data-autoFocus
                placeholder="Add Todo..."
                size="2rem"
                radius="xl"
                withAsterisk
                onChange={(e) => setValue(e.target.value)}
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
              Add
            </Button>
          </Center>
        </Flex>
      </Modal>
      <Center>
        <ActionIcon
          onClick={open}
          size="5rem"
          radius="6rem"
          variant="transparent"
          bg={"#00BDD7"}
        >
          <AiOutlinePlus size="3.5rem" color="white" />
        </ActionIcon>
      </Center>
    </>
  );
}
