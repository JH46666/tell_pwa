<template>
  <p>Hello, <span class="hljs-variable">${this.name}</span>!</p>
</template>
<script>
  import { LitElement, html, property, customElement } from 'lit-element';
  @customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';




</script>