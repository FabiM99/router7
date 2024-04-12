import { Route, Routes } from "react-router-dom";
import { GitHubUserList } from "./GitHubUserList";
import { ShowGitHubUser } from "./ShowGitHubUser";

export function App(){
    return(
        <div>
           <Routes>
            <Route path={"users"} element={<GitHubUserList/>}/>
            <Route index element={<p>Add a user and select it!!</p>}/>
            <Route path={"users/:username"} element={<ShowGitHubUser/>}/>
           </Routes>
        </div>
    )
}