import { Configuration, DefaultApi } from "@multi-service-repro/service-a-sdk";

export async function makeRequest(basePath: string) {
  const val = new DefaultApi(new Configuration({ basePath: basePath }));
  return await val.appControllerGetHello();
}
