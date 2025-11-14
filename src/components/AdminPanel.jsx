import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ColorPicker from '../components/ColorPicker';
import ImageUpload from '../components/ImageUpload';
import StyleEditor from '../components/StyleEditor';

const AdminPanel = () => {
  const { user } = useAuth();
  const [selectedPage, setSelectedPage] = useState('home');
  const [selectedSection, setSelectedSection] = useState('hero');
  const [content, setContent] = useState({
    text: '',
    images: [],
    styles: {
      color: '#000000',
      backgroundColor: '#ffffff',
      fontSize: '16px',
      fontWeight: 'normal',
      padding: '0px',
      margin: '0px',
    },
  });

  const pages = [
    {
      id: 'home',
      name: 'Home Page',
      sections: ['hero', 'features', 'categories'],
    },
    { id: 'about', name: 'About Page', sections: ['main', 'team', 'mission'] },
    { id: 'contact', name: 'Contact Page', sections: ['info', 'form', 'map'] },
  ];

  const handleContentUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('text', content.text);
      formData.append('styles', JSON.stringify(content.styles));
      content.images.forEach(image => {
        if (image instanceof File) {
          formData.append('images', image);
        }
      });

      const response = await fetch(
        `/api/admin/content/${selectedPage}/${selectedSection}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: formData,
        }
      );

      if (!response.ok) throw new Error('Failed to update content');

      const result = await response.json();
      console.log('Content updated:', result);
      // Show success message
    } catch (error) {
      console.error('Error updating content:', error);
      // Show error message
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Pages</h2>
            <div className="space-y-2">
              {pages.map(page => (
                <div key={page.id} className="space-y-2">
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedPage === page.id
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedPage(page.id)}
                  >
                    {page.name}
                  </button>
                  {selectedPage === page.id && (
                    <div className="ml-4 space-y-1">
                      {page.sections.map(section => (
                        <button
                          key={section}
                          className={`w-full text-left px-4 py-2 rounded-md ${
                            selectedSection === section
                              ? 'bg-blue-100'
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={() => setSelectedSection(section)}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Editor */}
          <div className="md:col-span-9 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Edit{' '}
                {selectedPage.charAt(0).toUpperCase() + selectedPage.slice(1)} -
                {selectedSection.charAt(0).toUpperCase() +
                  selectedSection.slice(1)}
              </h2>

              {/* Text Editor */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content Text
                </label>
                <textarea
                  value={content.text}
                  onChange={e =>
                    setContent({ ...content, text: e.target.value })
                  }
                  className="w-full h-32 p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter content text..."
                />
              </div>

              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images
                </label>
                <ImageUpload
                  images={content.images}
                  onChange={newImages =>
                    setContent({ ...content, images: newImages })
                  }
                />
              </div>

              {/* Style Editor */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Styles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <StyleEditor
                    styles={content.styles}
                    onChange={newStyles =>
                      setContent({
                        ...content,
                        styles: { ...content.styles, ...newStyles },
                      })
                    }
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Preview</h3>
                <div className="p-4 border rounded-md" style={content.styles}>
                  <div>{content.text}</div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {content.images.map((image, index) => (
                      <img
                        key={index}
                        src={
                          typeof image === 'string'
                            ? image
                            : URL.createObjectURL(image)
                        }
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleContentUpdate}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
