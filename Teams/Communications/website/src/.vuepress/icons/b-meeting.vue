<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" :fill="_secondaryfill" :stroke="_secondaryfill"><polygon fill="none" stroke-miterlimit="10" points=" 23,1 11,1 11,11 16,7 23,7 "/> <path fill="none" stroke-miterlimit="10" d="M10,21.836 c0-0.604-0.265-1.179-0.738-1.554C8.539,19.708,7.285,19,5.5,19s-3.039,0.708-3.762,1.282C1.265,20.657,1,21.232,1,21.836V23h9 V21.836z" :stroke="fill"/> <circle fill="none" stroke-miterlimit="10" cx="5.5" cy="13.5" r="2.5" :stroke="fill"/> <path fill="none" stroke-miterlimit="10" d="M23,21.836 c0-0.604-0.265-1.179-0.738-1.554C21.539,19.708,20.285,19,18.5,19s-3.039,0.708-3.762,1.282C14.265,20.657,14,21.232,14,21.836V23 h9V21.836z" :stroke="fill"/> <circle fill="none" stroke-miterlimit="10" cx="18.5" cy="13.5" r="2.5" :stroke="fill"/></g></svg></template>

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