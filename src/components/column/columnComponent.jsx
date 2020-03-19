import React from 'react';
import Dropzone from '../dropzone/dropzone_component';
import Card from '../card/cardComponent';

import './column_styles.scss';

function Coluna({
  id,
  title,
  isEditing,
  children,
  editar,
  renomear,
  addCard,
  deletarColuna,
  cardItems,
}) {
  return (
    <div className="column" id={id}>
      {isEditing ? <input type="text" onKeyDown={renomear} /> : <h4 onClick={editar}>{title}</h4>}
      <Dropzone id={id} class_name="dropzone">
        {children}
      </Dropzone>
      {/* <Card {...cardItems} /> */}
      <button type="button" onClick={addCard}>
        + Task
      </button>
      <button type="button" onClick={deletarColuna}>
        X
      </button>
    </div>
  );
}

export default Coluna;
