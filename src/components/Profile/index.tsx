import { InfoWrapper, ProfileWrapper, RepositoryWrapper } from './style'
import locationIcon from '../../assets/icons/location-icon.svg'
import companyIcon from '../../assets/icons/ic_sharp-home-work.svg'
import followersIcon from '../../assets/icons/people-team-icon.svg'
import followingIcon from '../../assets/icons/people-team-icon-roxo.svg'
import repositoryIcon from '../../assets/icons/repositories-icon.svg'
import { MapPin, UsersThree } from 'phosphor-react'

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
              <p>
                <MapPin size={19} color="#8752CC" weight="fill" />
                {location}
              </p>
              <p>
                <img src={companyIcon} alt="" />
                {company}
              </p>
              <p>
                <UsersThree size={19} color="#8752CC" />
                {followers}
              </p>
              <p>
                <UsersThree size={19} color="#8752CC" weight="fill" />
                {following}
              </p>
            </InfoWrapper>
          </div>

          <RepositoryWrapper>
            <div>
              <p className="titulo-repo">Total Repositorios</p>
              <div className="repository">
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
