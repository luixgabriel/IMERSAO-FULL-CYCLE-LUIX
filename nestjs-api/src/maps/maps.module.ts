import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';

@Module({
  controllers: [PlacesController, DirectionsController],
  providers: [
    PlacesService,
    //FORMA DIFERENTE DE INSTANCIAR UMA CLASSE E CRIAR UM SERVIÇO
    {
      provide: GoogleMapsClient,
      useValue: new GoogleMapsClient(),
    },
    DirectionsService,
  ],
  exports: [DirectionsService],
})
export class MapsModule {}
