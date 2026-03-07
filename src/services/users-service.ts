import { httpAdapter } from "../lib/adapter";
import type { UsersRequest } from "../types/types.ts";
import { BaseService } from "./base-service";

// BE -> BaseEndpoint
const usersBE = "/users"

interface RegisteredUser {
    id: string,
    name: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string
}

interface LoginRequest {
    login: string,
    password: string
}

interface LoginResponse {
    token: string,
    user: RegisteredUser
}

export class UsersService extends BaseService {

    async registerUser({ name, username, email, password }: UsersRequest): Promise<RegisteredUser> {
        const response = await this.execute<UsersRequest, RegisteredUser>({
            data: {
                name: name,
                username: username,
                email: email,
                password: password
            },
            method: "POST",
            url: usersBE,
        });

        return response.data;
    }

    async loginUser({ login, password }: LoginRequest): Promise<LoginResponse> {
        const response = await this.execute<LoginRequest, LoginResponse>({
            data: {
                login: login,
                password: password
            },
            method: "POST",
            url: usersBE,
        });

        return response.data;
    }
}

export const usersService = new UsersService(httpAdapter);
