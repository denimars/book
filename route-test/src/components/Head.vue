<template>
<b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

 <router-link to='/'><b-navbar-brand>Home</b-navbar-brand></router-link>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item><router-link tag="li" to='/matik'>Matik</router-link></b-nav-item>
      <b-nav-item><router-link tag="li" to='/hello'>Hello</router-link></b-nav-item>
      <b-nav-item href="/matik">matik with href</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item><router-link tag="li" to='/matik'>Matik</router-link></b-dropdown-item>
        <b-dropdown-item><router-link tag="li" to='/hello'>Hello</router-link></b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>


<script>
export default {
    name:'Head',
    
}
</script>

