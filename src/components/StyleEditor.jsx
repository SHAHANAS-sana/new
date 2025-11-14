import React from 'react';

const StyleEditor = ({ styles, onChange }) => {
  const handleChange = (property, value) => {
    onChange({ [property]: value });
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Color
        </label>
        <input
          type="color"
          value={styles.color}
          onChange={e => handleChange('color', e.target.value)}
          className="w-full h-10 p-1 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Background Color
        </label>
        <input
          type="color"
          value={styles.backgroundColor}
          onChange={e => handleChange('backgroundColor', e.target.value)}
          className="w-full h-10 p-1 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Size
        </label>
        <select
          value={styles.fontSize}
          onChange={e => handleChange('fontSize', e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="48px">48px</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Weight
        </label>
        <select
          value={styles.fontWeight}
          onChange={e => handleChange('fontWeight', e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="lighter">Light</option>
          <option value="bolder">Bolder</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Padding
        </label>
        <input
          type="text"
          value={styles.padding}
          onChange={e => handleChange('padding', e.target.value)}
          placeholder="e.g., 10px or 10px 20px"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Margin
        </label>
        <input
          type="text"
          value={styles.margin}
          onChange={e => handleChange('margin', e.target.value)}
          placeholder="e.g., 10px or 10px 20px"
          className="w-full p-2 border rounded"
        />
      </div>
    </>
  );
};

export default StyleEditor;
