import React from 'react';
import DraggableEl from '../draggable/draggable_component';

import './card_styles.scss';

const Card = ({ id, task, isEditing, renomearCard }) => (
  <div className="task-container" id={id}>
    {/* {
      isEditing 
      ?
      <input type="text" />
      :
      <p>{task}</p>
      // <p onClick={renomearCard}>{task}</p>

    } */}
    <DraggableEl id={id} class_name="task-description card">
      <input
        type="text"
        value={task}
        className="card-text"
        placeholder="content"
        onMouseDown={(e) => e.target.classList.toggle('editing')}
        // onMouseUp={(e) => e.target.classList.toggle('')}
      />
    </DraggableEl>
  </div>
);

export default Card;
