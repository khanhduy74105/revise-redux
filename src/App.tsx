import TodoEntry from "./components/TodoEntry";
import TodoTagList from "./components/TodoTagList";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <div className="w-[600px] h-screen bg-blue-300 p-4 flex flex-col">
        <h1 className="w-full text-3xl font-bold my-2 border-b-2 border-white">Todos list redux</h1>
        <TodoEntry />
        <TodoTagList />
      </div>
    </div>
  );
}

export default App;
