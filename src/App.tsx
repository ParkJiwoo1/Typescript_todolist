import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

/*let name: string = "park";
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "jiwoo",
  age: 27,
};

let lotsOfPeople: Person[];

let printName: (name: string) => void;
*/
/*interface Person{
  name:string,
  age?:number
}
interface Guy extends Person{    //interface 종속 방식
  peofession : string;
}

type X={
  a:string;
  b:number;
}
type Y=X&{
  c:string;
  d:number;
}
let y:Y={     //type 종속 방식
  a:'fef',
  b:11,
  c:'sefe',
  d:33
}*/

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
    setTodo("");
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">TodoList</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
