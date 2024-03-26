<script setup lang="ts">
// set title
useHead({
	titleTemplate: "%s - Auth Layout",
	link: [
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
			crossorigin: "",
		},
	],
});
</script>
<template>
	<div>
		<h1>Auth Layouts</h1>
		<slot />
	</div>
</template>
