<script>
  export default {
    name: 'SimpleSelect',


    props: {
      value: {
        default: null,
      },
    },

    methods: {
      changeSelect(){}
    }
  }
</script>

<template>
    <select
            v-on:change.prevent="$emit('changeSelect')"
            class="form-control"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
    >
        <slot></slot>
    </select>
</template>