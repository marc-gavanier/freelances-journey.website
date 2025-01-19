export type Location = {
  name: string;
  address: string;
  accessTime?: string;
  latitude: number;
  longitude: number;
  icon: {
    width: number;
    height: number;
    src: string;
  };
};

export type AccessAndTransport = {
  destinations: Location[];
  trainStations?: Location[];
  subwayStations?: Location[];
  tramStops?: Location[];
  busStops?: Location[];
  parkingLots?: Location[];
  bikeStations?: Location[];
};
