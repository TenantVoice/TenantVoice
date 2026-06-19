import { useNavigate } from "react-router-dom";
import { updateUsername } from "../adapters/user-adapter";

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const [user, error] = await updateUsername(Object.fromEntries(formData));
    if (error?.cause > 400 && error?.cause < 500) {
      setCurrentUser(null);
      return navigate('/');
    }
    setCurrentUser(user);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h2 className="text-lg font-semibold text-white mb-3">Update Username</h2>
      <div className="mb-3">
        <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-1">
          New Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder={`Current: ${currentUser.username}`}
          className="w-full rounded border border-gray-600 bg-oxford text-white px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-electric placeholder-slate-500"
        />
      </div>
      <input type="hidden" name="id" value={currentUser.id} />
      <button
        type="submit"
        className="w-full py-2 px-4 rounded-lg bg-electric hover:bg-indigo-700 text-white font-medium transition-colors"
      >
        Update Username
      </button>
    </form>
  );
}
