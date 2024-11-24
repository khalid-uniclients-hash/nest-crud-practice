import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class CreateSupportDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: "Hello",
  })
  @IsNotEmpty()
  @IsString()
  readonly message!: string;

  @ApiProperty({
    type: String,
    required: false,
    example: "https://attachment.com/abc.jpg",
  })
  @IsOptional()
  @IsString()
  readonly attachment!: string;
}

export class CreateSupportCharLimitDTO {
  @ApiProperty({
    type: Number,
    required: true,
    example: 10,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly charLimit!: number;

  @ApiProperty({
    type: String,
    required: true,
    example: "support id",
  })
  @IsNotEmpty()
  @IsUUID()
  readonly support!: any;
}
