import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService extends NgEntityService<SessionState> {

  constructor(protected store: SessionStore) {
    super(store);
  }

}
