<!-- <template>
    <button :disabled="disabled" @click="onClick"     :style="buttonStyles"
    >
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Reset',
      },
      backgroundColor: {
        type: String,
        default: 'Reset',
      },
      textAlign: {
        type: String,
        default: 'Reset',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onClick() {
        this.$emit('Reset');
      },
    },
    computed: {
    buttonStyles() {
      return {
        backgroundColor: this.backgroundColor,
        textAlign:this.textAlign
      };
    },
  },
  };
  </script>
   -->
   <template>
    <button :class="btnClasses" @click="handleClick">
      <img v-if="imageUrl" :src="`/images/${imageUrl}`" alt="button icon" class="inline-block mr-2 w-5 h-5" />
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        default: 'blue' // Default is blue, can be overridden
      },
      imageUrl: {
        type: String,
        default: null // Default is null, can be overridden
      },
      handleClick: {
        type: Function,
        default: null // Default is null, can be overridden
      }
    },
    computed: {
      btnClasses() {
        return `w-full bg-${this.color}-500 hover:bg-${this.color}-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 flex items-center justify-center`;
      }
    },
    methods: {
      handleClick(event) {
        if (this.handleClick) {
          this.handleClick(event);
        }
        this.$emit('click', event);
      }
    }
  }
  </script>