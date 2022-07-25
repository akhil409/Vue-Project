<template>
     <v-container>
          <v-main>
              <v-card elevation="30" class="card">
                   <v-card-title>
                           <h2>Login Form</h2>
                   </v-card-title>
                   <v-card-text>
                            <v-text-field type="text" placeholder="Email address or phone number"></v-text-field>
                            <v-text-field type="text" placeholder="Password"></v-text-field>
                            <v-btn color="primary" @click="loggedIn" class="form-control"  >Log In</v-btn>
                            <v-router-link color="primary" to="/" class="log" >Forgotten password?</v-router-link>
                   </v-card-text>
                   <hr>
                   <v-card-actions class="button">
                            <v-btn @click="createAccount" class="success" >Create New Account</v-btn>
                   </v-card-actions>
              </v-card>
          </v-main>
     </v-container>
</template>

<script>
export default {
    name:'LoginForm',
 
    data(){
        return{

        }
    },
    methods:{
        createAccount(){
            
            this.$router.push(`/main-component`)
        },
        loggedIn(){
            alert('You are Successfully LoggedIn');
            this.$router.push(`/post-details`)
        }
    }

}
</script>

<style scoped>
   a{
    text-decoration: none;
   }

   .card{
      max-width: 500px;
      flex-direction: column;
      margin-top: 7rem;
      margin-left: 19rem;
      border-radius: 7px;
   }

   .log{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    color: blue; 
   }

   .button{
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    
   }

</style>