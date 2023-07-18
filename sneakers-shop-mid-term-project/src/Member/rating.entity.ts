import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MemberEntity } from "./member.entity";
import { ProductEntity } from "src/Seller/product.entity";

@Entity('rating')
export class RatingEntity {
    @PrimaryGeneratedColumn( { name: 'rating_id' } )
    ratingID: number;

    @Column( { name: 'member_id' } )
    memberID: number;

    @Column( { name: 'product_id' } )
    productID: number;

    @Column( { name: 'rating', type: 'double precision' } )
    rating: number;

    @OneToOne(() => MemberEntity, member => member.rating)
    @JoinColumn()
    member: MemberEntity;

    @ManyToOne(() => ProductEntity, product => product.rating)
    product: ProductEntity;
}