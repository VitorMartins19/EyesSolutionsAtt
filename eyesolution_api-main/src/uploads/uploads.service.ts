import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { join } from "path";
import * as fs from "fs/promises";

@Injectable()
export class UploadsService {
  constructor(private readonly prisma: PrismaService) {}

  async saveImageDetails(filename: string, body: any): Promise<any> {
    const { otica_id, modelo, preco, formato } = body;

    const savedImage = await this.prisma.tb_imagens.create({
      data: {
        nome_img: filename,
        otica_id: parseInt(otica_id),
        modelo,
        preco,
        formato,
      },
    });

    return savedImage;
  }

  async deleteImage(id: number): Promise<any> {
    try {
      const image = await this.prisma.tb_imagens.findUnique({
        where: { imagem_id: id },
      });

      if (!image) {
        throw new NotFoundException("Imagem não encontrada.");
      }

      const imagePath = join(__dirname, "..", "uploads", image.nome_img);

      await fs.unlink(imagePath);

      const deletedImage = await this.prisma.tb_imagens.delete({
        where: { imagem_id: id },
      });

      return deletedImage;
    } catch (error) {
      throw error;
    }
  }
}
