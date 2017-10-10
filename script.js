Vue.component("indinv-supply", {
   props: [],

   template: `
      <v-layout row wrap class="supply">

         <!-- UNIT PANEL -->
         <v-flex xs2 style="display: flex;">
            <v-card class="supply-units">
               <strong>999+</strong><br><em>units</em>
            </v-card>
         </v-flex>

         <!-- SUPPLY PANEL -->
         <v-flex xs9>
            <v-card class="supply-panel">
               <v-layout row wrap>
                  <v-flex xs10 class="supply-name">PRODUCT NAME<br>&nbsp;</v-flex>
                  <v-flex xs2 class="supply-increase">+</v-flex>
               </v-layout>

               <v-layout row wrap>
                  <v-flex xs10 class="supply-info">
                     used in:<br>item, item, item
                     <br>
                     get from:<br>https://www.shop.link/item
                  </v-flex>
                  <v-flex xs2 class="supply-decrease">-</v-flex>
               </v-layout>
            </v-card>
         </v-flex>

         <!-- SETTINGS PANEL -->
         <v-flex xs1 style="display: flex;">
            <v-card style="width: 100%;" class="supply-settings">
               <br>
               &nbsp;<v-icon x-large>reorder</v-icon>&nbsp;&nbsp;
               <br>
            </v-card>
         </v-flex>

      </v-layout>
   `
})

new Vue({

   el: '#app'
   
})