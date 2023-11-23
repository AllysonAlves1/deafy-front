import { HttpClient } from "@/infra/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login(email: String, password: String) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: "POST",
      body: { email, password },
    }).then(async (response) => {
      if (!response.ok) throw new Error("Usuário ou senha inválidos!");
      const body = response.body;
      console.log(JSON.stringify(body.access_token));
      tokenService.save(JSON.stringify(body.access_token));
    });
  },
  async getSession(ctx = null) {
    const token = tokenService.get(ctx);

    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: undefined
    }).then((response) => {
      if (!response.ok) throw new Error("Não autorizado");

      return response.body.data;
    });
  },
};
