import React from 'react';

export default function DonesCard() {
  return (
    <div>
      <p>
        <span>Done</span>
        <br />
        Congratulions!
        <br />
        {/* quantidade de items na lista */}
        You have done 5 tasks
      </p>
      <div>
        <div>
          {/* lista de dones */}
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
