import { useEffect, useState } from 'react'
import { RepositoryWrapper } from './style'
import startIcon from '../../assets/icons/star-icon.svg'
import forkIcon from '../../assets/icons/fork-icon.svg'
import languageIcon from '../../assets/icons/linguage-icon.svg'

type RepositoryProps = {
  key: number
  name: string
  description: string
  forks_count: number
  stargazers_count: number
  language: string
}

export function Repository() {
  const user = localStorage.getItem('user')

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(json => setRepositoryData(json))
  }, [user])

  const [repositoryData, setRepositoryData] = useState<RepositoryProps[]>([])

  console.log(repositoryData, setRepositoryData)

  return (
    <>
      <RepositoryWrapper>
        {repositoryData.map(repo => {
          return (
            <li className="repo-wrapper" key={repo.key}>
              <p className="repo-titulo">{repo.name}</p>
              <p className="repo-desc">{repo.description}</p>

              <div className="repo-infos">
                <ul>
                  <li>
                    <img src={startIcon} alt="" />
                    {repo.stargazers_count}
                  </li>
                  <li>
                    <img src={forkIcon} alt="" />
                    {repo.forks_count}
                  </li>
                  <li>
                    <img src={languageIcon} alt="" />
                    {repo.language}
                  </li>
                </ul>
              </div>
            </li>
          )
        })}
      </RepositoryWrapper>
    </>
  )
}
