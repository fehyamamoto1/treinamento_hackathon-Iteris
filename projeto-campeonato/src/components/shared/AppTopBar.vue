<template>
    <div class="app-top-bar">
        <v-app-bar color="green" app dark>
            <v-spacer />
            <v-toolbar-title>Campeonato Brasileiro ⚽</v-toolbar-title>
            <v-spacer />
        </v-app-bar>
        <v-bottom-navigation :value="value" color="green" dark app grow>
            <router-link to='/'>
                <v-btn>
                    <span>Início</span>

                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </router-link>

            <router-link to ='/clas'>
                <v-btn>
                    <span>Classificação</span>
                    <v-icon>mdi-table</v-icon>
                </v-btn>
            </router-link>

            <router-link to='/jogos'>
                <v-btn>
                    <span>Próximos</span>

                    <v-icon>mdi-soccer</v-icon>
                </v-btn>
            </router-link>

            <router-link to='/historico'>
                <v-btn>
                    <span>Histórico</span>

                    <v-icon>mdi-timetable</v-icon>
                </v-btn>
            </router-link>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data() { 
        return {
            value: 0
        }
    },
}

</script>

<style scoped>
    .app-top-bar a {
        text-decoration: none;
        display: flex;
        flex-grow: 1;
        max-width: 90px;
        
    }

</style>