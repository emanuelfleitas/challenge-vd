<template>
    
    <CharactersTable />

</template>

<script>
// @ is an alias to /src
import CharactersTable from '@/views/Characters/CharactersTable.vue'
import Header from '@/components/Navbar/Header.vue'

export default {
  name: 'Home',
  components: {
    CharactersTable,
    Header
  }
}
</script>
