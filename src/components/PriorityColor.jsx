import React from 'react';

export default function PriorityColor(props) {
  const {priority} = props;
  return (
    <>
      {(() => {
        switch (priority) {
          case 'low':
            return (
              <span
                className='badge badge-pill float-right py-2 px-3'
                style={{background: '#2ecc71', color: '#fff'}}
              >
                {priority}
              </span>
            );
          case 'medium':
            return (
              <span
                className='badge badge-pill float-right py-2 px-3'
                style={{background: '#f39c12', color: '#fff'}}
              >
                {priority}
              </span>
            );
          case 'hight':
            return (
              <span
                className='badge badge-pill float-right py-2 px-3'
                style={{background: '#e74c3c', color: '#fff'}}
              >
                {priority}
              </span>
            );
          default:
            break;
        }
      })()}
    </>
  );
}
