import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateQuestionnaireDto{
  @ApiModelProperty()
  @IsInt()
  readonly id: number;

  @ApiModelProperty()
  @IsString()
  readonly name: string;

  @ApiModelProperty()
  @IsInt()
  readonly zipcode: number;

  @ApiModelProperty()
  @IsString()
  readonly address1: string;

  @ApiModelProperty()
  @IsString()
  readonly address2: string;

  @ApiModelProperty()
  @IsString()
  readonly city: string;

  @ApiModelProperty()
  @IsString()
  readonly state: string;
}