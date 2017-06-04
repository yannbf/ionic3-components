import { MessagesPage } from './messages/messages';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'chats.html',
})

export class ChatsPage {

  chats = [{
    imageUrl: 'assets/img/avatar/marty-avatar.png',
    title: 'McFly',
    lastMessage: 'Hey, what happened yesterday?',
    timestamp: new Date()
  },
  {
    imageUrl: 'assets/img/avatar/ian-avatar.png',
    title: 'Venkman',
    lastMessage: 'Sup, dude',
    timestamp: new Date()
  }
    , {
    imageUrl: 'assets/img/avatar/sarah-avatar.jpg',
    title: 'Sarah Mcconnor',
    lastMessage: 'You still ow me that pizza.',
    timestamp: new Date()
  }]

  constructor(public navCtrl: NavController) {
  }

  viewMessages(chat) {
    this.navCtrl.push(MessagesPage, { chatId: chat.id });
  }

  /*
  users {
    {
      user-id: 'yannbf',
      name: 'Yann',
      chats: {
        123: true,
        456: true
      }
    },
    {
      user-id: 'jourdan',
      name: 'Jourdan',
      chats: {
        123: true,
        456: true,
      }
    },
  }

  123 {
    messages: {
      {
          from: 'Yann',
          to: 'Jourdan',
          text: 'Hey!',
          timestamp: '12093912310'
        },
        {
          from: 'Jourdan',
          to: 'Yann',
          text: 'What up?',
          timestamp: '12093422310'
        },
    }
  }

  456 {
    messages: {
      {
          from: 'Yann',
          to: 'Jourdan',
          text: 'Hey!',
          timestamp: '12093912310'
        },
        {
          from: 'Jourdan',
          to: 'Yann',
          text: 'What up?',
          timestamp: '12093422310'
        },
    }
  }
  */
}
