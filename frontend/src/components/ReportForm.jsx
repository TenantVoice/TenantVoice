import { createPost } from "../adapters/post-adapter"


export default function ReportForm({ setPosts }) {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const [newPost, error] = await createPost(Object.fromEntries(formData));
        // we need to update the createPost adapter to include all of the columns

        if (error?.cause > 400 && error?.cause < 500) {
            setPost(null);
        }

        // setPosts(newPost);
        // I commented this out because we might need to use the spread operator to add 
        // `newPost` to the `posts` state, but I don't remember how to do that
        event.target.reset();
    }

    return (

        <form>
            <aside id="default-sidebar" class="fixed top-10 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="ms-3">
                                    <label htmlFor="category">Complaint category:</label>
                                    <select name="category" id="category">
                                        <option value="infestation">Infestation</option>
                                        <option value="heating">Heating</option>
                                        <option value="structural">Structural</option>
                                        <option value="mold">Mold</option>
                                    </select>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">
                                    <label htmlFor="problem_duration">Length of problem (in weeks):</label>
                                    <input type="number" id="problem_duration" name="problem_duration" className="w-[10rem] rounded-full" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">
                                    <label htmlFor="building_number">Building #:</label>
                                    <input type="number" id="building_number" name="building_number" className="w-[10rem] rounded-full" />
                                </span>
                                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap border-4">
                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                    </label>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">
                                    <label htmlFor="description">About the problem:</label>
                                    <input type="text" id="description" name="description" className="w-[10rem] rounded-full" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="flex-1 ms-3 whitespace-nowrap">
                                    <button className="">Submit</button>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </form>
    )
}

// <form onSubmit={handleSubmit} aria-labelledby="create-report-post" className="">
//         <h2 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >Report Form</h2>
// <label htmlFor="category">Complaint category:</label>
// <select name="category" id="category">
//     <option value="infestation">Infestation</option>
//     <option value="heating">Heating</option>
//     <option value="structural">Structural</option>
//     <option value="mold">Mold</option>
// </select>

// <label htmlFor="problem_duration">Length of problem (in weeks):</label>
// <input type="number" id="problem_duration" name="problem_duration" className="w-[10rem]" />

//         <label htmlFor="previously_reported">Previously reported:</label>
//         <input type="checkbox" id="previously_reported" name="previously_reported" />

// <label htmlFor="building_number">Building #:</label>
// <input type="number" id="building_number" name="building_number" className="w-[10rem]" />

// <label htmlFor="photo">Photo:</label>
// <input type="text" id="photo" name="photo" className="w-[10rem]" />

// <label htmlFor="description">About the problem:</label>
// <input type="text" id="description" name="description" className="w-[10rem]" />

// <button className="">Submit</button>

//     </form>