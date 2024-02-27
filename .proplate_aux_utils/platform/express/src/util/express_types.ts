import express from "express";

export type ParamsDictionary = Record<string, string>;

export interface ParsedQs {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
}

export interface RequestData {
  body: any;
  query: ParsedQs;
  params: ParamsDictionary;
}

/**
 * wrapper types for easier typings
 */
export type RequestHandler<
  Body = any,
  Params extends ParamsDictionary = ParamsDictionary,
  Query = ParsedQs,
> = express.RequestHandler<Params, any, Body, Query>;
