import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Attachment } from "./attachment.entity";
import { Comment } from "./comment.entity";

@Entity("support")
export class Support {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  message: string;

  @Column({ default: "pending" })
  status: string;

  @ManyToOne(() => User, (user) => user.supports)
  user: User;

  @OneToMany(() => Attachment, (attachment) => attachment.support)
  attachments?: Attachment[];

  @OneToMany(() => Comment, (comment) => comment.support)
  comments?: Comment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
