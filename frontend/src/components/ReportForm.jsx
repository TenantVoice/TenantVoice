import { createPost } from "../adapters/post-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { useContext, useState } from "react";

export default function ReportForm({ setPosts }) {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState('');
    const [category, setCategory] = useState('Infestation')
    const [problem_duration, setProblem_duration] = useState()
    const [description, setDescription] = useState()
    const currentUserId = currentUser?.id

    // console.log(currentUser)
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(category, description, problem_duration, currentUserId)
        const [newPost, error] = await createPost({ category, description, currentUserId });
        if (!category || !problem_duration || !currentUser.id) return setErrorText(error.message);
        if (error) return setErrorText(error.message);

        event.target.reset();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setErrorText('');
        if (name === 'category') setCategory(value);
        if (name === 'problem_duration') setProblem_duration(value);
        if (name === 'description') setDescription(value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <aside id="default-sidebar" className="fixed top-10 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800" aria-label="Sidebar">
                <div className="h-full px-4 py-6 overflow-y-auto">
                    <ul className="space-y-4">
                        <li>
                            <div className="flex flex-col items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <label htmlFor="category" className="font-medium">Complaint category:</label>
                                <select name="category" id="category" className="mt-1 w-full rounded-md" onChange={handleChange}>
                                    <option value="infestation">Infestation</option>
                                    <option value="heating">Heating</option>
                                    <option value="structural">Structural</option>
                                    <option value="mold">Mold</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <label htmlFor="problem_duration" className="font-medium">Length of problem (in weeks):</label>
                                <input type="number" id="problem_duration" name="problem_duration" className="mt-1 w-full rounded-md" onChange={handleChange} />
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <label htmlFor="file_input" className="block font-medium">Upload picture</label>
                                <input type="file" id="file_input" name="file_input" className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col items-start p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <label htmlFor="description" className="font-medium">Description:</label>
                                <textarea id="description" name="description" className="mt-1 w-full h-32 rounded-md" placeholder="Describe your issue in detail." onChange={handleChange}></textarea>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-center items-center p-2 w-full">
                                <button type="submit" className="w-1/2 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Submit</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </form>
    );
}

