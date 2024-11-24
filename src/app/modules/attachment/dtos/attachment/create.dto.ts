import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateAttachmentDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: "https://attachment.com/abc.jpg",
  })
  @IsString()
  readonly link!: string;

  @ApiProperty({
    type: String,
    required: true,
    example: "support id",
  })
  @IsNotEmpty()
  @IsUUID()
  readonly support!: any;
}
