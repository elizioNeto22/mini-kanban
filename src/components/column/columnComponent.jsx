import React from 'react';
import Dropzone from '../dropzone/dropzone_component';
// import Card from '../card/cardComponent';

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
  // renderCards,
}) {
  return (
    <div className="column" id={id}>
      <input type="text" value={title} disabled onClick={editar} />
      <Dropzone id={id} class_name="dropzone">
        {children}
      </Dropzone>
      {/* <Card renderCards={renderCards} /> */}
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
