<script setup>
import { ref } from "vue";
import {
  isValidEmail,
  isValidFirstName,
  isValidLastName,
  isValidPhonePrefix,
  isValidPhoneNumber,
  isValidPassword,
} from "../utils/utils";
const submitted = ref(false);
const submitHandler = async (value) => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(console.log(value), 1000));
  submitted.value = true;
};
const handleIconClick = (node, e) => {
  node.props.suffixIcon = node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
  node.props.type = node.props.type === "password" ? "text" : "password";
};
</script>
<style scoped>
.phone {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: flex-end;
}

.phone-input{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>

<template>
  <FormKit
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Register"
    @submit="submitHandler"
    :actions="false"
    #default="{ value }"
  >
    <h1 class="text-2xl font-bold mb-2">Register!</h1>
    <p class="text-sm mb-4">Please enter your details to register</p>
    <FormKit
      type="text"
      name="first_name"
      label="Your name"
      placeholder="Doe"
      validation="required|length:2,10"
    />

    <FormKit
      type="text"
      name="last_name"
      label="Your last name"
      placeholder="Jane"
      validation="required|length:2,15"
    />

    <FormKit
      type="text"
      name="email"
      label="Your email"
      placeholder="jane@example.com"
      validation="required|email"
    />

    <div class="phone">
      <FormKit
        class="phone-prefix"
        type="tel"
        name="phone_prefix"
        label="Phone number - Prefix"
        placeholder="05x"
        prefix="054"
        validation="required|matches:/^05[0-9]$/"
        :validation-messages="{
          matches: 'Phone number prefix must be in the format 05x',
        }"
        validation-visibility="dirty"
      />
      <div class="phone-input">
      <FormKit
        class="phone-input"
        type="tel"
        label="Phone number"
        name="phone_number"
        placeholder="xxxxxxx"
        validation="required|matches:/^[0-9]{7}$/"
        :validation-messages="{
          matches: 'Phone number must contain 7 digits',
        }"
        validation-visibility="dirty"
      />
      </div>
    </div>

    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:8|matches:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).+$/"
        :validation-messages="{
          matches:
            'Please include at least one special character, number, and letter',
        }"
        placeholder="Your password"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        placeholder="Confirm password"
        validation="required|confirm"
      />
    </div>

    <FormKit type="submit" label="Submit" />
  </FormKit>
  <div v-if="submitted">
    <h2 class="text-xl text-green-500">Submission successful!</h2>
  </div>
</template>
