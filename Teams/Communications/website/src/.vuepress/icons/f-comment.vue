<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" :fill="_secondaryfill" :stroke="_secondaryfill"><path fill="none" stroke-miterlimit="10" d="M20.4,16.8 C22,15.2,23,13.2,23,11c0-5-4.9-9-11-9S1,6,1,11c0,5,4.9,9,11,9c1.1,0,2.1-0.1,3.1-0.4L21,22L20.4,16.8z" :stroke="fill"/> <line fill="none" stroke-miterlimit="10" x1="8" y1="9" x2="16" y2="9"/> <line fill="none" stroke-miterlimit="10" x1="8" y1="13" x2="13" y2="13"/></g></svg></template>

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