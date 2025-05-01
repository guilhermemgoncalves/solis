import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './features/company/company.module';
import {AreteModule} from "./features/arete/arete.module";
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "node:process";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [CompanyModule, AreteModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
  MongooseModule.forRoot(process.env.MONGO_DATABASE_URL || '', {dbName: process.env.ARETE_DB_NAME}), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
