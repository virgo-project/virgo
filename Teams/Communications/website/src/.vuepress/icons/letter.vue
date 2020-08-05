<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" :fill="_secondaryfill" :stroke="_secondaryfill"><path d="M1,13v6a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V13" fill="none" stroke-miterlimit="10"/> <path d="M23,8V5a2,2,0,0,0-2-2H3A2,2,0,0,0,1,5V8l11,6Z" fill="none" stroke-miterlimit="10" :stroke="fill"/></g></svg></template>

<script>
export default {
	props: {
		fill: {
			type: String,
			default: "currentColor"
		},
		secondaryfill: {
			type: String
		}
	},
	computed: {
		_secondaryfill: function () {
			return this.secondaryfill || this.fill
		}
	}
}
</script>