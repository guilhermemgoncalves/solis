import { Module } from '@nestjs/common';
import { SharePointService } from './sharepoint.service';
import { SharePointController } from './sharepoint.controller';
import {AuthService} from "../auth/auth.service";

@Module({
  controllers: [SharePointController],
  providers: [SharePointService, AuthService],
})
export class SharepointModule {}
