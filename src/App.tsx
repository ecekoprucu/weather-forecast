import './App.css'
import { ChartArea } from './components/ChartArea'
import { SearchArea } from './components/SearchArea'
import { DataProvider } from './context/dataContext'
function App() {
  return (
      <DataProvider>
        <div className='container'>
          <SearchArea />
          <ChartArea />
        </div>
      </DataProvider>
  )
}

export default App
