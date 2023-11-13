import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Body } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express/multer";
import { join } from "path";
import { UploadsService } from "./uploads.service";

@Controller("uploads")
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    try {
      if (!file || !file.filename) {
        throw new BadRequestException("Arquivo inválido ou ausente.");
      }

      const filePath = join(__dirname, "..", "uploads", file.filename);

      const savedImage = await this.uploadsService.saveImageDetails(file.filename, body);

      return {
        message: "Arquivo enviado com sucesso!",
        filename: file.filename,
        path: filePath,
        result: savedImage,
      };
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }
}