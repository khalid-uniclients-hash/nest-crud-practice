import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@src/app/base";
import { DataSource, Repository } from "typeorm";
import { CreateSupportDTO, UpdateSupportDTO } from "../dtos";
import { Support } from "../entities/support.entity";

@Injectable()
export class SupportService extends BaseService<Support> {
  constructor(
    @InjectRepository(Support)
    private readonly supportRepository: Repository<Support>,
    private readonly dataSource: DataSource
  ) {
    super(supportRepository);
  }

  async createSupport(
    createSupportDto: CreateSupportDTO,
    userId: string
  ): Promise<Support> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    let createdSupport = null;

    try {
      createdSupport = await queryRunner.manager.save(Support, {
        ...createSupportDto,
        user: { id: userId },
      });

      if (!createdSupport) {
        throw new BadRequestException("Support ticket not created!");
      }

      await queryRunner.commitTransaction();
      await queryRunner.release();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      throw new BadRequestException(
        error.message || "Support ticket not created!"
      );
    }

    return createdSupport;
  }

  async updateStatus(
    id: string,
    updateSupportStatusDto: UpdateSupportDTO
  ): Promise<Support> {
    const support = await this.supportRepository.findOne({ where: { id } });

    if (!support) {
      throw new BadRequestException("Support ticket not found!");
    }

    support.status = updateSupportStatusDto.status;

    return this.supportRepository.save(support);
  }
}
