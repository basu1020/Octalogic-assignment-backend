import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
    constructor(private readonly vehiclesService: VehiclesService) {}

    @Get()
    getVehicles(){
        return this.vehiclesService.getVehicles()
    }

    @Get("/wheels-options")
    getDifferentWheelsOptions(){
        return this.vehiclesService.getDifferentWheelsOptions()
    }

    @Get("/wheels/:wheels")
    getVehicleTypesBasedOnNoOfVehicles(@Param('wheels', ParseIntPipe) wheels: 4 | 2) {
        return this.vehiclesService.getVehicleTypesBasedOnNoOfWheels(wheels)
    }

    @Get("/type/:type")
    getModelsBasedOnType(@Param('type') type: 'hatchback' | 'suv' | 'sedan' | 'cruiser' | 'sports'){
        return this.vehiclesService.getModelsBasedOnType(type)
    }

}
