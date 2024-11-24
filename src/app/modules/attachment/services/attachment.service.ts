import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@src/app/base/base.service";
import { Repository } from "typeorm";
import { Attachment } from "../entities/attachment.entity";

@Injectable()
export class AttachmentService extends BaseService<Attachment> {
  constructor(
    @InjectRepository(Attachment)
    private readonly attachmentRepository: Repository<Attachment>
  ) {
    super(attachmentRepository);
  }
}
