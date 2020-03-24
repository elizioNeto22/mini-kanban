import { v4 as uuidv4 } from 'uuid';
export const cardModel = (colunaId) => ({
  columnId: colunaId,
  id: uuidv4(),
  cardTask: 'clique para adicionar tarefa',
  isEditing: false,
});

export const columnModel = () => ({
  id: uuidv4(),
  title: 'click para nomear',
  isEditing: false,
  cards: [],
});
