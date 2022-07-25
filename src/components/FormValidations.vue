<template>
       <v-container class="form">
              <v-row>
                  <v-col>
                       <v-form ref="signUpForm" v-model="formValidity" @submit.prevent="submitForm">
                            <h1 class="text center">Vuelidate Submit Form</h1>
                            <hr>
                            <v-text-field label="Title" v-model="title" :rules="titleRule" required ></v-text-field>

                            <v-text-field label="Firstname" v-model="firstName" ></v-text-field>

                            <v-text-field label="Lastname" v-model="lastName"></v-text-field>

                            <v-text-field label="Email" type="email" v-model="email" :rules="emailRule" required ></v-text-field>

                            <v-text-field label="Mobile Number" type="number" v-model="mobileNumber" ></v-text-field>

                            <v-text-field label="Organization" v-model="organization" ></v-text-field> 

                            <v-text-field label="Designation" v-model="designation" ></v-text-field>    

                            <v-textarea label="Address" v-model="address" ></v-textarea>

                            <v-text-field label="Password" v-model="password" ></v-text-field>

                            <v-text-field label="Confirm Password" v-model="confirmPassword" ></v-text-field>                      

                            <v-autocomplete label="Which browser you use?" :items="browers" ></v-autocomplete>

                            <v-file-input  label="Attach Profile picture"  required></v-file-input>

                            <v-text-field v-model="dob" label="DOB" readonly></v-text-field>

                            <v-date-picker v-model="dob" type="date" class="datePicker"  ></v-date-picker>

                            <v-checkbox label="Agree to terms & conditions" v-model="agreeToTerms" :rules="agreeToTermsRules" required ></v-checkbox>

                            <v-btn class="mr-4" type="submit" color="primary" :disabled="!formValidity"  >Submit</v-btn>
                            <v-btn color="success" class="mr-4" @click="validateForm">Validate Form</v-btn>
                            <v-btn class="mr-4" color="warning" @click="resetValidation" >Reset Validation</v-btn>

                            <v-btn  color="error" @click="reset">Reset</v-btn>
                       </v-form>
                  </v-col>
              </v-row>
       </v-container>
</template>

<script>
export default {
    name:'FormValidations',
    data(){
        return{
            agreeToTerms:false,
            agreeToTermsRules:[
                value=> !!value || 'You should accept Terms and conditions for creating an account'
            ],
            title:'',
            titleRule:[
                value => !!value || 'Name is required',
                value => value.length >= 3 || 'Minimum length should be 3',
                // value => value.lenght <=15 ||  'Maximum length should be 15',

            ],
            email:'',
            emailRule:[
                value => !!value || 'Email is required',
                value => value.indexOf('@') !== 0 || 'Email Should have a username.',
                value => value.includes('@') || 'Email should include an @ symbol.',
                value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain a valid domain.',
                value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extension.'
                
            ],
            formValidity:false,
             dob:'',
             browers:['Chrome','Firefox','Safari','Edge','Brave'],
             firstName:'',
             lastName:'',
             mobileNumber:'',
             organization:'',
             designation:'',
             address:'',
             password:'',
             confirmPassword:''

        }
    },
    methods:{
        submitForm(){
            alert('Form Submitted Successfully')
            console.log(`The submitted Form Data is ${this.title} ${this.firstName} ${this.lastName} ${this.email} ${this.mobileNumber} ${this.organization} ${this.designation} ${this.address} ${this.password} ${this.confirmPassword}`)
        },
         resetValidation(){
            this.$refs.signUpForm.resetValidation()
         },
         reset(){
            this.$refs.signUpForm.reset()  
         },
         validateForm(){
            this.$refs.signUpForm.validate()
         }
    }

}
</script>

<style scoped>
  .form{
     max-width: 600px;
     border: 1px solid grey;
     border-radius: 5px;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     background-color: white;
     margin-top: 6rem;
  }

  .datePicker{
     max-width: 300px;
  }

</style>