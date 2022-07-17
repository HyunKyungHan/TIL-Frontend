import {useState} from "react";
function App() {
  const [ toDo, setToDo ] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");   //toDo값 refresh
    setToDos((currentArray) => [toDo, ...currentArray]) //ToDos의 element는 toDo의 element + currentArray의 element
  };
  console.log(toDo);
  //JSX에 js를 넣을 땐 {}를 사용해야함을 잊지 말자!
  return (
    <div>
      <h1> My To Dos ({toDos.length}) </h1> 
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
      <button>Add To Do</button>
      <hr />
      <ul>
      {toDos.map((item) => <li>{item}</li>)}
      </ul>
      </form>    
    </div>
  );
}

export default App;
