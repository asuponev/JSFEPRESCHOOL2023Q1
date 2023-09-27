enum Endpoint {
  garage = 'garage',
  winners = 'winners',
  engine = 'engine',
}

const baseUrl = 'http://localhost:3000';

export default {
  garage: `${baseUrl}/${Endpoint.garage}`,
  winners: `${baseUrl}/${Endpoint.winners}`,
  engine: `${baseUrl}/${Endpoint.engine}`,
};
