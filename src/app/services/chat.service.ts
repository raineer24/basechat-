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
	user : any;
	chatMessages: AngularFireList<ChatMessage[]>;
	chatMessage: ChatMessage;
	userName: Observable<string>;

  constructor(
  	private db: AngularFireDatabase,
  	private afAuth: AngularFireAuth
  	) {
  			this.afAuth.authState.subscribe(auth =>{
  				if (auth !== undefined && auth !== null) {

  					this.user = auth;
  				}
  			});
  	 }

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

  getTimeStamp() {
  		const now = new Date();
  		const date = now.getUTCFullYear() + '/' +
  								 (now.getUTCMonth() + 1) + '/' +
  								 now.getUTCDate();
  		const time = now.getUTCFullYear() + ':' +
  								now.getUTCMinutes()						 
  }

}
