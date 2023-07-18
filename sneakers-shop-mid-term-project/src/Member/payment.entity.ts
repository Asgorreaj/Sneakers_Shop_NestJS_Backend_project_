import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity('payment')
export class PaymentEntity {
    @PrimaryGeneratedColumn( { name: 'payment_id' } )
    paymentID: number;

    @Column( { name: 'order_id' } )
    orderID: number;

    @Column( { name: 'amount', type: 'double precision'} )
    amount: number;

    @Column( { name: 'currency', type: 'varchar', length: 255 } )
    currency: string;

    @Column( { name: 'payment_method', type: 'varchar', length: 255 } )
    paymentMethod: string;

    @Column( { name: 'payment_date', type: 'date' } )
    paymentDate: Date;

    @OneToOne(() => OrderEntity, order => order.payment)
    @JoinColumn()
    order: OrderEntity;
}