import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateSupportDTO {
  @ApiProperty({
    type: String,
    required: false,
    example: "completed",
  })
  @IsOptional()
  @IsString()
  readonly status?: string;
}
