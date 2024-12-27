import { use } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())

export default function UseExample() {
  // Use "use" method with fetch or context, no need useState, useEffect
  const users = use(fetchUsers)

  return (
    <>
      <ul className="collection">
        {users.map((user) => (
          <li key={user.id} className="collection-item">
            {user.name}
          </li>
        ))}
      </ul>
    </>
  )
}
