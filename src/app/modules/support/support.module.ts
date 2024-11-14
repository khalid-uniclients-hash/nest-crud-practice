import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentController } from "./controllers/comment.controller";
import { SupportController } from "./controllers/support.controller";
import { Attachment } from "./entities/attachment.entity";
import { Comment } from "./entities/comment.entity";
import { Support } from "./entities/support.entity";
import { CommentService } from "./services/comment.service";
import { SupportService } from "./services/support.service";

const entities = [Support, Attachment, Comment];
const services = [SupportService, CommentService];
const subscribers = [];
const controllers = [SupportController, CommentController];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services, ...subscribers],
  exports: [...services, ...subscribers],
  controllers: [...controllers],
})
export class SupportModule {}
