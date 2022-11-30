import React from 'react';
import NewItemForm from '../components/ui/NewItemForm'
  
const NewListing = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <NewItemForm/>
    </div>
  );
};
  
export default NewListing;