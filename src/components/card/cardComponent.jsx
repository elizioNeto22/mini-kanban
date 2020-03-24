import React from 'react';
import DraggableEl from '../draggable/draggable_component';

import './card_styles.scss';

const Card = ({ id, cardTask, isEditing, editCard, renameCard }) => (
  <DraggableEl id={id} class_name="task-description card">
    <div id={id} className="card-content" contentEditable={true} onInput={editCard} />
  </DraggableEl>
);

export default Card;
