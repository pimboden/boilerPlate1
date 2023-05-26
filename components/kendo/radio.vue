
<script lang="ts" setup>
const props = defineProps({
 initialValue: {
 type: Boolean,
 required: true,
 },
})
const theValue = ref(props.initialValue);
onMounted(async () => {

});
</script>
<template>
<div>
    <k-checkbox v-mode="theValue" :label="$t('sample.wierdbehavior')" />
</div>
</template>