<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
				{{ response }}
			</v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "HelloWorld",

    data: () => ({
		response: ''
	}),

	mounted() {
		this.fetchStart()
	},

	methods: {
		async fetchStart() {
			const response = await axios.get(`http://localhost:3000`)
			this.response = response.data.message
		}
	}
};
</script>
