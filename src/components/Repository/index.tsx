import { useEffect, useState } from 'react'
import { RepositoryWrapper } from './style'
import forkIcon from '../../assets/icons/fork-icon.svg'
import { File, GitFork, Star } from 'phosphor-react'

type RepositoryProps = {
  id: number
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

  return (
    <>
      <RepositoryWrapper>
        {repositoryData.map(repo => {
          return (
            <li className="repo-wrapper" key={repo.id}>
              <p className="repo-titulo">{repo.name}</p>
              <p className="repo-desc">{repo.description}</p>

              <div className="repo-infos">
                <ul>
                  <p>
                    <Star size={19} color="#8752CC" weight="fill" />
                    {repo.stargazers_count}
                  </p>
                  <p>
                    <GitFork size={21} color="#8752CC" weight="fill" />
                    {repo.forks_count}
                  </p>
                  <p>
                    <File size={19} color="#8752CC" weight="fill" />
                    {repo.language}
                  </p>
                </ul>
              </div>
            </li>
          )
        })}
      </RepositoryWrapper>
    </>
  )
}
