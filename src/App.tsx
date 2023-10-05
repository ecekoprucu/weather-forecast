import ReportArea from 'components/ReportArea'
import './App.css'
import { SearchArea } from 'components/SearchArea'
import { DataProvider } from 'context/dataContext'

function App() {
  return (
      <DataProvider>
        <div className='container'>
          <SearchArea />
          <ReportArea />
        </div>
      </DataProvider>
  )
}

export default App
