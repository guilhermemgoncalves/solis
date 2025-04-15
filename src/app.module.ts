import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './features/company/company.module';
import {AreteModule} from "./features/arete/arete.module";

@Module({
  imports: [CompanyModule, AreteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
