import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const ContentContext = createContext();

export const useContent = () => {
  return useContext(ContentContext);
};

export const ContentProvider = ({ children }) => {
  const [contentData, setContentData] = useState({});

  const fetchContent = async (page, section) => {
    try {
      const response = await api.get(`/admin/content/${page}/${section}`);
      setContentData(prev => ({
        ...prev,
        [`${page}-${section}`]: response.data,
      }));
      return response.data;
    } catch (error) {
      console.error('Error fetching content:', error);
      return null;
    }
  };

  const getContent = (page, section) => {
    const key = `${page}-${section}`;
    if (!contentData[key]) {
      fetchContent(page, section);
      return null;
    }
    return contentData[key];
  };

  const value = {
    getContent,
    fetchContent,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export default ContentContext;
