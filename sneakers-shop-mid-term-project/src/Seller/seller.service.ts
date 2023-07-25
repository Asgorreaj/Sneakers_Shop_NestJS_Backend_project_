import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateProductDTO, productDTO } from "./product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { SellerEntity } from "./seller.entity";
import { OrderEntity } from "src/member/order.entity";
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerService } from "@nestjs-modules/mailer/dist";


@Injectable()
export class SellerService {
    
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
        @InjectRepository(SellerEntity)
        private sellerRepository: Repository<SellerEntity>,
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>,
        private mailerService: MailerService
    ) {}

    // Add Product
    async addProduct(memberID, product: productDTO): Promise<ProductEntity> {
        const sellerDetails = await this.sellerRepository.findOneBy({ memberID : memberID });
        product.sellerID = sellerDetails.sellerID;
        product.reviews = {};
        return await this.productRepository.save(product);
    }

    // Edit product
    async updateProduct(query: UpdateProductDTO) {
        const product = await this.productRepository.findOneBy({productID: query.productID});
        if (product == null) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: "Product not found"
            })
        }
        if (product[query.property] == undefined) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: "Property not found"
            })
        }
        product[query.property] = query.value;
        return await this.productRepository.save(product);
    }

    // Delete Product
    async deleteProduct(productID) {
        return await this.productRepository.delete({productID: productID});
    }

    async saleReport(memberID) {
        const orders = await this.orderRepository.find();
        let sale = 0;
        let product = {};
        for (let order of orders) {
            if (order.memberID === memberID) {
                product[order.orderStatus] = order.products;
                sale += order.totalAmount;
            }
        }
        const saleReport = {
            "products": product,
            "Total Sale": sale
        }
        return saleReport;
    }

     async updateForNewProduct() {
        const products = await this.productRepository.find();
        await this.mailerService.sendMail({to: 'ajgorhossainreaj@gmail.com',
        subject: "A new product has been added! Check it out now",
        text: 
        `        ===========================

        productID: ${products[0].productID}
        sellerID:${products[0].sellerID}
        productName:${products[0].productName}
        price:${products[0].price}
        description:${products[0].description}
        category:${products[0].category}
        tags:${products[0].tags}
        availabilty:${products[0].availabilty}
        ratings:${products[0].ratings} 
        reviews:${products[0].reviews}
        picture:${products[0].picture}
        ===========================`
    })
    }
}