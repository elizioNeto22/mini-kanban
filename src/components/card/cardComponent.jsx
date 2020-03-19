import React from 'react';
import DraggableEl from '../draggable/draggable_component';

import './card_styles.scss';

const Card = ({ id, task, isEditing, renomearCard }) => (
  <div className="task-container" id={id}>
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
