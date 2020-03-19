import React from 'react';
import './dropzone_styles.scss';

function Dropzone({ id, class_name, children }) {
  const drag_over = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('dragged_element_id');
    const dragged_el = document.getElementById(data);
    // e.target.appendChild(document.getElementById(data))
    // dragged_el.style.display = 'block'
    // e.target.style.background = 'bisque'
    e.target.appendChild(dragged_el);
  };

  const drop_zone_enter = (e) => {
    if (e.target.className === 'dropzone') {
      e.target.style.background = 'rgb(252, 215, 170)';
    }
  };

  const drop_zone_leave = (e) => {
    if (e.target.className === 'dropzone') {
      e.target.style.background = 'bisque';
    }
  };

  return (
    <div
      id={id}
      className={class_name}
      onDragOver={drag_over}
      onDrop={drop}
      onDragEnter={drop_zone_enter}
      onDragLeave={drop_zone_leave}
    >
      {children}
    </div>
  );
}

export default Dropzone;
