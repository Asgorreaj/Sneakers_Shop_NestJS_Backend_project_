import { IsNotEmpty, IsString } from "class-validator";

export class ReviewDTO {
    reviewID: number;
    memberID: number;
    productID: number;

    @IsNotEmpty({ message: "Review should not be empty." })
    @IsString({ message: "Review must be a string." })
    review: string;
}