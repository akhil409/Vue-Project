<template>
      <div class="text-center">
           <v-dialog v-model="dialog" max-width="500px" >
                  <template v-slot:activator="{ on, attrs }">
                       <v-btn color="secondary" dark v-bind="attrs" v-on="on" @click="popUpData">Details</v-btn>
                  </template>

                    <v-card>
                        <v-card-title class="text-h5 grey lighten-2"> 
                          Title:- {{popUpData.Title}}
                        </v-card-title>

                        <v-card-text>
                            <v-list class="list-items">
                                Firstname:-{{popUpData.Firstname}}
                                <v-divider class="divider"></v-divider>
                                Lastname:- {{popUpData.Lastname}}
                                <v-divider class="divider"></v-divider>
                                EMail:- {{popUpData.EMail}}
                                <v-divider class="divider"></v-divider>
                                Password:- {{popUpData.Password}}
                                <v-divider class="divider"></v-divider>
                                ConfirmPassword:- {{popUpData.ConfirmPassword}}
                                <v-divider class="divider"></v-divider>
                                MobileNumber:- {{popUpData.MobileNumber}}
                                <v-divider class="divider"></v-divider>
                                Organization:- {{popUpData.Organization}}
                                <v-divider class="divider"></v-divider>
                                Designation:- {{popUpData.Designation}}
                                <v-divider class="divider"></v-divider>
                                Address:- {{popUpData.Address}}
                                <v-divider class="divider"></v-divider>
                                Dob:- {{popUpData.Dob}}
                                <v-divider class="divider"></v-divider>
                                Gender:- {{popUpData.Gender}}
                                <v-divider class="divider"></v-divider>
                                Age:- {{popUpData.Age}}
                                <v-divider class="divider"></v-divider>
                                Browers:- {{popUpData.Browers}}


                            </v-list>
                        </v-card-text>
                            
                       
                        <v-card-actions>
                            <v-btn color="black white--text" text @click="dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
           </v-dialog>
      </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'DialogDetails',
    props:['send'],

    data(){
        return{
                dialog:false,
                poppedData:[{}],
        }
    },
    methods:{
        popUpData: function () {
            axios.get(`https://passport-registration-app-default-rtdb.firebaseio.com/posts.json/${this.send}`).then((response) => {
                this.poppedData = response.data
                console.log(response.data);
            }).catch((error) => {
                console.log("Error while fetching Data", error);
            }).finally(() => {
                console.log("Loading Data completed");
            });
        },
    }

}
</script>

<style scooped>
   .list-items{
    margin: 20px;
   }

   .divider{
    margin: 10px;
   }
</style>