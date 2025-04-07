import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-neon-purple rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-neon-blue rounded-full animate-pulse border-b-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-neon-purple font-bold text-xl">R</span>
        </div>
      </div>
    </div>
  );
};

export default Loading; 