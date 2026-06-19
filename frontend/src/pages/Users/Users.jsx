import { useEffect, useState } from "react";
import { getAllUsers } from "../../adapters/user-adapter";
import FlyoutNav from "../../components/FlyoutNav";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <ChakraProvider>
      <div className="min-h-screen bg-oxford">
        <FlyoutNav />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Community Members</h1>
          <p className="text-slate-400 mb-8">Connect with NYCHA tenants across the five boroughs.</p>

          {users.length === 0 ? (
            <p className="text-slate-400 text-center mt-16">No members found.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map((user) => (
                <li key={user.id}>
                  <Link
                    to={`/users/${user.id}`}
                    className="flex items-center gap-4 bg-shade hover:bg-eggBlue/20 border border-gray-700 hover:border-eggBlue rounded-xl p-4 transition-all group"
                  >
                    <Avatar name={user.username} src={user.picture} size="md" />
                    <div className="min-w-0">
                      <p className="text-white font-semibold truncate group-hover:text-lightBlue transition-colors">
                        {user.username}
                      </p>
                      {user.location && (
                        <p className="text-slate-400 text-sm truncate">{user.location}</p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </ChakraProvider>
  );
}
