import React from 'react';
import Dropzone from '../dropzone/dropzone_component';
// import Card from '../card/cardComponent';

import './column_styles.scss';

function Coluna({ id, title, isEditing, children, edit, rename, addCard, deleteColumn }) {
  return (
    <div className="column" id={id}>
      {isEditing ? (
        <input className="column-title" type="text" onKeyDown={rename} />
      ) : (
        <h4 className="column-title">{title}</h4>
      )}

      <div className="options-container">
        <input type="checkbox" className="options-trigger hidden" id={id} />
        <label className="options-wrapper" htmlFor={id}>
          <div className="dots">
            <div className="options-content">
              <ul>
                <li onClick={edit}>{'Renomear'}</li>
                <li onClick={deleteColumn}>{'Excluir'}</li>
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
    </div>
  );
}

export default Coluna;
