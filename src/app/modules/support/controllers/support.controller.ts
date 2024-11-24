import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SuccessResponse } from "@src/app/types";
import { CreateSupportDTO } from "../dtos/support/create.dto";
import { FilterSupportDTO } from "../dtos/support/filter.dto";
import { UpdateSupportDTO } from "../dtos/support/update.dto";
import { Support } from "../entities/support.entity";
import { SupportService } from "../services/support.service";

@ApiTags("Support")
@Controller("supports")
export class SupportController {
  RELATIONS = [];
  constructor(private readonly service: SupportService) {}

  @Get()
  async findAll(
    @Query() query: FilterSupportDTO
  ): Promise<SuccessResponse | Support[]> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Support> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(@Body() body: CreateSupportDTO): Promise<Support> {
    return this.service.createOneBase(body);
  }

  @Patch(":id")
  async updateOne(
    @Param("id") id: string,
    @Body() body: UpdateSupportDTO
  ): Promise<Support> {
    return this.service.updateOneBase(id, body);
  }

  @Delete(":id")
  async deleteOne(@Param("id") id: string): Promise<SuccessResponse> {
    return this.service.deleteOneBase(id);
  }
}
