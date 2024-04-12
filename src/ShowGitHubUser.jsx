import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

export function ShowGitHubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {username} = useParams()

  useEffect(() => {
    const fetchGitHub = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHub();
    }
  }, [username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {data && <h1>{data.login}</h1>}
      {data && <img src={data.avatar_url} alt={data.login} />}
    </div>
  );
}
