import React  from 'react';
import styled, { keyframes } from 'styled-components';

  function TodoList() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");
    const id = React.useId();

    const addTask = (e) => {
      e.preventDefault();
      if (!newTask.trim()) return;
      setTasks([...tasks, {text: newTask, done: false}]);
      setNewTask("");
    }

    const removeTask = function(indexToRemove) {
      const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
      setTasks(updatedTasks);
    }

    return (
     <Form onSubmit={addTask}> 
      <Fieldset>
        <Legend>To Do List</Legend>
        {tasks.map((task, index) => (
          <Container key={index}>
            <Checkbox 
              type='checkbox'
              id={`${id}-${index}`}
              value={task}
              checked={task.done}
              onChange={() => {
                const updatedTasks = [...tasks];
                updatedTasks[index].done = !updatedTasks[index].done;
                setTasks(updatedTasks);
              }}
            />
            <Label htmlFor={`${id}-${index}`} done={task.done}>
              {task.text}
            </Label>
            <RemoveButton type='button' onClick={() => {
              removeTask(index);
            }}>❌</RemoveButton>
          </Container>
        ))}
      </Fieldset>

      <TextInput>
        <input 
          type='text'
          placeholder='Add a new task'
          value={newTask}
          onChange={(e) => (
            setNewTask(e.target.value)
          )}
        />
        <AddButton type='submit'>Add</AddButton>
      </TextInput>
     </Form>
    );
  }

  const fadeSlide = keyframes`
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0.4;
      transform: translateX(25px);
    }
  `

  const AddButton = styled.button`
    background-color: hsl(39deg 100% 50%);
    
    &:hover {
      background-color: hsl(0deg 0% 0%);
      color: hsl(0deg 0% 100%);
    }
  `;

  const RemoveButton = styled.button`
  background-color: hsl(0deg 0% 100%);

  &:hover {
    background-color: hsl(0deg 0% 66%);
    color: hsl(0deg 0% 100%);
  }
  `;

  const TextInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  const Checkbox = styled.input`
    width: 1.25rem;
    height: 1.25rem;
  `;

  const Label = styled.label`
    font-size: 1.25rem;
    font-weight: 450;
    cursor: pointer;
    color: ${({ done }) => (done
       ? "hsl(0deg 0% 55%)" 
       : "hsl(0deg 0% 0%)")};
    text-decoration: ${({ done }) => (done
       ? "line-through" 
       : "none")};
    animation: ${({ done }) => (done
       ? fadeSlide
       : "none"
    )} 0.4s ease forwards;
  `;

 
 const Legend = styled.legend`
    font-size: 1.5rem;
    font-weight: 600;
  `;

  const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  `;

  const Fieldset = styled.fieldset`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  `;

  const Form = styled.form`
    display: flex;
    gap: 15px;
    height: 500px;
    width: 500px;
    background: hsl(0deg 0% 100%);;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%); */
  `;

export default TodoList;