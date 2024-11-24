import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HelpersModule } from "./../../helpers/helpers.module";
import { SupportController } from "./controllers/support.controller";
import { Support } from "./entities/support.entity";
import { SupportService } from "./services/support.service";

const entities = [Support];
const services = [SupportService];
const subscribers = [];
const controllers = [SupportController];
const webControllers = [];
const modules = [HelpersModule];

@Module({
  imports: [TypeOrmModule.forFeature(entities), ...modules],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...webControllers],
})
export class SupportModule {}
