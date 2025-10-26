import React, { useState } from 'react';
import AlarmCard from '../components/AlarmCard';
import TimePickerModal from '../components/TimePickerModal';

const AlarmsContainer = () => {
  const [alarms, setAlarms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAlarm, setEditingAlarm] = useState(null);

  const handleAddAlarm = alarmData => {
    if (editingAlarm) {
      setAlarms(
        alarms.map(alarm =>
          alarm.id === editingAlarm.id ? { ...alarm, ...alarmData } : alarm
        )
      );
      setEditingAlarm(null);
    } else {
      setAlarms([
        ...alarms,
        {
          id: Date.now(),
          ...alarmData,
          isActive: true,
        },
      ]);
    }
  };

  const handleEditAlarm = alarm => {
    setEditingAlarm(alarm);
    setIsModalOpen(true);
  };

  const handleDeleteAlarm = alarmId => {
    setAlarms(alarms.filter(alarm => alarm.id !== alarmId));
  };

  const handleToggleAlarm = alarmId => {
    setAlarms(
      alarms.map(alarm =>
        alarm.id === alarmId ? { ...alarm, isActive: !alarm.isActive } : alarm
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">My Alarms</h1>
        <button
          onClick={() => {
            setEditingAlarm(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Add Alarm
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alarms.map(alarm => (
          <AlarmCard
            key={alarm.id}
            time={alarm.time}
            label={alarm.label}
            isActive={alarm.isActive}
            onToggle={() => handleToggleAlarm(alarm.id)}
            onEdit={() => handleEditAlarm(alarm)}
            onDelete={() => handleDeleteAlarm(alarm.id)}
          />
        ))}
        {alarms.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No alarms set. Click "Add Alarm" to create one.
          </div>
        )}
      </div>

      <TimePickerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAlarm(null);
        }}
        onSave={handleAddAlarm}
        initialTime={editingAlarm?.time || ''}
        initialLabel={editingAlarm?.label || ''}
      />
    </div>
  );
};

export default AlarmsContainer;
