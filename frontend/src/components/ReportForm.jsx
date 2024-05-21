// testing new form style:
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/post-adapter";

export default function ReportForm({ setPosts }) {
    const { currentUser } = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState('');
    const [category, setCategory] = useState('Infestation');
    const [problem_duration, setProblem_duration] = useState('');
    const [description, setDescription] = useState('');
    const currentUserId = currentUser?.id;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const postData = { category, description, user_id: currentUserId, problem_duration };
        const [newPost, error] = await createPost(postData);
        if (!category || !problem_duration || !currentUser.id) return setErrorText("Missing information");
        if (error) {
            setErrorText(error.message);
            return;
        }
        setPosts(prevPosts => [newPost, ...prevPosts]);
        setDescription('');
        setProblem_duration('');
        setCategory('Infestation');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setErrorText('');
        if (name === 'category') setCategory(value);
        if (name === 'problem_duration') setProblem_duration(value);
        if (name === 'description') setDescription(value);
    };

    return (
        <form onSubmit={handleSubmit} className="fixed left-4 mt-8 p-4 max-w-2xl mx-auto my-auto bg-white rounded shadow-md">
            <h1 className="text-center text-2xl font-semibold mb-4">Report a Problem</h1>
            <div className="mb-8">
                <label htmlFor="category" className="mb-1 block text-sm font-medium">Complaint category:</label>
                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                >
                    <option value="infestation">Infestation</option>
                    <option value="heating">Heating</option>
                    <option value="structural">Structural</option>
                    <option value="mold">Mold</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="problem_duration" className="mb-1 block text-sm font-medium">Length of problem (in weeks):</label>
                <input
                    type="number"
                    id="problem_duration"
                    name="problem_duration"
                    value={problem_duration}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="file_input" className="mb-1 block text-sm font-medium">Upload picture:</label>
                <input
                    type="file"
                    id="file_input"
                    name="file_input"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="mb-1 block text-sm font-medium">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    className="w-full h-32 rounded border border-gray-300 px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Describe your issue in detail."
                ></textarea>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="w-1/2 py-2 text-white bg-electric rounded hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300">Submit</button>
            </div>
            {errorText && <p className="text-red-500 text-center mt-2">{errorText}</p>}
        </form>
    );
}




// import { createPost } from "../adapters/post-adapter";
// import CurrentUserContext from "../contexts/current-user-context";
// import { useContext, useState } from "react";
// import NewPostCard from "./PostCards";

// export default function ReportForm({ setPosts }) {
//     const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
//     const [errorText, setErrorText] = useState('');
//     const [category, setCategory] = useState('Infestation')
//     const [problem_duration, setProblem_duration] = useState()
//     const [description, setDescription] = useState()
//     const currentUserId = currentUser?.id


//     // console.log(currentUser)
//     // const handleSubmit = async (event) => {
//     //     event.preventDefault();

//     //     console.log(category, description, problem_duration, currentUserId)
//     //     const [newPost, error] = await createPost({ category, description, user_id: currentUserId });
//     //     if (!category || !problem_duration || !currentUser.id) return setErrorText(error.message);
//     //     if (error) return setErrorText(error.message);

//     //     setPosts(prevPosts => [newPost, ...prevPosts])

//     //     event.target.reset();
//     // };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const postData = { category, description, user_id: currentUserId, problem_duration };
//         const [newPost, error] = await createPost(postData);
//         if (!category || !problem_duration || !currentUser.id) return setErrorText("Missing information");
//         if (error) {
//             setErrorText(error.message);
//             return;
//         }
//         setPosts(prevPosts => [newPost, ...prevPosts]);
//         setDescription('');
//         setProblem_duration('');
//         setCategory('Infestation');
//     };


//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setErrorText('');
//         if (name === 'category') setCategory(value);
//         if (name === 'problem_duration') setProblem_duration(value);
//         if (name === 'description') setDescription(value);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <aside id="default-sidebar" className="fixed top-10 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800" aria-label="Sidebar">
//                 <div className="h-full px-4 py-6 overflow-y-auto">
//                     <ul className="space-y-4">
//                         <li>
//                             <div className="flex flex-col items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                                 <label htmlFor="category" className="font-medium">Complaint category:</label>
//                                 <select name="category" id="category" className="mt-1 w-full rounded-md" onChange={handleChange}>
//                                     <option value="infestation">Infestation</option>
//                                     <option value="heating">Heating</option>
//                                     <option value="structural">Structural</option>
//                                     <option value="mold">Mold</option>
//                                 </select>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="flex flex-col items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                                 <label htmlFor="problem_duration" className="font-medium">Length of problem (in weeks):</label>
//                                 <input type="number" id="problem_duration" name="problem_duration" className="mt-1 w-full rounded-md" onChange={handleChange} />
//                             </div>
//                         </li>
//                         <li>
//                             <div className="flex flex-col items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                                 <label htmlFor="file_input" className="block font-medium">Upload picture</label>
//                                 <input type="file" id="file_input" name="file_input" className="block w-full text-sm mt-1 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
//                             </div>
//                         </li>
//                         <li>
//                             <div className="flex flex-col items-start p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
//                                 <label htmlFor="description" className="font-medium">Description:</label>
//                                 <textarea id="description" name="description" className="mt-1 w-full h-32 rounded-md" placeholder="Describe your issue in detail." onChange={handleChange}></textarea>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="flex justify-center items-center p-2 w-full">
//                                 <button type="submit" className="w-1/2 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">Submit</button>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </aside>
//         </form>
//     );
// };

