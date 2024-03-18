/* eslint-disable @next/next/no-async-client-component */
"use client";
import React from "react";

const VideoPlayer = async ({ text }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handlePublishedButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Published = () => {
    return (
      <div className="fixed bottom-10 right-0 ">
        <button
          onClick={handlePublishedButton}
          className="text-color-primary float-left mr-4 bg-color-dark rounded px-2 mb-1 hover:bg-color-secondary transition-all"
        >
          Tutup
        </button>
        <div className="bg-color-accent text-center p-4 rounded justify-center items-center w-64 h-28">
          <h3 className="text-color-primary font-bold mt-3">Published</h3>
          <h3 className="text-color-primary mt-2">{text}</h3>
        </div>
      </div>
    );
  };

  const ButtonOpenPublished = () => {
    return (
      <button
        onClick={handlePublishedButton}
        className="fixed bottom-10 right-0 w-28 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded"
      >
        Buka
      </button>
    );
  };

  return isOpen ? <Published /> : <ButtonOpenPublished />;
};

export default VideoPlayer;
