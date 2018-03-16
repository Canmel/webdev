import {User} from '../public/entity/user';
import {PageInfo} from '../public/entity/pageInfo';
import {Injectable} from '@angular/core';
import {Urls} from '../public/url';

import {HttpService} from '../public/http.service';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) {
  }

  getUsers(params: Object, pageNo: number): Promise<any> {
    return this.httpService.get(Urls.USERS, {
      pageNo: pageNo
    });
  }

  getUser(id: number): Promise<any> {
    return this.httpService.get(Urls.USER + '/' + id + '/edit.json', {});
  }
}
