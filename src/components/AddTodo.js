import { useState } from 'react';

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState('');

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Task :
      <input className='border-2 ml-2 mb-2 p-2' value={task} placeholder="Add New Task" onChange={handleNewTask} />
    </form>
  );
};

export default AddTodo;