import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../../contexts/current-user-context";
import { getUser } from "../../adapters/user-adapter";
import { logUserOut } from "../../adapters/auth-adapter";
import UpdateUsernameForm from "../../components/UpdateUsernameForm";
import FlyoutNav from "../../components/FlyoutNav";
import { Avatar, ChakraProvider } from "@chakra-ui/react";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };
    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;

  if (errorText) return (
    <div className="min-h-screen bg-oxford flex items-center justify-center">
      <p className="text-red-400 text-lg">{errorText}</p>
    </div>
  );

  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;
  const profileEmail = isCurrentUserProfile ? currentUser.email : userProfile.email;

  return (
    <ChakraProvider>
      <div className="min-h-screen bg-oxford">
        <FlyoutNav />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-28 pb-12">
          {/* Profile card */}
          <div className="bg-shade rounded-2xl border border-gray-700 overflow-hidden">
            {/* Header banner */}
            <div className="h-24 bg-gradient-to-r from-electric to-eggBlue" />

            <div className="px-6 pb-6">
              {/* Avatar */}
              <div className="-mt-12 mb-4">
                <Avatar
                  name={profileUsername}
                  src={userProfile.picture}
                  size="xl"
                  className="border-4 border-shade"
                />
              </div>

              <h1 className="text-2xl font-bold text-white">{profileUsername}</h1>
              <p className="text-slate-400 mt-1">{profileEmail}</p>

              {userProfile.location && (
                <p className="text-slate-400 text-sm mt-1">
                  <span className="text-lightBlue font-medium">Location:</span> {userProfile.location}
                </p>
              )}

              {isCurrentUserProfile && (
                <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
                  <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
