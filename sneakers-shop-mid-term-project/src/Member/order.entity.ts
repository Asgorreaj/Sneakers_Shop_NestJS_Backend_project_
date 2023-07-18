import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MemberEntity } from "./member.entity";
import { PaymentEntity } from "./payment.entity";

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn( { name: 'order_id' } )
    orderID: number;

    @Column( { name: 'member_id' } )
    memberID: number;

    @Column( { name: 'order_date', type: 'date' } )
    orderDate: Date;

    @Column( { name: 'order_status', type: 'varchar', length: 255 } )
    orderStatus: string;

    @Column( { name: 'products', type: 'varchar', length: 255 } )
    products: string[];

    @Column( { name: 'total_amount', type: 'double precision'} )
    totalAmount: number;

    @Column( { name: 'shipping_address', type: 'varchar', length: 255 } )
    shippingAddress: string;

    @ManyToOne(() => MemberEntity, member => member.orders)
    member: MemberEntity;

    @OneToOne(() => PaymentEntity, payment => payment.order)
    @JoinColumn()
    payment: PaymentEntity;
}