import {
  DefaultBodyType,
  RESTMethods, PathParams,
  ResponseResolver,
  RestContext,
  RestRequest,
  compose,
  rest, } from "msw";
import { Path } from "node-match-path";
import { server } from "./mswSetup";

export const JSON_CONTENT_TYPE = "application/json";
export const shouldMockOnce = true;

interface ResolverOptions {
  contentTypeHeader: string;
  response: DefaultBodyType;
  statusCode: number;
}

const createResolver = (
  options: ResolverOptions
): ResponseResolver<
  RestRequest<DefaultBodyType, PathParams>,
  RestContext,
  DefaultBodyType
> => {
  const { contentTypeHeader, response, statusCode } = options;
  /* Undefined will cause delay to be set to a 'realistic' response 
    time; https://mswjs.io/docs/api/context/delay#implicit-response-delay */

  return (_req, res, ctx) => {
    let transformer = compose(
      ctx.status(statusCode),
      ctx.set("Content-Type", contentTypeHeader), // Response transformers are applied in reverse order, and this transformer must be declared before ctx.json() to avoid being overwritten.
      ctx.json(response)
    );

    return res(transformer);
  };
};

export const createRequestHandler = (
  method: RESTMethods,
  path: Path,
  response: DefaultBodyType,
  statusCode: number,
) => {
  const resolver = createResolver({
    contentTypeHeader: JSON_CONTENT_TYPE,
    response,
    statusCode,
  });

  const REST_METHODS = {
    DELETE: rest.delete,
    GET: rest.get,
    HEAD: rest.head,
    OPTIONS: rest.options,
    PATCH: rest.patch,
    POST: rest.post,
    PUT: rest.put,
  };

  return REST_METHODS[method](path, resolver);
};

export const mockRequest = (
  method: RESTMethods,
  path: Path,
  response: DefaultBodyType,
  statusCode: number,
): void => {
  const handler = createRequestHandler(
    method,
    path,
    response,
    statusCode,
  );

  server.use(handler);
};

// GET requests

export const mockSuccessfulGetRequest = (
  path: Path,
  response: DefaultBodyType,
  statusCode = 200,
): void =>
  mockRequest(
    RESTMethods.GET,
    path,
    response,
    statusCode,
  );

export const mockFailedGetRequest = (
  path: Path,
  response: DefaultBodyType,
  statusCode = 403,
): void =>
  mockRequest(
    RESTMethods.GET,
    path,
    response,
    statusCode,
  );