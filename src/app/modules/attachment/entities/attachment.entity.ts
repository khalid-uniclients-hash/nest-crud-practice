import { BaseEntity } from "@src/app/base";
import { ENUM_TABLE_NAMES } from "@src/shared";
import { Column, Entity } from "typeorm";

@Entity(ENUM_TABLE_NAMES.ATTACHMENTS)
export class Attachment extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = [];

  @Column()
  link?: string;

  constructor() {
    super();
  }
}
