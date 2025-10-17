import React  from 'react';
import TodoList from '../TodoList';
import styled from 'styled-components';

  function App() {
    return (
      <Wrapper>
        <TodoList />
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: hsl(240deg 75% 50%);
  `;

export default App;