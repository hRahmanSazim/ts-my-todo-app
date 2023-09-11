import { useDisclosure } from "@mantine/hooks";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, ActionIcon, TextInput, Button, Flex } from "@mantine/core";
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
          <form onSubmit={handleSubmit}>
            <TextInput
              data-autoFocus
              placeholder="Add Todo..."
              size="4rem"
              radius="xl"
              withAsterisk
              onChange={(e) => setValue(e.target.value)}
              variant="filled"
              styles={() => ({
                input: {
                  padding: "2rem",
                  fontSize: "2rem",
                },
              })}
            />
          </form>

          <Button
            bg={"#00BDD7"}
            c={"white"}
            onClick={handleSubmit}
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
            Add
          </Button>
        </Flex>
      </Modal>

      <ActionIcon
        sx={{
          position: "fixed",
          bottom: "2.5rem",
          margin: "0 auto",
          boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.5)",
          "&:hover": {
            boxShadow: "0px -5px 20px 0px rgba(0, 0, 0, 0.5)",
          },
        }}
        onClick={open}
        size="5rem"
        radius="6rem"
        variant="transparent"
        bg={"#00BDD7"}
      >
        <AiOutlinePlus size="3.5rem" color="white" />
      </ActionIcon>
    </>
  );
}
