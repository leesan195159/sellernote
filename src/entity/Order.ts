import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Product } from './Product';
import { Shipment } from './Shipment';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'userId' })
  userId: number;

  @Column({ name: 'productId' })
  productId: number;

  @Column({ length: 200 })
  receiver: string;

  @Column({ length: 200 })
  destination: string;

  @Column({ length: 20 })
  shippingCharge: string;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Product, (product) => product.orders)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @OneToMany(() => Shipment, (shipment) => shipment.order, {
    onDelete: 'CASCADE',
  })
  shipments: Shipment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
