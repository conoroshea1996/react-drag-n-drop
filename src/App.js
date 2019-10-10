import React from 'react';
import styled from 'styled-components';
import Draggable from './Components/Draggable/Draggable';
import Dropable from './Components/Droppable/Dropable';
import './App.css';


function App() {
  const Wrapper = styled.div`
  width:100%;
  padding: 10px;
  display:flex;
  justify-content:center;
  `
  const Item = styled.div`
    background: white;
    width:100%;
    color: grey;
    padding:6px;
    margin:5px 0px;
  `
  const dropBox = {
    background: 'black',
    width: '250px',
    height: '500px',
    margin: '40px'
  }
  return (
    <Wrapper>
      <Dropable id='dr1' style={dropBox} >
        <Draggable id='item3'>
          <Item>Drag me one</Item>
        </Draggable>
        <Draggable id='item2'>
          <Item>Drag me two</Item>
        </Draggable>
      </Dropable>
      <Dropable id='dr2' style={dropBox}>

      </Dropable>
    </Wrapper>
  );
}

export default App;
