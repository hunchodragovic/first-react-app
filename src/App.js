import "./App.css";
function App() {
  const tasks = [
    { id: 1 , title: "Practice Gratitude"},
    { id: 2 , title: "Challenge Negative Thoughts"},
    { id: 3 , title: "Pray to allah"},
    { id: 4 , title: "Exercise Regularly"},
    { id: 4 , title: "Social Life"}
   
  ]

  const myTaskslist = tasks.map((task)=>{
return (<li key={task.id}>{task.title}</li>)

  })
  console.log(myTaskslist);
  
  return (
    <div className="App">
     
<ul>
  {myTaskslist}

</ul>
    </div>
  );
}

export default App;
