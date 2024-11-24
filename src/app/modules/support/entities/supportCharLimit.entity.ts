import { BaseEntity } from "@src/app/base";
import { ENUM_TABLE_NAMES } from "@src/shared";
import { Type } from "class-transformer";
import { Column, Entity, JoinColumn, OneToOne, RelationId } from "typeorm";
import { Support } from "./support.entity";

@Entity(ENUM_TABLE_NAMES.SUPPORTS_CHAR_LIMITS)
export class SupportCharLimit extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = [];

  @Column()
  charLimit?: number;

  // @OneToOne(() => Support, (support) => support.supportCharLimit)
  // support?: Support;

  @OneToOne((t) => Support, { onDelete: "CASCADE" })
  @JoinColumn()
  @Type((t) => Support)
  support?: Support;

  @RelationId((r: SupportCharLimit) => r.support)
  supportId?: string;

  constructor() {
    super();
  }
}
