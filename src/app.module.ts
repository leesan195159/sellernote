import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { Product } from './entity/Product';
import { Order } from './entity/Order';
import { Shipment } from './entity/Shipment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sellernote',
      synchronize: true,
      entities: [User, Product, Order, Shipment],
    }),
  ],
})
export class AppModule {}
