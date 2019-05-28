// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {
  AuthenticationBindings,
  UserProfile,
  authenticate,
  AUTHENTICATION_METADATA_KEY,
} from '@loopback/authentication';
import {get} from '@loopback/rest';


export class WhoamiController {
  constructor(
    @inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile,
  ) {}

  @authenticate('BasicStrategy')
  @get('/whoami')
  whoami():string{
    return this.user.id;
  }
}
