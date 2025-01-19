'use client';

import { Dispatch, Fragment, ReactElement, ReactNode, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { FullscreenControl, Map, Marker, NavigationControl, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { AccessAndTransport, Location } from '@/features/conference/domain';

type DynamicPopup = {
  latitude: number;
  longitude: number;
  offset: number;
  name: ReactNode;
  address: ReactNode;
};

const EMPTY_POPUP: DynamicPopup = {
  latitude: 0,
  longitude: 0,
  offset: 0,
  name: null,
  address: null
};

const LocationItem = (location: Location): ReactElement => (
  <div className='col-md-6 col-12 d-flex align-items-center gap-3'>
    <div className='text-center' style={{ width: '50px' }}>
      <Image alt='' {...location.icon} />
    </div>
    <div>
      <div className='h5'>{location.name}</div>
      {location.address} - {location.accessTime} à pied
    </div>
  </div>
);

export const Access = ({ serializedAccessAndTransport }: { serializedAccessAndTransport: string }): ReactElement => {
  const {
    destinations,
    default: _,
    ...transports
  }: { destinations: Location[]; default: unknown } & Partial<Omit<AccessAndTransport, 'destinations'>> = JSON.parse(
    serializedAccessAndTransport
  );

  const [dynamicPopup, setDynamicPopup]: [DynamicPopup, Dispatch<SetStateAction<DynamicPopup>>] = useState(EMPTY_POPUP);
  const [popupIndex, setPopupIndex]: [number, Dispatch<SetStateAction<number>>] = useState<number>(-1);

  const togglePopup = (index: number, transport: Location) => () => {
    if (index === popupIndex) {
      setDynamicPopup(EMPTY_POPUP);
      setPopupIndex(-1);
      return;
    }
    setPopupIndex(index);
    setDynamicPopup({ ...transport, offset: 20 });
  };

  return (
    <>
      <div className='container py-6'>
        <div className='row g-6'></div>
        <h2 className='mb-6'>
          <small>13 bis Quai Rambaud, 69002 Lyon</small> Freelances Journey vous accueil à L&apos;Embarcadère
        </h2>
        <div className='row g-3'>
          {transports.trainStations?.map((location: Location) => <LocationItem key={location.name} {...location} />)}
          {transports.subwayStations?.map((location: Location) => <LocationItem key={location.name} {...location} />)}
          {transports.tramStops?.map((location: Location) => <LocationItem key={location.name} {...location} />)}
          {transports.busStops?.map((location: Location) => <LocationItem key={location.name} {...location} />)}
          {transports.parkingLots?.map((location: Location) => <LocationItem key={location.name} {...location} />)}
        </div>
        <div className='mt-4 h5'>8 stations de Vélo&apos;v à proximité</div>
      </div>
      <Map
        onClick={() => setDynamicPopup(EMPTY_POPUP)}
        scrollZoom={false}
        initialViewState={{
          latitude: 45.74546346926248,
          longitude: 4.821211213317422,
          zoom: 15
        }}
        style={{ width: '100%', height: 700 }}
        mapStyle='https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json'>
        <FullscreenControl />
        <NavigationControl />
        {destinations.map((destination: Location) => (
          <Fragment key={destination.name}>
            <Popup
              className='text-center fw-bold'
              offset={5}
              maxWidth={'175px'}
              latitude={destination.latitude}
              longitude={destination.longitude}
              anchor='bottom'
              closeButton={false}
              closeOnClick={false}
              closeOnMove={false}>
              <div className='h5 text-primary'>{destination.name}</div>
              <div>{destination.address}</div>
            </Popup>
            <Marker latitude={destination.latitude} longitude={destination.longitude} anchor='top'>
              <Image alt='' {...destination.icon} />
            </Marker>
          </Fragment>
        ))}

        {dynamicPopup.name != null && (
          <Popup
            className='text-center'
            latitude={dynamicPopup.latitude}
            longitude={dynamicPopup.longitude}
            offset={dynamicPopup.offset}
            anchor='bottom'
            closeButton={false}
            closeOnClick={false}>
            <span className='h6'>{dynamicPopup.name}</span>
            {dynamicPopup.address && <div>{dynamicPopup.address}</div>}
          </Popup>
        )}

        {(Object.values(transports).flat() as Location[]).map(
          (transport: Location, index: number): ReactNode => (
            <Marker
              key={`${transport.name}-${transport.latitude}-${transport.longitude}`}
              style={{ cursor: 'pointer' }}
              latitude={transport.latitude}
              longitude={transport.longitude}
              anchor='center'
              onClick={() => {
                setTimeout(togglePopup(index, transport));
              }}>
              <Image alt='' {...transport.icon} />
            </Marker>
          )
        )}
      </Map>
      <div className='container py-6'>
        <Image className='w-100 h-100' src='/images/home/access/plan.png' alt='' width={1296} height={685} />
      </div>
    </>
  );
};
