import GlobalStyles from './styles/globalStyles'
import img from './assets/logo-github.png'
import { useState } from 'react'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Repository } from './components/Repository'

function App() {
  function handleClick() {
    const user = fetch(`https://api.github.com/users/${input}`)
    .then(response => response.json())
    .then(json => setuserData(json))

    return user
  }

  const [input, setInput] = useState('');
  const [userData, setuserData] = useState<any>(null);

  localStorage.setItem('user', input);

  return (
    <div>
      <GlobalStyles />
      {!userData ? (
        <div className="container">
          <img src={img} alt="" />
          <input
            value={input}
            onChange={event => {
              setInput(event.currentTarget.value)
            }}
            type="text"
            placeholder="Enter user name"
          />
          <button onClick={handleClick} type="submit">
            Search
          </button>
        </div>
      ) : (
        <>
          <Header />
          <Profile 
          name={userData.name}
          avatar_url={userData.avatar_url} 
          login={userData.login} 
          location={userData.location}
          company={userData.company}
          followers={userData.followers}
          following={userData.following}
          public_repos={userData.public_repos}
          />
          <Repository/>
        </>
      )}
    </div>
  )
}

export default App
