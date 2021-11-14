import { Injectable } from '@nestjs/common';

@Injectable()
export class ResultService {
  findById(id: string) {
    return 4; // stub for local dev change to camunda api call
  }

  waterNeeds(culture) {
    switch (culture) {
      case '1':
        return 4750000;
      case '2':
        return 9550000;
      case '3':
        return 4500000;
      case '4':
        return 4500000;
      case '5':
        return 8750000;
      case '6':
        return 6250000;
      default:
        return 6250000;
    }
  }

  energyNeeds(culture) {
    switch (culture) {
      default:
        return 850000;
    }
  }

  economy(query) {
    const volume = 1050 * +query.area;
    const costs =
      (this.energyNeeds(query.culture) +
        this.waterNeeds(query.culture) / 1000) *
      2 *
      +query.area;
    const proceeds = volume * 60 * 100;
    const profit = proceeds - costs;
    const result = {
      volume: volume,
      proceeds,
      costs: costs,
      profit,
    };
    console.log(result);
    return result;
  }
}
