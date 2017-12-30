class HTTP {
  static get statusCodes() {
    return {
      '-1': 'NETWORK_ERROR',
      200: 'OK',
      204: 'NO_CONTENT',
      304: 'CACHED',
      400: 'BAD_REQUEST',
      401: 'UNAUTHORIZED',
      403: 'FORBIDDEN',
      404: 'NOT_FOUND',
      409: 'CONFLICT',
      500: 'INTERNAL_SERVER_ERROR',
      503: 'SERVICE_UNAVAILABLE',
    };
  }
}
export default HTTP;
