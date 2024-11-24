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
import { CreateSupportCharLimitDTO } from "../dtos/support/create.dto";
import { FilterSupportDTO } from "../dtos/support/filter.dto";
import { UpdateSupportCharLimitDTO } from "../dtos/support/update.dto";
import { SupportCharLimit } from "../entities/supportCharLimit.entity";
import { SupportCharLimitService } from "../services/supportCharLimit.service";

@ApiTags("Support Char Limit")
@Controller("supports-char-limits")
export class SupportCharLimitController {
  RELATIONS = [];
  constructor(private readonly service: SupportCharLimitService) {}

  @Get()
  async findAll(
    @Query() query: FilterSupportDTO
  ): Promise<SuccessResponse | SupportCharLimit[]> {
    return this.service.findAllBase(query, { relations: this.RELATIONS });
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<SupportCharLimit> {
    return this.service.findByIdBase(id, { relations: this.RELATIONS });
  }

  @Post()
  async createOne(
    @Body() body: CreateSupportCharLimitDTO
  ): Promise<SupportCharLimit> {
    return this.service.createOneBase(body);
  }

  @Patch(":id")
  async updateOne(
    @Param("id") id: string,
    @Body() body: UpdateSupportCharLimitDTO
  ): Promise<SupportCharLimit> {
    return this.service.updateOneBase(id, body);
  }

  @Delete(":id")
  async deleteOne(@Param("id") id: string): Promise<SuccessResponse> {
    return this.service.deleteOneBase(id);
  }
}
