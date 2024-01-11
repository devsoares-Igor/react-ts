import React from 'react';
import MenuAppBar from '../../components/AppBar/AppBar';
import ChatTextFields from '../../components/Chat/Chat';

const Conversations: React.FC = () => {
  return ( 
  <div>
  <MenuAppBar/>
  <ChatTextFields/>
  </div>
 
  );
}


export default Conversations;