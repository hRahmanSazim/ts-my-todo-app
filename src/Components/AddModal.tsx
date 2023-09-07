import { useDisclosure } from "@mantine/hooks";
import { IconCirclePlus } from "@tabler/icons-react";
import { Modal, Center, ActionIcon, TextInput } from "@mantine/core";
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
      <Modal opened={opened} onClose={close} title="Add Todo">
        <form onSubmit={handleSubmit}>
          <TextInput
            data-autoFocus
            placeholder="Start writing tasks......"
            label="Add Todo Here"
            size="lg"
            value={value}
            radius="lg"
            withAsterisk
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </Modal>
      <Center>
        <ActionIcon
          onClick={open}
          size="6rem"
          radius="xl"
          variant="subtle"
          c={"#00BDD7"}
        >
          <IconCirclePlus size="6rem" />
        </ActionIcon>
      </Center>
    </>
  );
}
// *** important ->>>> onClick={handleSubmit}
