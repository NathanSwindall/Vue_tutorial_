import axios from "axios";

//To run this is type script you will use the tsc command to compile
// Then you use node
// To run in one command you will use ts-node fileName
// install @types/node
// npm install -g typescript ts-node

const url = "https://jsonplaceholder.typicode.com/todos/2";

axios.get(url).then((response) => {
  console.log(response.data);
});

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  //const ID = todo.ID; // typescript will mark this wrong

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};
