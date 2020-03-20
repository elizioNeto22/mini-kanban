import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { cardModel, columnModel } from '../../assets/models/models';
import Card from '../card/cardComponent';
import Coluna from '../column/columnComponent';

import './kanban_styles.scss';

class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colunas: [
        {
          id: uuidv4(),
          title: 'A TESTAR',
          isEditing: 'disabled',
          // isEditing: 'active',
          size: 0,
          cards: [],
        },
        {
          id: uuidv4(),
          title: 'ANDAMENTO',
          isEditing: 'disable',
          size: 0,
          cards: [],
        },
      ],
      nomeColuna: '',
    };
  }

  renderColunas = () =>
    this.state.colunas.map((coluna) => {
      const { id } = coluna;
      return (
        <div key={id}>
          <Coluna
            {...coluna}
            editar={this.editarColuna}
            renomear={this.renomearColuna}
            addCard={this.addCard}
            deletarColuna={this.deletarColuna}
            handleChange={this.handleChange}
          >
            {this.renderCards(coluna)}
            {/* {coluna.cards.map((card) => card.columnId === coluna.id ? <Card {...card} /> : null)} */}
          </Coluna>
        </div>
      );
    });

  // Refatorar: handleChange e renomear usar praticamente o mesmo código
  // FUNÇÕES COLUNA
  check_open_edit = () => {
    let edit = 'disabled';
    this.state.colunas.filter(({ isEditing }) => {
      // let check = edit
      if (isEditing === 'active') {
        window.alert('Please finish editing you column title');
        // console.log('active_edition');
        edit = 'active';
      }
      return edit;
    });
    return edit;
  };

  editarColuna = (e) => {
    const colunaId = e.target.parentNode.id;
    let novaLista = [];
    const openEdition = this.check_open_edit();
    openEdition === 'active'
      ? console.log('não pode editar')
      : (novaLista = this.state.colunas.filter((coluna) => {
          if (coluna.id === colunaId) {
            coluna.isEditing = 'active';
          }
          return coluna;
        }));
    this.setState({ colunas: novaLista });
  };

  renomearColuna = (e) => {
    const element =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0];
    element.disabled = false;
  };

  handleChange = (e) => {
    this.setState({ nomeColuna: e.target.value });
    const colunaId = e.target.parentNode.id;
    const novaLista = this.state.colunas.filter((coluna) => {
      if (coluna.id === colunaId) {
        coluna.title = e.target.value;
      } else if (e.key === 'Enter') {
        coluna.isEditing = 'disabled';
        e.target.disabled = true;
      }
      return coluna;
    });
    this.setState({ colunas: novaLista });
  };
  addColuna = (e) => {
    // e.preventDefault()
    const novaColuna = this.state.colunas;
    novaColuna.push(columnModel());
    this.setState((state) => ({ colunas: novaColuna, nomeColuna: '' }));
  };

  deletarColuna = (e) => {
    // e.preventDefault()
    const colunaId = e.target.parentNode.id;
    const novaColuna = this.state.colunas.filter(({ id }) => id !== colunaId);
    this.setState({ colunas: novaColuna });
  };

  // FUNÇÕES CARDS
  renderCards = (coluna) =>
    coluna.cards.map((card) =>
      card.columnId === coluna.id ? <Card key={card.id} {...card} /> : null
    );

  addCard = (e) => {
    const colunaId = e.target.parentNode.id;
    const novaColuna = this.state.colunas.filter((coluna) =>
      coluna.id === colunaId ? coluna.cards.push(cardModel(colunaId)) : coluna
    );
    this.setState((state) => ({ colunas: novaColuna }));
  };

  // deleteCard = (e) => {

  // }

  render() {
    return (
      <div className="kanban-container">
        {this.renderColunas()}
        {/* <input type="text" value={this.state.nomeColuna} onChange={this.handleChange}/> */}
        <button type="submit" onClick={this.addColuna}>
          Add Coluna{' '}
        </button>
      </div>
    );
  }
}

export default Kanban;
