import React from "react";

const LessonModal = ({ data }: { data: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
};

export default LessonModal;
