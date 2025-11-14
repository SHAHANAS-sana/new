import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [contents, setContents] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [formData, setFormData] = useState({
    text: '',
    images: [],
    styles: {
      color: '#000000',
      fontSize: '16px',
      fontWeight: 'normal',
      backgroundColor: '#ffffff',
    },
  });

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const response = await api.get('/admin/content');
      setContents(response.data);
    } catch (error) {
      console.error('Error fetching contents:', error);
    }
  };

  const handleContentSelect = (content) => {
    setSelectedContent(content);
    setFormData({
      text: content.content.text || '',
      images: content.content.images || [],
      styles: content.content.styles || {
        color: '#000000',
        fontSize: '16px',
        fontWeight: 'normal',
        backgroundColor: '#ffffff',
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedContent) return;

    try {
      await api.put(
        `/admin/content/${selectedContent.page}/${selectedContent.section}`,
        formData
      );
      fetchContents();
      alert('Content updated successfully!');
    } catch (error) {
      console.error('Error updating content:', error);
      alert('Failed to update content');
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // In a real application, you would upload these files to your server/cloud storage
    // and get back the URLs. For now, we'll create local URLs
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      images: [...formData.images, ...imageUrls],
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Content Sections</h2>
          <div className="space-y-2">
            {contents.map((content) => (
              <div
                key={`${content.page}-${content.section}`}
                className={`p-2 border rounded cursor-pointer ${
                  selectedContent?._id === content._id ? 'bg-blue-100' : ''
                }`}
                onClick={() => handleContentSelect(content)}
              >
                <p className="font-medium">{content.page} - {content.section}</p>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(content.updatedAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {selectedContent && (
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-4">Edit Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Text Content</label>
                <textarea
                  value={formData.text}
                  onChange={(e) =>
                    setFormData({ ...formData, text: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  rows="4"
                />
              </div>

              <div>
                <label className="block mb-2">Images</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mb-2"
                />
                <div className="grid grid-cols-2 gap-2">
                  {formData.images.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Text Color</label>
                  <input
                    type="color"
                    value={formData.styles.color}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        styles: { ...formData.styles, color: e.target.value },
                      })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2">Background Color</label>
                  <input
                    type="color"
                    value={formData.styles.backgroundColor}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        styles: {
                          ...formData.styles,
                          backgroundColor: e.target.value,
                        },
                      })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2">Font Size</label>
                  <input
                    type="text"
                    value={formData.styles.fontSize}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        styles: { ...formData.styles, fontSize: e.target.value },
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block mb-2">Font Weight</label>
                  <select
                    value={formData.styles.fontWeight}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        styles: {
                          ...formData.styles,
                          fontWeight: e.target.value,
                        },
                      })
                    }
                    className="w-full p-2 border rounded"
                  >
                    <option value="normal">Normal</option>
                    <option value="bold">Bold</option>
                    <option value="lighter">Light</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
