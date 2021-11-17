import { RepositoryItem } from "./RepositoryItem"

import "../styles/repositories.scss"
import { useEffect, useState } from "react"

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github/unform/unform",
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories &&
          repositories.map((repo) => (
            <RepositoryItem key={repo.id} repository={repo} />
          ))}
      </ul>
    </section>
  )
}
