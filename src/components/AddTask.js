import React from 'react'

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id){
      const date =new Date();
      const updateTask = tasklist.map((todo)=>(
        todo.id === task.id ? 
        {id : task.id ,name : task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : 
        {id: todo.id ,name : todo.name, time : todo.time}
      ));
      setTasklist(updateTask);
      setTask({})

    }else{
      const date = new Date();
      const newtask = {
        id : date.getTime(),
        name : e.target.task.value,
        time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newtask]);
      setTask({})
    }
  }
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name || ""} autoComplete='off' maxLength="25" placeholder='Add Task' onChange={e => setTask({...task,name: e.target.value})} />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}
