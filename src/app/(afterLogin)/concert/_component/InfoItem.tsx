import React from 'react';

interface InfoItemProps {
  title: string;
  content: string;
}

const InfoItem = ({ title, content }: InfoItemProps) => {
  return (
    <div className="flex">
      <p className="mr-5 w-12 text-sm font-medium text-textLess">{title}</p>
      <p className="text-sm font-medium text-text">{content}</p>
    </div>
  );
};

export default InfoItem;
