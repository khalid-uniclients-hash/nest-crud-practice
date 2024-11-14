import { Controller, Post, Body, Param } from "@nestjs/common";
import { CommentService } from "../services/comment.service";
import { CreateCommentDTO } from "../dtos/comment/create.dto";

@Controller("comments")
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(":supportId")
  async createComment(
    @Param("supportId") supportId: string,
    @Body() createCommentDto: CreateCommentDTO
  ) {
    return this.commentService.createComment(
      createCommentDto,
      supportId,
      "03071f11-bedc-4819-8dc2-91ebb0fb256d"
    );
  }
}
