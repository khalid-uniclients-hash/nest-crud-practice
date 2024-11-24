import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

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
