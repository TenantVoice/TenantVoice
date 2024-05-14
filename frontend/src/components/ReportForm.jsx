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

    return <form onSubmit={handleSubmit} aria-labelledby="create-report-post">
        <h2>Report Form</h2>
        <label htmlFor="category">Complaint category:</label>
        <select name="category" id="category">
            <option value="infestation">Infestation</option>
            <option value="heating">Heating</option>
            <option value="structural">Structural</option>
            <option value="mold">Mold</option>
        </select>

        <label htmlFor="problem_duration">Length of problem (in weeks):</label>
        <input type="number" id="problem_duration" name="problem_duration" />

        <label htmlFor="previously_reported">Previously reported:</label>
        <input type="checkbox" id="previously_reported" name="previously_reported" />

        <label htmlFor="building_number">Building #:</label>
        <input type="number" id="building_number" name="building_number" />

        <label htmlFor="photo">Photo:</label>
        <input type="text" id="photo" name="photo" />

        <label htmlFor="description">About the problem:</label>
        <input type="text" id="description" name="description" />

        <button>Submit</button>

    </form>
}