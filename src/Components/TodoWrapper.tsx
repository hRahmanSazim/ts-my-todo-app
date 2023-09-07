import { Container, TextInput, Flex, ActionIcon } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import { FormEvent } from "react";
import { useState } from "react";

type addValue = {
  addTodo: (value: string) => void;
};

export default function Todowrapper({ addTodo }: addValue): JSX.Element {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <Container>
      <Flex
        mih={100}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            placeholder="Start writing tasks......"
            label="Add Todo Here"
            size="lg"
            value={value}
            radius="lg"
            withAsterisk
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <ActionIcon size={"20"} color="violet" onClick={handleSubmit} mt={24}>
          <IconCirclePlus size={"50"}>+</IconCirclePlus>
        </ActionIcon>
      </Flex>
    </Container>
  );
}
