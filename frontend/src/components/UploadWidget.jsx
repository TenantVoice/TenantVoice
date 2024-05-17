import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

//pass in a prop for when someone uploads an image

const UploadWidget = ({ onUpload }) => {
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
        <button
            onClick={() => widgetRef.current.open()}
            className="flex items-center justify-center w-[5rem] h-[5rem] rounded-full bg-blue-500 text-white hover:bg-blue-700"
        >
            <FontAwesomeIcon icon={faCamera} />
        </button>
    );
}

export default UploadWidget;