import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class productDTO {
    productID: number;

    sellerID: number;

    @IsNotEmpty({ message: "Product name should not be empty." })
    @IsString({ message: "Product name must be a string." })
    productName: string;

    @IsNotEmpty({ message: "Price should not be empty." })
    @IsString({ message: "Price must be a number." })
    price: number;

    @IsNotEmpty({ message: "Product name should not be empty." })
    @IsString({ message: "Product name must be a string." })
    description: string;

    @IsNotEmpty({ message: "Product name should not be empty." })
    @IsString({ message: "Product name must be a string." })
    category: string;

    @IsNotEmpty({ message: "Product name should not be empty." })
    @IsString({ message: "Product name must be a string." })
    tags: string;

    @IsNotEmpty({ message: "Product name should not be empty." })
    @IsString({ message: "Product name must be a string." })
    availabilty: string;

    @IsNotEmpty({ message: "Supplier should not be empty." })
    @IsString({ message: "Supplier must be a string." })
    supplier: string;

    ratings: number;

    reviews: any;

    picture: string;
}

export class UpdateProductDTO {
    productID: number;
    property: string;
    value: string;
}

export class AddToCartDTO {
    productID: string;
}