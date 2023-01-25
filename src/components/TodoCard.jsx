import React from 'react';

export default function TodoCard() {
  return (
    <div>
      <p>
        <span>To-do</span>
        <br />
        Take a breath.
        <br />
        Start doing.
      </p>
      <div>
        <input
          type="text"
        />
        <div>
          {/* lista de todo */}
        </div>
        <button
          type="button"
        >
          erase all
        </button>
      </div>
    </div>
  );
}
