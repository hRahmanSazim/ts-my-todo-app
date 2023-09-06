import { useState } from "react";
import "./Modal.css";
import { TextInput } from "@mantine/core";

export default function Modal({ editTodo, todo }) {
  const [modal, setModal] = useState(false);
  const [newTask, setNewTask] = useState<string>("");
  //   useEffect(() => {
  //     handleInput(newTask);
  //   }, [newTask]);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const handleInput = (id: string, value: string) => {
    editTodo(id, value);
    toggleModal();
  };
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Edit
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <TextInput
              //   onSubmit={() => handleInput(newTask)}
              placeholder="Start writing new task...."
              size="lg"
              // value={newTask}
              radius="md"
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="close-modal"
              onClick={() => handleInput(todo.id, newTask)}
            >
              Submit
            </button>
          </div>
        </div>

        // <Flex className="overlay">
        //   <form onSubmit={() => editTodo(newTask)}>
        //     <TextInput
        //       placeholder="Start writing tasks......"
        //       size="lg"
        //       value={newTask}
        //       radius="md"
        //       withAsterisk
        //       onChange={(e) => setNewTask(e.target.value)}
        //     />
        //   </form>
        //   <button className="close-modal" onClick={toggleModal}>
        //     Submit
        //   </button>
        // </Flex>
      )}{" "}
    </>
  );
}
