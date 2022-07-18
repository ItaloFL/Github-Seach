import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './components/User'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
