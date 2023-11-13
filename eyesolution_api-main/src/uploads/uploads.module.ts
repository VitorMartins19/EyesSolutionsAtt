import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { PrismaModule } from "../prisma/prisma.module";
import { UploadsController } from "./uploads.controller";
import { UploadsService } from "./uploads.service";

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
          const originalname = file.originalname.replace(/\s/g, "");
          const filename = uniqueSuffix + "-" + originalname;
          callback(null, filename);
        },
      }),
    }),
    PrismaModule,
  ],
  controllers: [UploadsController],
  providers: [UploadsService], 
})
export class UploadsModule {}