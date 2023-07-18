import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";
import { SellerEntity } from "src/Seller/seller.entity";
import { RatingEntity } from "./rating.entity";
import { ReviewEntity } from "./review.entity";

@Entity('member')
export class MemberEntity {
    @PrimaryGeneratedColumn( { name: 'member_id' } )
    memberID: number;

    @Column( { name: 'first_name', type: 'varchar', length: 255 } )
    firstName: string;

    @Column( { name: 'last_name', type: 'varchar', length: 255 } )
    lastName: string;

    @Column( { name: 'username', type: 'varchar', length: 255 } )
    username: string;

    @Column( { name: 'date_of_birth', type: 'date'} )
    dateOfBirth: Date;

    @Column( { name: 'address', type: 'varchar', length: 255 } )
    address: string;

    @Column( { name: 'telephone_number', type: 'varchar', length: 255 } )
    telephoneNumber: string;

    @Column( { name: 'email', type: 'varchar', length: 255 } )
    email: string;

    @Column( { name: 'password', type: 'varchar', length: 255 } )
    password: string;

    @Column( { name: 'profile_picture', type: 'varchar', length: 255 } )
    profilePicture: string;

    @OneToMany(() => OrderEntity, order => order.member)
    orders: OrderEntity[];

    @OneToOne(() => SellerEntity, seller => seller.member)
    @JoinColumn()
    seller: SellerEntity;

    @OneToOne(() => RatingEntity, rating => rating.member)
    @JoinColumn()
    rating: RatingEntity;

    @OneToOne(() => ReviewEntity, review => review.member)
    @JoinColumn()
    review: ReviewEntity;

}