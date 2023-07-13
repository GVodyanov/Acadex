<script setup> 

useHead({
  bodyAttrs: {
    class: 'dark-theme'
  }
})

var modalOpen = ref(false);
</script>


<template>
    <GenericNavDesktop id="desktop"/>
    <GenericNavMobile id="mobile" @modal-change="modalOpen = !modalOpen"/>


    <div id="main-wrapper" :class="(modalOpen) ? 'overflow-hidden' : ''">
      <slot />
    </div>

</template>

<style scoped>

#main-wrapper {
  margin: auto;
  max-width: 59rem;
  height: 100%;
  padding: 2rem;
}

.overflow-hidden {
  overflow: hidden;
}

#desktop {
  display: flex;
}

#mobile {
  display: none;
}

@media screen and (max-width: 1000px) {
  #main-wrapper {
    padding-left: 7rem;
  }
}

@media screen and (max-width: 600px) {
  #main-wrapper {
    padding-left: 0;
    padding-top: 4rem;
  }

  #desktop {
    display: none;
  }

  #mobile {
    display: flex;
  }
}
</style>