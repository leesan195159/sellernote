import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Order } from './Order';

@Entity()
export class Shipment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'orderId' })
  orderId: number;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @Column({ length: 40 })
  location: string;

  @Column({ length: 200 })
  progress: string;

  @ManyToOne(() => Order, (order) => order.shipments)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
