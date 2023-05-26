
<script lang="ts" setup>
const props = defineProps({
 initialValue: {
 type: Boolean,
 required: true,
 },
})
const theValue = ref(props.initialValue);

</script>
<template>
<div>
    <k-checkbox v-model="theValue" :label="$t('sample.wierdbehavior')" />
</div>
</template>