import { Controller, Post, Body, Param, Put, Get, Query } from "@nestjs/common";
import { SupportService } from "../services/support.service";
import { CreateSupportDTO } from "../dtos/support/create.dto";
import { UpdateSupportDTO } from "../dtos/support/update.dto";
import { FilterSupportDTO } from "../dtos/support/filter.dto";
import { SuccessResponse } from "@src/app/types";
import { Support } from "../entities/support.entity";

@Controller("supports")
export class SupportController {
  RELATIONS = [];
  constructor(private readonly supportService: SupportService) {}

  @Get()
  async findAll(@Query() query: any): Promise<SuccessResponse | Support[]> {
    return this.supportService.findAllBase(query, {
      relations: this.RELATIONS,
    });
  }

  @Post()
  async createSupport(@Body() createSupportDto: CreateSupportDTO) {
    return this.supportService.createSupport(
      createSupportDto,
      "03071f11-bedc-4819-8dc2-91ebb0fb256d"
    );
  }

  @Put(":id/status")
  async updateStatus(
    @Param("id") id: string,
    @Body() updateSupportStatusDto: UpdateSupportDTO
  ) {
    return this.supportService.updateStatus(id, updateSupportStatusDto);
  }
}
