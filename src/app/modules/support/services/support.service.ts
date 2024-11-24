import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "@src/app/base/base.service";
import { Repository } from "typeorm";
import { Support } from "../entities/support.entity";

@Injectable()
export class SupportService extends BaseService<Support> {
  constructor(
    @InjectRepository(Support)
    private readonly supportRepository: Repository<Support>
  ) {
    super(supportRepository);
  }
}
