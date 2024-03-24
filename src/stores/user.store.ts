import { userApi } from "~/api/user.api";
import type { User } from "~/types/user";

export const useUserStore = defineStore("user", () => {
	// const loading = ref<boolean>(false);
	const users = ref<User[] | null>();

	const { data } = useAsyncData(() => userApi.getAll());

	users.value = data.value;

	return {
		users,
	};
});
