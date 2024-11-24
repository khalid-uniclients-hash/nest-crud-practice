import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HelpersModule } from "./../../helpers/helpers.module";
import { AttachmentController } from "./controllers/attachment.controller";
import { Attachment } from "./entities/attachment.entity";
import { AttachmentService } from "./services/attachment.service";

const entities = [Attachment];
const services = [AttachmentService];
const subscribers = [];
const controllers = [AttachmentController];
const webControllers = [];
const modules = [HelpersModule];

@Module({
  imports: [TypeOrmModule.forFeature(entities), ...modules],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers, ...webControllers],
})
export class AttachmentModule {}
