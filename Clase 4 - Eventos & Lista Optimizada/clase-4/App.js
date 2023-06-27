import MainScreen from './src/Screens/MainScreen';

const taskList = [
  {
    id: 1,
    task: "Regar plantas",
    completed: false
  },
  {
    id: 2,
    task: "Lavar platos",
    completed: false
  },{
    id: 3,
    task: "Limpiar el baño",
    completed: false
  },{
    id: 4,
    task: "Ir a comprar carne",
    completed: false
  },{
    id: 5,
    task: "Comprar carbón",
    completed: false
  },
]

export default function App() {
  return (
    <MainScreen taskList = {taskList}/>
  );
}
