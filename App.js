import React, {Component} from 'react';
const PushNotification = require('react-native-push-notification');

import {SENDER_ID} from 'react-native-dotenv';

PushNotification.configure({
  onRegister: function(token) {
    console.log('TOKEN:', token);
  },
  onNotification: function(notification) {
    console.log('NOTIFICATION:', notification);
  },
  senderID: SENDER_ID,
  popInitialNotification: true,
  requestPermissions: true,
});

class App extends Component {
  render() {
    return null;
  }
}

export default App;
