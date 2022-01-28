<template>
    <div>
        <h1>Séries</h1>

        <SerieForm @updating="updateSerie" :modify="modify" :serie="new_serie"  @saving="create"  :new_id="new_id"/>

        <div class="row">
            <CardObj class="my_card"
                    v-for="serie of l_series"
                    :key="serie.id"
                    :obj="serie"
                     @status="changeStatus"
                     @ask-modify="sendSerieToModify"
            />
        </div>
    </div>
</template>

<script>
    import CardObj from "../components/CardObj";
    import SerieForm from "../components/SerieForm";
    export default {
        name: 'Series',
        components: {SerieForm, CardObj},
        data: function () {
            console.log('----------------data');
            return {
                modify: false,
                new_serie: undefined,
                l_series : [
                    {
                        id: 1,
                        img: 'https://archzine.fr/wp-content/uploads/2019/06/natasha-lyonne-russian-doll-poupe%CC%81e-russe-nadia-netflix-saison-2-twitter-news-actu-infos-lifestyle-se%CC%81ries-tv.jpg',
                        name: 'Russian Dolls',
                        resume: 'Poupée russe est une série TV de Natasha Lyonne et Amy Poehler avec Natasha Lyonne (Nadia), Charlie Barnett (Alan). ',
                        isWatched: true
                    },
                    {
                        id: 2,
                        img: 'https://www.netflix-news.com/wp-content/uploads/2019/02/AAAABYAWJxDfY4VS1iieK3jetpnWs23C56y8bnIwidzSgSpcPwNMp7vLSoF_W874ePZ3ITQ_UlQO8lRvWuPjp2cMU5702sD_wS6rBBA3CILOq1n-WYZWlWxs1s2sigFuRJDHHlLwrcX5_A-600x337.jpg',
                        name: 'Russian Dolls',
                        resume: 'Poupée russe est une série TV de Natasha Lyonne et Amy Poehler avec Natasha Lyonne (Nadia), Charlie Barnett (Alan). ',
                        isWatched: false
                    }
                ]
            }
        },
        computed: {
            new_id: function () {
                return this.l_series.length + 1;
            }
        },
        methods: {
            create: function (value) {
                this.l_series.push(value);
            },
            changeStatus: function (id, obj) {
                //const index = this.l_series.findIndex(s => s.id = id);
                //this.l_series[index].isWatched = !this.l_series[index].isWatched;
                obj.isWatched = !obj.isWatched;
            },
            sendSerieToModify: function (obj) {
                const {...copy} = obj;
                this.new_serie = copy;
                this.modify = true;
            },
            updateSerie: function (obj) {
                const index = this.l_series.findIndex(s => s.id === obj.id);
                this.l_series[index] = obj;
                this.new_serie = undefined;
                this.modify = false;
            }
        }
    }
</script>

<style scoped >
    .row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .my_card {
        width: 30%;}
</style>
