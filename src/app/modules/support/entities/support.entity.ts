import { BaseEntity } from "@src/app/base";
import { ENUM_TABLE_NAMES } from "@src/shared";
import { Column, Entity, OneToMany } from "typeorm";
import { StatusType } from "../enums/support.enum";
import { Attachment } from "../../attachment/entities/attachment.entity";

@Entity(ENUM_TABLE_NAMES.SUPPORTS)
export class Support extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = [];

  @Column()
  message?: string;

  // @Column({ nullable: true })
  // attachment?: string;

  @OneToMany(() => Attachment, (attachment) => attachment.support)
  attachments?: Attachment[];

  @Column({ default: StatusType.PENDING })
  status?: StatusType;

  constructor() {
    super();
  }
}
