import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  IsEnum,
} from "class-validator";
import { Attachment } from "../../entities/attachment.entity";

export class CreateSupportDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: "Unable to login to the application",
  })
  @IsNotEmpty()
  @IsString()
  readonly message!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "user-id-123",
  })
  @IsNotEmpty()
  @IsUUID()
  readonly userId!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "pending",
  })
  @IsNotEmpty()
  @IsString()
  readonly status!: string;

  @ApiProperty({
    type: [String],
    required: false,
    example: ["file1.jpg", "file2.mp4"],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly attachments?: Attachment[];
}
