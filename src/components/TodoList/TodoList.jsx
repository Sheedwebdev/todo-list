import React  from 'react';
import styled from 'styled-components';

  function TodoList() {
    const [tasks, setTasks] = React.useState([
      {text: "Build a react application", done: false},
      {text: "Go grocery shopping", done: false},
      {text: "Go to my doctor's appointment", done: false}
    ])
    const id = React.useId();

    return (
     <Form onSubmit={(e) => {
       e.preventDefault();
     }}>
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
            <Label htmlFor={`${id}-${index}`}>
              {task.text}
            </Label>
          </Container>
        ))}
      </Fieldset>
     </Form>
    );
  }

  const Checkbox = styled.input`
    width: 1.25rem;
    height: 1.25rem;
  `;

  const Label = styled.label`
    font-size: 1.25rem;
    font-weight: 300;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%); */
  `;

export default TodoList;