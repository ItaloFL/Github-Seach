import { InfoWrapper, ProfileWrapper, RepositoryWrapper } from './style'
import locationIcon from '../../assets/icons/location-icon.svg'
import companyIcon from '../../assets/icons/ic_sharp-home-work.svg'
import followersIcon from '../../assets/icons/people-team-icon.svg'
import followingIcon from '../../assets/icons/people-team-icon-roxo.svg'
import repositoryIcon from '../../assets/icons/repositories-icon.svg'

type ProfileProps = {
  name: string
  login: string
  avatar_url: string
  location: string
  company: string
  followers: number
  following: number
  public_repos: number
}

export function Profile({
  name,
  login,
  avatar_url,
  location,
  company,
  followers,
  following,
  public_repos
}: ProfileProps) {
  return (
    <>
      <div>
        <ProfileWrapper>
          <div>
            <img className="image_user" src={avatar_url} alt="" />
          </div>
          <div className="data-user">
            <p className="name-user">{name}</p>
            <p>@{login}</p>
            
              <InfoWrapper>
                <li>
                  <img src={locationIcon} alt="" />
                  {location}
                </li>
                <li>
                  <img src={companyIcon} alt="" />
                  {company}
                </li>
                <li>
                  <img src={followersIcon} alt="" />
                  {followers}
                </li>
                <li>
                  <img src={followingIcon} alt="" />
                  {following}
                </li>
            </InfoWrapper>
          </div>

          <RepositoryWrapper>
            <div>
              <p className='titulo-repo'>Total Repositorios</p>
              <div className='repository'>
                <img src={repositoryIcon} alt="" />
                <p>{public_repos}</p>
              </div>
            </div>
          </RepositoryWrapper>
        </ProfileWrapper>
      </div>
    </>
  )
}
