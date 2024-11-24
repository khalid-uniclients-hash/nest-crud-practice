import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@src/app/base/base.service";
import { Repository } from "typeorm";
import { SupportCharLimit } from "../entities/supportCharLimit.entity";

@Injectable()
export class SupportCharLimitService extends BaseService<SupportCharLimit> {
  constructor(
    @InjectRepository(SupportCharLimit)
    private readonly supportCharLimitRepository: Repository<SupportCharLimit>
  ) {
    super(supportCharLimitRepository);
  }
}
