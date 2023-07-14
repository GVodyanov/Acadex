<template>
  <div id="home-wrapper">
    <HomeTitle />
    <GenericInput />
    <div id="description-wrapper">
      <HomeDescription title="What is Acadex?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      <HomeDescription title="Who is it for?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      <HomeDescription title="How do I contribute?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
    </div>
  </div>
</template>

<style scoped>
#home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 2rem;
}

#description-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: nowrap;
}

@media screen and (max-width: 1000px) {
  #description-wrapper {
    flex-wrap: wrap;
  }
}</style>