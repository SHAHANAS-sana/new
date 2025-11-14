import React from 'react';

const ImageUpload = ({ images, onChange }) => {
  const handleFileChange = e => {
    const files = Array.from(e.target.files);
    onChange([...images, ...files]);
  };

  const handleRemove = index => {
    const newImages = [...images];
    newImages.splice(index, 1);
    onChange(newImages);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={
                typeof image === 'string' ? image : URL.createObjectURL(image)
              }
              alt={`Upload ${index + 1}`}
              className="w-full h-32 object-cover rounded"
            />
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
