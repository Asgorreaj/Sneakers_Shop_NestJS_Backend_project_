import { IsNotEmpty, IsNumber, IsString, IsDate } from "class-validator";

export class PaymentDTO {
    paymentID: number;
    orderID: number;

    @IsNotEmpty({ message: "Amount should not be empty." })
    @IsNumber({}, { message: "Amount must be a number." })
    amount: number;

    @IsNotEmpty({ message: "Currency should not be empty." })
    @IsString({ message: "Currency name must be a string." })
    currency: string;

    @IsNotEmpty({ message: "Payment method should not be empty." })
    @IsString({ message: "Payment method name must be a string." })
    paymentMethod: string;

    @IsNotEmpty({ message: "Payment date should not be empty." })
    @IsDate({ message: "Payment date must be a valid date." })
    paymentDate: Date;
}

export class confirmOrderDTO {
    orderID: number;
    currency: string;
    paymentMethod: string;
}