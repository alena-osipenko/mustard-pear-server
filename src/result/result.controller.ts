import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { ResultService } from './result.service';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}
  @Get(':id')
  findById(@Param('id') id: string, @Query() query) {
    // console.log(query);
    const camundaScore = this.resultService.findById(id);
    const result: any = {
      rate: camundaScore,
      CLADR: '12:04:0000000:5548',
      requirements:
        query.isClosed == 'true'
          ? {
              water: {
                value: this.resultService.waterNeeds(query.culture),
                description: 'л/га, полив дождеванием',
              },
              enegry: {
                value: this.resultService.energyNeeds(query.culture),
                description: 'кВт×ч/га, световая зона III',
              },
            }
          : null,
    };
    if (query.complex) {
      result.economy = this.resultService.economy(query);
      return result;
    } else {
      return result;
    }
  }
}
