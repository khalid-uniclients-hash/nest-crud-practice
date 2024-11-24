import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SuccessResponse } from "@src/app/types";
import { CreateAttachmentDTO, FilterAttachmentDTO } from "../dtos";
import { Attachment } from "../entities/attachment.entity";
import { AttachmentService } from "../services/attachment.service";

@ApiTags("Attachment")
@Controller("attachments")
export class AttachmentController {
  RELATIONS = [];
  constructor(private readonly service: AttachmentService) {}

  @Get()
  async findAll(
    @Query() query: FilterAttachmentDTO
  ): Promise<SuccessResponse | Attachment[]> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Attachment> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateAttachmentDTO): Promise<Attachment> {
    return this.service.createOneBase(body);
  }

  @Delete(":id")
  async deleteOne(@Param("id") id: string): Promise<SuccessResponse> {
    return this.service.deleteOneBase(id);
  }
}
