import { IsNotEmpty, IsString } from "class-validator";

export class RatingDTO {
    ratingID: number;
    memberID: number;
    productID: number;

    @IsNotEmpty({ message: "Rating should not be empty." })
    @IsString({ message: "Rating must be a number." })
    rating: number;
}