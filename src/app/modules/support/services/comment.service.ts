import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@src/app/base";
import { DataSource, Repository } from "typeorm";
import { CreateCommentDTO } from "../dtos/comment/create.dto";
import { Comment } from "../entities/comment.entity";

@Injectable()
export class CommentService extends BaseService<Comment> {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly dataSource: DataSource
  ) {
    super(commentRepository);
  }

  async createComment(
    createCommentDto: CreateCommentDTO,
    supportId: string,
    userId: string
  ): Promise<Comment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    let createdComment = null;

    try {
      createdComment = await queryRunner.manager.save(Comment, {
        ...createCommentDto,
        support: { id: supportId },
        user: { id: userId },
      });

      if (!createdComment) {
        throw new BadRequestException("Comment not created!");
      }

      await queryRunner.commitTransaction();
      await queryRunner.release();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      throw new BadRequestException(error.message || "Comment not created!");
    }

    return createdComment;
  }
}
