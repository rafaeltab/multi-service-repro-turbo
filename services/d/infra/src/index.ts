import { Configuration, DefaultApi } from "@multi-service-repro/service-c-sdk";

export async function makeRequest(basePath: string) {
  const val = new DefaultApi(new Configuration({ basePath: basePath }));
  return await val.appControllerGetHello();
}
