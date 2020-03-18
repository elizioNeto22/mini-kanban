import React from 'react'

const Card = ({id, task, isEditing, renomearCard}) => (
  <div className="task-container" id={id}>
    {/* {
      isEditing 
      ?
      <input type="text" />
      :
      <p>{task}</p>
      // <p onClick={renomearCard}>{task}</p>

    } */}
    <p className="task-description" placeholder='add description'>{task}</p>
  </div>
)





export default Card