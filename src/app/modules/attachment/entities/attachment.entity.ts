import { BaseEntity } from "@src/app/base";
import { ENUM_TABLE_NAMES } from "@src/shared";
import { Type } from "class-transformer";
import { Column, Entity, ManyToOne, RelationId } from "typeorm";
import { Support } from "../../support/entities/support.entity";

@Entity(ENUM_TABLE_NAMES.ATTACHMENTS)
export class Attachment extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = [];

  @Column()
  link?: string;

  @ManyToOne((t) => Support, { onDelete: "NO ACTION" })
  @Type((t) => Support)
  support?: Support;

  @RelationId((r: Attachment) => r.support)
  supportId?: string;

  constructor() {
    super();
  }
}
