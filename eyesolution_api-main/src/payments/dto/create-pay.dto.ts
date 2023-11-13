import {
  IsString,
  IsEmail,
  IsStrongPassword,
  IsOptional,
  IsDateString,
  IsEnum,
  IsInt,
  isInt,
  IsNumber,
  IsDecimal,
} from "class-validator";

export class CreatePayDTO {
  @IsString()
  user_atividade: string;

  @IsNumber()
  plano_id: number;

  @IsNumber()
  otica_id: number;

  @IsNumber()
  valor_pagamento: number;
}
