<template>
    <v-main>  
        <!-- <v-btn>
          <v-btn-toggle>Show Data</v-btn-toggle> 
          <v-btn-toggle>Hide Data</v-btn-toggle>    
        </v-btn>  -->
        <h1 class="postData">User Details</h1>
        <v-card  >
          <v-card-title  >
                 <v-text-field
                   v-model="search"
                   append-icon="mdi-magnify"
                   label="Search"
                   single-line
                   hide-details
                 >Users Lists</v-text-field>
          </v-card-title>

        <!-- <v-data-table :head="head" :items="travellers" >
                <template v-slot:item="data" >
                  <tr>
                    <td> Travellers:-
                       {{data.item.travellers.name}}
                    </td>
                  </tr>
                </template>
        </v-data-table> -->

          <v-data-table :headers="headers" :items="postDetails" :search="search" class="card" >
           <template v-slot:item="data">
               <tr> 
                    <td>{{data.item.id}}</td>
                    <td>{{data.item.Title}}</td>
                    <td>{{data.item.Firstname}}</td>
                    <td>{{data.item.Lastname}}</td>
                    <td>{{data.item.EMail}}</td>
                    <td>{{data.item.Password}}</td>
                    <td>{{data.item.ConfirmPassword}}</td>
                    <td>{{data.item.MobileNumber}}</td>
                    <td>{{data.item.Organization}}</td>
                    <td>{{data.item.Designation}}</td>
                    <td>{{data.item.Address}}</td>
                    <td>{{data.item.Dob}}</td>
                    <td>{{data.item.Gender}}</td>
                    <td>{{data.item.Age}}</td>
                    <td>{{data.item.Browers}}</td>
                    <td> <DialogDetails :send="data.item.id" /> </td>
                    <td> 
                      <v-btn color="success"> 
                            <v-icon @click="edit(data.item.id)" >mdi-pencil</v-icon> 
                            Edit
                      </v-btn>
                    </td>
                    <td>
                        <!-- <v-router to="/delete-details/:id" ></v-router> -->
                          <v-btn color="error">
                              <v-icon @click="remove(data.item.id)" >mdi-delete</v-icon>
                              Delete
                          </v-btn>
                        
                    </td>
               </tr>
           </template>  
          </v-data-table>
       </v-card>
    </v-main>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import DialogDetails from './DialogDetails.vue';
Vue.use(VueAxios, axios);

  export default {
    name:'PostDetails',
    components: { DialogDetails },
    data() {
        return {
            search: "",
            display: false,
            postDetails: [],
            // travellers:[],
            showPosts: true,
            // head:[
            //   {text:'Name',value:'name'},
            // ],
            headers: [
                { text: "Id", value: "Id" },
                {
                    text: "Title",
                    align: "start",
                    filterable: true,
                    value: "Title",
                },
                { text: "Firstname", value: "Firstname" },
                { text: "Lastname", value: "Lastname" },
                { text: "EMail", value: "EMail" },
                { text: "Password", value: "Password" },
                { text: "ConfirmPassword", value: "ConfirmPassword" },
                { text: "MobileNumber", value: "MobileNumber" },
                { text: "Organization", value: "Organization" },
                { text: "Designation", value: "Designation" },
                { text: "Address", value: "Address" },
                { text: "Dob", value: "Dob" },
                { text: "Gender", value: "Gender" },
                { text: "Age", value: "Age" },
                { text: "Browers", value: "Browers" },
                { text: "Details", value: "Details" },
                { text: "Update", value: "Update" },
                { text: "Delete", value: "Delete", sortable: false },
                // { text: 'Images', value: 'Images' },
            ],
        };
    },
    methods: {
        getUsers: function () {
            axios.get(`https://passport-registration-app-default-rtdb.firebaseio.com/posts.json`).then((response) => {
                //    this.fakeData = response.data
                console.log("Get requested Data",response.data);
                this.formatePostDetails(response.data);
            }).catch((error) => {
                console.log("Error while fetching Data", error);
            }).finally(() => {
                console.log("Loading Data completed");
            });
        },
        formatePostDetails(posts) {
            for (let key in posts) {
                this.postDetails.push({ ...posts[key], id: key });
            }
            console.log("Formate Post Details",this.postDetails);
        },
        // trvellersData(){
        //       axios.get(`http://localhost:8080/travellers`).then((res)=>{
        //         console.log( "Travellers Data", res.data);
        //         this.travellers = res.data;
        //       }).catch((err)=>{
        //         console.log('Error in TRavellers data',err);
        //       })
        // },
        edit(value){
          console.log("Edit Id is",value.id);
          this.$router.push(`/edit-details/:${value.id}`);
        },
        remove(id){
            alert('User Data Deleted',id)
            //  this.$router.push(`/delete-details/:${value.id}`);
             axios.delete("https://passport-registration-app-default-rtdb.firebaseio.com/posts/"+id).then((id)=>{
              console.log('User Deleted',id);
              alert("User Deleted")
             }).catch((err)=>{
              console.log('Error in Deleting User',err);
             })
        }
    },
    created() {
        this.getUsers();  
 
    },
    updated(){
        this.edit();
    },
    // unmounted(id){
    //     this.remove(id);
    // },
   

}
</script>

<style scoped>

   .postData{
    margin-top: 7rem;
    padding-left: 8px;
    background-color: burlywood;
    border-radius: 5px;
   }

  a{
    text-decoration: none;
  }


</style>