/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoCard from './TodoCard';
import './TodoList.css';

export default function TodoList() {
  const [listTodo, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setItems() {
      const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
      if (listTodos && listTodos.length !== 0) {
        setList(listTodos);
        setLoading(false);
      } else {
        setList([]);
      }
    }
    setItems();
  }, [listTodo]);

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return;
    const items = Array.from(listTodo);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    localStorage.setItem('listTodos', JSON.stringify(items));
  };

  return (
    !loading ? (
      <DragDropContext onDragEnd={ handleOnDragEnd }>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              { ...provided.droppableProps }
              ref={ provided.innerRef }
            >
              {listTodo && listTodo.map(({ content, situation }, index) => (
                <Draggable key={ index } draggableId={ `${index}` } index={ index }>
                  {(provided) => (
                    <li
                      ref={ provided.innerRef }
                      { ...provided.draggableProps }
                      { ...provided.dragHandleProps }
                    >
                      <TodoCard
                        content={ content }
                        situation={ situation }
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>)
      : <span> </span>
  );
}
