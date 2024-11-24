import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAttachmentDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: "https://attachment.com/abc.jpg",
  })
  @IsString()
  readonly link!: string;
}
