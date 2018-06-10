import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateQuestionnaireDto{
  @ApiModelProperty()
  @IsInt()
  readonly id: number;

  @ApiModelProperty()
  @IsInt()
  readonly zipcode: number;

  @ApiModelProperty()
  @IsString()
  readonly address1: string;

  @ApiModelProperty()
  @IsString()
  readonly numberHousehold: number;

  @ApiModelProperty()
  @IsString()
  readonly city: string;

  @ApiModelProperty()
  @IsString()
  readonly state: string;

  @ApiModelProperty()
  readonly privateLocation: any;

  @ApiModelProperty()
  @IsString()
  readonly reasonNoInternet:string;

  @ApiModelProperty()
  readonly computerDevice:boolean;
}