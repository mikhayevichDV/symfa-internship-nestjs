import { Module } from '@nestjs/common';

import { UsersService } from '@shared/user/services/user.services';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
