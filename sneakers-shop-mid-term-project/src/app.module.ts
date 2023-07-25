import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberModule } from './member/member.module';
import { SellerModule } from './Seller/seller.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberEntity } from './member/member.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MemberModule,
    SellerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'sneakers_club', //Change to your database name
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([MemberEntity]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'asgorreaj@gmail.com',
          pass: 'dpydxzwggthspucb'
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
