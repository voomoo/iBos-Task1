import {useState} from "react"
import DataTable from "./components/DataTable"
import InputForm from "./components/InputForm"

function App() {
  const [data, setData] = useState(
    [
      {
          name: 'Rakibul Hasan',
          email: 'rakib.7896@gmail.com'
      },
      {
          name: 'Some-other Hasan',
          email: 'some-other@gmail.com'
      },
      {
          name: 'No One',
          email: 'none@gmail.com'
      },
  ]
  )
  return (
    <div className="App">
      <InputForm setData = {setData} data = {data}/>
      <DataTable setData = {setData} data = {data}/>
    </div>
  );
}

export default App;
