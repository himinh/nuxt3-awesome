import type { Endpoint } from '~/types/endpoint.type';
import { authFetch } from '~/utils/fetch';
import type { PaginationParams } from '~/utils/types';
import type { PaginateResponse } from '../types/paginate-reponse.type';

const endpointUrl = '/endpoints';

export const endpointApi = {
	getAll: (query?: PaginationParams): Promise<Endpoint[]> => {
		return authFetch.get(`${endpointUrl}`, query);
	},

	getById: (id: string, query?: PaginationParams): Promise<Endpoint> => {
		return authFetch.get(`${endpointUrl}/${id}`, query);
	},

	create: (body: Endpoint): Promise<Endpoint> => {
		return authFetch.post(`${endpointUrl}`, body);
	},

	updateById: (id: string, body: Endpoint): Promise<Endpoint> => {
		return authFetch.patch(`${endpointUrl}/${id}`, body);
	},

	deleteById: (id: string): Promise<Endpoint> => {
		return authFetch.delete(`/${`${endpointUrl}`}/${id}`);
	},

	paginate: (query?: PaginationParams): Promise<PaginateResponse<Endpoint>> => {
		return authFetch.get(`${endpointUrl}/paginate`, query);
	},
};
