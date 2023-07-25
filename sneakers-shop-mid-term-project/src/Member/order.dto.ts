import { IsNotEmpty, IsString } from "class-validator";

export class orderDTO {
    orderID: number;
    memberID: number;
    orderDate: Date;

    @IsNotEmpty({ message: "  Order status name should not be empty  " })
    @IsString({ message: "  Order status name must be a string  " })
    orderStatus: string;

    @IsNotEmpty({ message: "  Product name should not be empty  " })
    @IsString({ message: "  Product name must be a string  " })
    products: string[];

    @IsNotEmpty({ message: "  Total amount should not be empty  " })
    @IsString({ message: "  Total amount must be a number  " })
    totalAmount: number;

    @IsNotEmpty({ message: "  Shipping address should not be empty  " })
    @IsString({ message: "  Shipping address must be a string  " })
    shippingAddress: string;
}