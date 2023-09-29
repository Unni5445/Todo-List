import React from 'react'

export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  const handleEdit = (id)=>{
    const editTask = tasklist.find(todo => todo.id === id);
    setTask(editTask);
  }

  const handleDelete = (id)=>{
    const updateTasklist = tasklist.filter(todo => todo.id !== id);
    setTasklist(updateTasklist);
  }

  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">TODO</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={()=>setTasklist([])}>Clear All</span>
      </p>
      <ul>
        {
          tasklist.map((task)=>(
            <li key={task.id}> 
              <p>
                <span className='name'>{task.name}</span>
                <span className='time'>{task.time}</span>
              </p>
              <i onClick={()=>handleEdit(task.id)} className="bi bi-pencil-square"></i>
              <i onClick={()=>handleDelete(task.id)} className="bi bi-trash"></i>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
