
import './App.css';
import { useState } from 'react'

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  const [deletTodo, setDelete]=useState([])
  return (
    <div className="app">
      <div className="mainHeading">

        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event) => setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      
      <div>
      <div className='compleatedTask'>
        <div className='compleatmain'>
          <h2>Task Finish</h2>

        </div>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              
              <div className="todos">
              <div className="todo">
                <div className="left">
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2=null

                    }
                    return obj2
                  }))
                }} className="fas fa-times"></i>
                </div>
              </div>
            </div>)
          }
          return null
        })
        }
        

      </div>
      <div className='ongoingtask'>
        <div className='ongoingmain'>
          <h2>On Going</h2>
        </div>
        <div>
        {toDos.map((obj) => {
          
          if(obj.status===false){
        return (
          


          <div className="todos">
            <div className="todo">
              <div className="left">
                <input onChange={(event) => {
                  console.log(event.target.checked)
                  console.log(obj)
                  setTodos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = event.target.checked
                    }
                    return obj2


                  }))

                }} value={obj.status} type="checkbox" name="" id="" />

                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>setDelete([...deletTodo,...toDos,])} className="fas fa-times"></i>
              </div>
            </div>
          </div>)
      }
    return null})
      }
        </div>
      </div>
      <div className='deletetask'>
        <div className='deletemain'>
          <h2>Deleted Task</h2>
          {deletTodo.map((obj)=>{
            if(obj.status===false){
              return (
                <h1>{obj.text}</h1>
              )
            }
            return null
          })}

        </div>

      </div>
      </div>
    </div>
  );
}

export default App;
