import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { StatusType } from "../../enums/support.enum";

export class UpdateSupportDTO {
  @ApiProperty({
    enum: StatusType,
    required: true,
    example: StatusType.PENDING,
  })
  @IsEnum(StatusType)
  readonly status!: StatusType;
}
