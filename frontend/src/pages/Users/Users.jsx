import { useEffect, useState } from "react";
import { getAllUsers } from "../../adapters/user-adapter";
import UserLink from "../../components/UserLink";
import SiteHeadingAndNav from "../../components/SiteHeadingAndNav";
import FlyoutNav from "../../components/FlyoutNav";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return <>
    <FlyoutNav />
    <h1>Users</h1>
    <ul>
      {
        users.map((user) => <li key={user.id}><UserLink user={user} /></li>)
      }
    </ul>
  </>;
}
