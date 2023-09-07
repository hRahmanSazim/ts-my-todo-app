import { useDisclosure } from "@mantine/hooks";
import { IconCirclePlus } from "@tabler/icons-react";
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
    e.preventDefault();
    addTodo(value);
    setValue("");
    close();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="" centered size={"50%"}>
        <Flex
          direction="column"
          justify={"center"}
          align={"center"}
          gap="xl"
          wrap={"wrap"}
        >
          <Center>
            <form onSubmit={handleSubmit}>
              <TextInput
                data-autoFocus
                placeholder="Add Todo..."
                //   label="Add Todo Here"
                size="2.5rem"
                value={value}
                radius="xl"
                withAsterisk
                onChange={(e) => setValue(e.target.value)}
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
          size="6rem"
          radius="6rem"
          variant="transparent"
          c={"#00BDD7"}
        >
          <IconCirclePlus size="6rem" radius="xl" />
        </ActionIcon>
      </Center>
    </>
  );
}
