<template>
    <div>
        <h1>Admin Panel - Districts</h1>
        <input
            type="text"
            name="name"
            placeholder="District Name" />

    <br>
    <button>Save</button>
    </div>
</template>

<script>
export default{
  data () {
    return {
      name: ''
    }
  }
}
