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
  handleChange,
  addCard,
  deletarColuna,
  // renderCards,
}) {
  return (
    <div className="column" id={id}>
      <input type="text" value={title} name={title} disabled onChange={handleChange} />

      <div onClick={editar} className="options-container">
        <input type="checkbox" className="options-trigger hidden" id={id} />
        <label className="options-wrapper" htmlFor={id}>
          <div className="dots">
            <div className="options-content">
              <ul>
                <li onClick={renomear}>{'Renomear'}</li>
                <li>{'Excluir'}</li>
              </ul>
            </div>
          </div>
        </label>
      </div>

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
