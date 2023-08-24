import {useState, React, useEffect} from 'react';
const Todo = ()=>{
  const [formdata, setFormDate] =useState ({goal:"", by:""});
  const changeHandler =(e)=>{
    setFormDate({...formdata,[e.target.name]: e.target.value})
    // console.log(formdata)
  }
  const [toggle, setToggle] = useState(false) ;

  const handleSubmit =(e)=>{
    e.preventDefault();
    setFormDate({...formdata,[e.target.name]: e.target.value})
    console.log(`The Goal is to ${formdata.goal} by ${formdata.by}`)
    setToggle(!toggle)
  }
  
  useEffect(()=>{
    document.title = toggle ? "TODO" : "Home Decor"
  });
  return(
    <div className='m-10 flex flex-col w-48'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name='goal'
          value={formdata.goal}
          placeholder='Goal' 
          className='border rounded-md p-2'
          onChange={changeHandler}></input>

        <input 
          type="date"
          name='by'
          value={formdata.by}
          placeholder='By' 
          className='border rounded-md p-2 w-48'
          onChange={changeHandler}></input>

          <button 
            className='border rounded-md p-2 bg-slate-600 text-white font-bold'>
            Submit
          </button>
          {toggle && <p>Good Luck</p>}
      </form>
      
    </div>
  )
}

export default Todo