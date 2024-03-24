<script setup lang="ts">
import { z } from "zod";
const toast = useToast();

const schema = z.object({
	email: z.string().email("Invalid email"),
	password: z.string().min(8, "Must be at least 8 characters"),
});

const state = reactive({
	email: undefined,
	password: undefined,
});

async function onSubmit() {
	// Do something with event.data
	console.log(state);
	toast.add({
		title: "Success",
		description: `Email: ${state.email} Password: ${state.password}`,
		color: "green",
		icon: "i-heroicons-check-circle",
	});
}
</script>

<template>
	<UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
		<UFormGroup label="Email" name="email">
			<UInput v-model="state.email" />
		</UFormGroup>

		<UFormGroup label="Password" name="password">
			<UInput v-model="state.password" type="password" />
		</UFormGroup>

		<UButton type="submit"> Submit </UButton>
	</UForm>
</template>
