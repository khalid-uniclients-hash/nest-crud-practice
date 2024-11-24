import { BaseEntity } from "@src/app/base";
import { ENUM_TABLE_NAMES } from "@src/shared";
import { Type } from "class-transformer";
import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { Attachment } from "../../attachment/entities/attachment.entity";
import { StatusType } from "../enums/support.enum";
import { SupportCharLimit } from "./supportCharLimit.entity";

@Entity(ENUM_TABLE_NAMES.SUPPORTS)
export class Support extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = [];

  @Column()
  message?: string;

  // @Column({ nullable: true })
  // attachment?: string;

  @OneToMany(() => Attachment, (attachment) => attachment.support)
  attachments?: Attachment[];

  @OneToOne(
    (t) => SupportCharLimit,
    (supportCharLimit) => supportCharLimit.support,
    { onDelete: "NO ACTION" }
  )
  @Type((t) => SupportCharLimit)
  supportCharLimit?: SupportCharLimit;

  @Column({ default: StatusType.PENDING })
  status?: StatusType;

  constructor() {
    super();
  }
}
