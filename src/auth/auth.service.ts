import { Injectable } from '@nestjs/common';
import { UserService } from '@/user/user.service';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  validateUser(id: number) {
    const user = this.userService.findOne(id);
    const response = `${user} is now authorized!`;
    console.log(response);
    return response;
  }
}
