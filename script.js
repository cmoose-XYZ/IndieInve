Vue.component("indinv-supply", {
   props: ["name", "goods", "source", "amnt", "measurement"],

   template: `
      <v-layout row wrap class="supply">

         <!-- UNIT PANEL -->
         <v-flex xs2 style="display: flex;">
            <v-card class="supply-units">
               <p v-on:click="setAmount"><strong>{{amount}}</strong><br><em>{{measurement}}</em></p>
            </v-card>
         </v-flex>

         <!-- SUPPLY PANEL -->
         <v-flex xs9>
            <v-card class="supply-panel">
               <v-layout row wrap>
                  <v-flex xs10 class="supply-name">{{name}}</v-flex>
                  <v-flex xs2 class="supply-increase" v-on:click="increaseAmount">+</v-flex>
               </v-layout>

               <v-layout row wrap>
                  <v-flex xs10 class="supply-info">
                     used in:<br>{{goods}}
                     <br>
                     get from:<br>{{source}}
                  </v-flex>
                  <v-flex xs2 class="supply-decrease" v-on:click="decreaseAmount">-</v-flex>
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
   `,

   data: function() {
      return {
         amount: this.amnt
      }
   },

   methods: {
      setAmount: function() {
         let amnt = prompt("Enter How Much Of This Supply You Have:");
         if( amnt != false && amnt != null && amnt != undefined ) {
            if( typeof(amnt) != "number" ) alert("Supply Amount MUST Be A Number\n\n[you entered: " + amnt + "]");
            else this.amount = amnt;
         }
      },
      increaseAmount: function() { this.amount++; },
      decreaseAmount: function() { this.amount--; }
   }
})

Vue.component("indinv-header", {
   template: `
      <v-container fluid grid-list-xs>
         <v-layout row id="header">
            <v-flex xs4>SUPPLIES |</v-flex>
            <v-flex xs3>GOODS |</v-flex>
            <v-flex xs4>HISTORY</v-flex>
            <v-flex xs1>|?</v-flex>
         </v-layout>
         <br><br><br><br><br><br><br><br>
      </v-container>
   `
})

new Vue({

   el: '#app',
   
})