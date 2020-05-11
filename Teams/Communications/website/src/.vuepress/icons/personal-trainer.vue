<template><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" :fill="_secondaryfill" :stroke="_secondaryfill"><line x1="8" y1="11" x2="8" y2="23" fill="none" stroke-miterlimit="10" stroke-linecap="butt" :stroke="fill"/> <line x1="16" y1="11" x2="16" y2="23" fill="none" stroke-miterlimit="10" stroke-linecap="butt" :stroke="fill"/> <path d="M19,18l1.491-2.237a1,1,0,0,0-.207-1.336L16,11H8L3.716,14.427a1,1,0,0,0-.207,1.336L5,18" fill="none" stroke-miterlimit="10" :stroke="fill"/> <circle cx="12" cy="4" r="3" fill="none" stroke-miterlimit="10" :stroke="fill"/></g></svg></template>

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