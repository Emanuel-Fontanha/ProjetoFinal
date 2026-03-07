import { httpAdapter } from "../lib/adapter";
import type { PijamasRequest } from "../types/types.ts";
import type { Pijama } from "../types/types.ts";
import { BaseService } from "./base-service";

// BE -> BaseEndpoint
const pijamasBE = "/pajamas"

export class PijamaService extends BaseService {

	async getPijamas({ page, perPage }: PijamasRequest): Promise<Pijama[]> {
		const response = await this.execute<null, Pijama[]>({
			method: "GET",
			url: pijamasBE,
            params: {
                page: page,
                perPage: perPage
            }
		});

		return response.data;
	}

	async getPijamaById(id: string): Promise<Pijama> {
		const response = await this.execute<null, Pijama>({
			method: "GET",
			url: pijamasBE,
            params: {
                publicId: id
            }
		});

		return response.data;
	}
}

export const pijamaService = new PijamaService(httpAdapter);
