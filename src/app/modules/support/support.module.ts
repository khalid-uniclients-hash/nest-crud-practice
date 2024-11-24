import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HelpersModule } from "./../../helpers/helpers.module";
import { SupportController } from "./controllers/support.controller";
import { SupportCharLimitController } from "./controllers/supportCharLimit.controller";
import { Support } from "./entities/support.entity";
import { SupportCharLimit } from "./entities/supportCharLimit.entity";
import { SupportService } from "./services/support.service";
import { SupportCharLimitService } from "./services/supportCharLimit.service";

const entities = [Support, SupportCharLimit];
const services = [SupportService, SupportCharLimitService];
const subscribers = [];
const controllers = [SupportController, SupportCharLimitController];
const webControllers = [];
const modules = [HelpersModule];

@Module({
  imports: [TypeOrmModule.forFeature(entities), ...modules],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...webControllers],
})
export class SupportModule {}
