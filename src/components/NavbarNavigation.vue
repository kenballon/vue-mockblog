<template>
   <header class="d-flex justify-space-between">
      <div class="text-logo-wrapper">

         <RouterLink :to="{ name: 'Home' }"><span>The Studio Blog</span></RouterLink>
      </div>
      <nav class="d-flex align-items-center gap-2">
         <!-- <RouterLink :to="{ name: 'Home' }">Home</RouterLink> -->
         <RouterLink :to="{ name: 'CreateBlogPost' }">Create Blog</RouterLink>
      </nav>
   </header>
</template>
<script>

</script>
<style >
header {
   position: sticky;
   top: 24px;
   z-index: 1;

   padding: 1.5rem 1.125rem;
   background-color: white;
   border-radius: 4px;
   box-shadow: hsla(0, 100%, 11%, 0.1) 0px 10px 15px -3px, hsla(331, 80%, 12%, 0.05) 0px 4px 6px -2px;
}

.text-logo-wrapper span {
   font-family: var(--ff-tertiary);
   font-weight: 300;
   font-size: 24px;
   color: var(--color-text-100);
}

header nav a {
   text-transform: uppercase;
   font-size: 14px;
   font-weight: 500;
   letter-spacing: 1px;
}

header nav a:hover {
   color: var(--color-900-dark);
}
</style>