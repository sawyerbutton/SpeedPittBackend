import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTestDto{
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsInt()
  download:number;

  @ApiModelProperty()
  @IsInt()
  upload:number;

  @ApiModelProperty()
  @IsString()
  ip:string;

  @ApiModelProperty()
  @IsString()
  lat:number;

  @ApiModelProperty()
  @IsString()
    lon:number;

  @ApiModelProperty()
  @IsString()
  isp:string;

  // @ApiModelProperty()
  // @IsString()
  // date:string;

}