import { Configuration, DefaultApi } from "@multi-service-repro/service-b-sdk";

export async function makeRequest(basePath: string) {
  const val = new DefaultApi(new Configuration({ basePath: basePath }));
  return await val.appControllerGetHello();
}
