import React, { useState } from 'react';

const TimePickerModal = ({ isOpen, onClose, onSave, initialTime = '', initialLabel = '' }) => {
  const [time, setTime] = useState(initialTime);
  const [label, setLabel] = useState(initialLabel);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ time, label });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Set Alarm</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="label" className="block text-sm font-medium text-gray-700">
              Label
            </label>
            <input
              type="text"
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Enter alarm label"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimePickerModal;