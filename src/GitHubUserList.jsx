import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function GitHubUserList() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("https://api.github.com/users");
            const usersJson = await response.json();
            setUsers(usersJson)
            
        } catch (error) {
            console.error(error);
        }
    }

   useEffect(()=> {
    fetchData()
   },[])

    return (
        <div>
            <h2>Users link:</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}> <Link to={`/users/${user.login}`}>{user.avatar_url}......Username: {user.login}</Link> </li>
                ))}
            </ul>
            
           
        </div>
    );
}
