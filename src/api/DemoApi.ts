import { Api } from "./Api";

// <ik> This is just a demo of API. It doesn't work

export interface ITestMethodResponse {
  ok: boolean;
  error?: string;
  message?: string;
}

export class DemoApi {
  static testMethodGet = (test: string) => Api.get<ITestMethodResponse>(`/test/${test}`);

  static testMethodPost = (test: string) => Api.post(`/test`, { test });
}

/*
  Usage:
  1. Import DemoApi in your component or Vuex module
  2. const resultJson = await DemoApi.testMethodGet('123');
*/
