import React from 'react';
import { useContent } from '../contexts/ContentContext';

const DynamicContent = ({ page, section, defaultContent = {} }) => {
  const { getContent } = useContent();
  const content = getContent(page, section);

  if (!content) {
    return (
      <div style={defaultContent.styles || {}}>
        {defaultContent.text || ''}
        {defaultContent.images?.map((img, index) => (
          <img key={index} src={img} alt={`Content ${index + 1}`} />
        ))}
      </div>
    );
  }

  return (
    <div style={content.content.styles || {}}>
      {content.content.text}
      {content.content.images?.map((img, index) => (
        <img key={index} src={img} alt={`Content ${index + 1}`} />
      ))}
    </div>
  );
};

export default DynamicContent;
