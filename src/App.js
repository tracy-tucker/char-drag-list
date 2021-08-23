import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './App.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {finalSpaceCharacters.map(({id, name, thumb}) => {
                  return (
                    <li key={id}>
                      <div className="characters-thumb">
                        <img src={thumb} alt={`${name} Thumb`} />
                      </div>
                      <p>
                        { name }
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <p>
        Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
      </p>
    </div>
  );
}

export default App;

// DragDropContext = Allows us to use the Beautiful DND library on our project
// Droppable = Sets ups the area where we can have our individual items moved around

// NOTES ON REQUIRED INSERTS FROM BEAUTIFUL DND:
// Droppable requires a unique droppableId, it can be named whatever, as long as it is unique
// You must create an IFFE function and pass in provided. Library insertion requirement. Add to outer-most Component.
// {...provided.droppableProps} ref={provided.innerRef} is also required for the next inner component.
