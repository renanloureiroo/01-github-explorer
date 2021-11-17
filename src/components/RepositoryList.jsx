import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'


export const RepositoryList = () => {
  return (
    <section className='repository-list'>
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository="unform" />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}