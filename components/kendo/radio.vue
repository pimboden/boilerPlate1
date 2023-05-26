<script lang="ts" setup>
const props = defineProps({
  initialValue: {
 type: String,
 required: false,
 },
})

const selectedValue = ref(props.initialValue);

const handleChange = (e)=>{
  selectedValue.value = e.value
}
onMounted(async () => {
});
</script>
<template>
   <div>
        <k-radio-button
            name="group1"
            value="first"
            :checked="selectedValue==='first'"
            @change="handleChange"
            :label="$t('radio.first')"
        />
        <k-radio-button
            name="group1"
            value="second"
            :checked="selectedValue==='second'"
            @change="handleChange"
            :label="$t('radio.second')"
        />
        <k-radio-button
            name="group1"
            value="third"
            :checked="selectedValue==='third'"
            @change="handleChange"
            :label="$t('radio.third')"
        />
    </div>
</template>