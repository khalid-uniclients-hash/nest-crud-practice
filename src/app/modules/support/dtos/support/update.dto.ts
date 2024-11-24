import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
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

export class UpdateSupportCharLimitDTO {
  @ApiProperty({
    type: Number,
    required: true,
    example: 10,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly charLimit!: number;
}
