import React from 'react';

interface InfoItemProps {
  title: string;
  content: string;
}

const InfoItem = ({ title, content }: InfoItemProps) => {
  return (
    <div className="flex">
      <p className="mr-5 w-20 text-sm text-textLess">{title}</p>
      <p className="text-sm text-white">{content}</p>
    </div>
  );
};

export default InfoItem;
