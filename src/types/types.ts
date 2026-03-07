export interface Pijama {
	id: number;
	capa?: string;
	nome?: string;
	preco: number;
	precoAntigo?: number;
	desconto: boolean;
}

export interface PijamasRequest {
	page: number;
	perPage: number;
}

export interface UsersRequest {
    name: string,
    username: string,
    email: string,
    password: string
}