import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateCommentDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: "I have the same issue. Please help.",
  })
  @IsNotEmpty()
  @IsString()
  readonly message!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "support-id-123",
  })
  @IsNotEmpty()
  @IsUUID()
  readonly supportId!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "user-id-123",
  })
  @IsNotEmpty()
  @IsUUID()
  readonly userId!: string;
}
