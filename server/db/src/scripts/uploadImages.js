const cloudinary = require('../config/cloudinary');

const images = ['../../images/image-bug.png', '../../mold-image-1.png']; // paths to your images
const uploadedImageUrls = [];

const uploadImages = async () => {
    for (const image of images) {
        try {
            const result = await cloudinary.uploader.upload(image);
            console.log('Uploaded to Cloudinary:', result.secure_url);
            uploadedImageUrls.push(result.secure_url);
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
        }
    }

    console.log('All image URLs:', uploadedImageUrls);
    // You can now use these URLs to create your seed file.
};

uploadImages();
