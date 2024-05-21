// testing new form style:
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/post-adapter";
import PostWidget from "./postWidget";

export default function ReportForm({ setPosts }) {
    const { currentUser } = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState('');
    const [category, setCategory] = useState('Infestation');
    const [picture, setPicture] = useState('')
    const [problem_duration, setProblem_duration] = useState('');
    const [description, setDescription] = useState('');
    const currentUserId = currentUser?.id;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const postData = { category, description, picture, user_id: currentUserId, problem_duration };
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

    const handleImageUpload = (url) => {
        setPicture(url);
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
                    <option value="heating">Heating Issue</option>
                    <option value="structural">Structural Damage</option>
                    <option value="mold">Mold</option>
                    <option value="plumbing">Plumbing Issue</option>
                    <option value="electical">Electical Issue</option>
                    <option value="security">Security Concern</option>
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
                <PostWidget onUpload={handleImageUpload} />
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
