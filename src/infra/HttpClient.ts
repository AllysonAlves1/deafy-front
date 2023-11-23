// Arquitetura Hexagonal

import { RequestInfo } from "undici-types";

// Ports & Adapters
export async function HttpClient(fetchUrl: RequestInfo, fetchOptions: { method?: string; body: any; headers?: any; }) {
    const options = {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
      body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    };
    return fetch(fetchUrl, options)
      .then(async (respostaDoServidor) => {
        return {
          ok: respostaDoServidor.ok,
          status: respostaDoServidor.status,
          statusText: respostaDoServidor.statusText,
          body: await respostaDoServidor.json(),
        }
      });
  }