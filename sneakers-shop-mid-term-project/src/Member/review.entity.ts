import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MemberEntity } from "./member.entity";
import { ProductEntity } from "src/Seller/product.entity";

@Entity('review')
export class ReviewEntity {
    @PrimaryGeneratedColumn( { name: 'review_id' } )
    reviewID: number;

    @Column( { name: 'member_id' } )
    memberID: number;

    @Column( { name: 'product_id' } )
    productID: number;

    @Column( { name: 'rating', type: 'varchar'} )
    review: string;

    @OneToOne(() => MemberEntity, member => member.review)
    @JoinColumn()
    member: MemberEntity;

    @ManyToOne(() => ProductEntity, product => product.review)
    product: ProductEntity;
}