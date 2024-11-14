import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateAttachmentDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: "file1.jpg",
  })
  @IsNotEmpty()
  @IsString()
  readonly filename!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "https://example.com/path/to/file1.jpg",
  })
  @IsNotEmpty()
  @IsString()
  readonly fileUrl!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "support-id-123",
  })
  @IsNotEmpty()
  @IsUUID()
  readonly supportId!: string;
}
