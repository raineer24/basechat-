import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList 
} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';

@Injectable()
export class ChatService {
	chatMessages: AngularFireList<ChatMessage[]>;
	chatMessage: ChatMessage;

  constructor() { }

  sendMessage(msg: string) {
		const timestamp = this.getTimeStamp(); 
		const email = this.user.email;
			this.chatMessages = this.getMessages();
			this.chatMessages.push({
				message: msg,
				timeSent: timestamp,
				userName: this.userName,
				email: email
			});
  }

}
