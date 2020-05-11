<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" :fill="_secondaryfill" :stroke="_secondaryfill"><circle fill="none" stroke-miterlimit="10" cx="17.5" cy="9.5" r="2.5"/> <circle fill="none" stroke-miterlimit="10" cx="9.5" cy="3.5" r="2.5"/> <path fill="none" stroke-miterlimit="10" d="M13.476,16H19c2.817,0,3,2,3,2 l-11.765,4.525c-0.787,0.303-1.665,0.26-2.419-0.117L1,19v-7h1c1.105,0,3.906,0.438,5,2l0,0h3c2.209,0,4,1.791,4,4l0,0H7" stroke-linecap="butt" :stroke="fill"/></g></svg></template>

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