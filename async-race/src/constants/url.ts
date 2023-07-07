enum Endpoint {
  garage = 'garage',
  winners = 'winners',
}

const baseUrl = 'http://localhost:3000';

export default {
  garage: `${baseUrl}/${Endpoint.garage}`,
  winners: `${baseUrl}/${Endpoint.winners}`,
};
