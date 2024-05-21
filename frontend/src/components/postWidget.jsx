import { useEffect, useRef } from "react";


//pass in a prop for when someone uploads an image

const PostWidget = ({ onUpload }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dxkad3lro',
            uploadPreset: 'TenantVoice_asset',
            maxFiles: 1
        }, function (error, result) {
            if (result.event == 'success') {
                onUpload(result.info.secure_url)
            }
        });
    }, []);

    return (
        <button type="button"
            onClick={() => widgetRef.current.open()}
            className="flex flex-col items-start p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
            <span h className="block font-medium bg-slate-900 text-white py-2 px-2 rounded-full">Upload picture</span>
        </button>
    );
}

export default PostWidget;