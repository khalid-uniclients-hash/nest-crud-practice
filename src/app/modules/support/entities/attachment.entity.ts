import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Support } from "./support.entity";

@Entity("attachments")
export class Attachment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Support, (support) => support.attachments, {
    nullable: true,
  })
  support: Support;
}
