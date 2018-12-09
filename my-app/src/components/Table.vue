<template>
  <v-table>
    <h1>俺の漫画大全</h1>
    <v-data-table
      :headers="headers"
      :items="mangas"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.volumes }}</td>
      </template>
    </v-data-table>
  </v-table>
</template>

<script>
import gql from 'graphql-tag'

const FeedQuery = gql`
{
  mangas {
    ...mangaFragment
  }
}
fragment mangaFragment on Manga {
  name
  id
  volumes
}
`
  export default {
    apollo: {
      mangas: {
        query: FeedQuery,
        loadingKey: 'loading'
      }
    },
    data () {
      return {
        headers: [
          {
            text: 'OrenoManga',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'ID', value: 'id' },
          { text: 'Volumes', value: 'volumes' }
        ],
        mangas: [{ id: 1, name: "test", volumes: 50 }
        ]
      }
    }
  }
</script>