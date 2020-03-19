import React from 'react';
// import './draggable_styles.scss'

function DraggableEl({ id, children, class_name }) {
  const drag_over = (e) => {
    e.stopPropagation();
  };

  const drag_element_start = (e) => {
    // const target = e.target
    // e.dataTransfer.setData('dragged_element_id', target.id)
    e.dataTransfer.setData('dragged_element_id', e.target.id);
    // e.target.classList.add('nova-classe')
    e.target.style.opacity = '.4';
    // e.target.style.cursor = 'grabbing'
  };
  const drag_element_end = (e) => {
    // e.target.classList.remove('nova-classe')
    e.target.style.opacity = '';
    // e.target.style.cursor = 'grab'
  };
  return (
    <div
      id={id}
      className={class_name}
      draggable
      onDragOver={drag_over}
      onDragStart={drag_element_start}
      onDragEnd={drag_element_end}
    >
      {children}
    </div>
  );
}

export default DraggableEl;
