<template>

<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto  col-xl px-sm-2 px-0 bg-white shadow-sm  mb-5 rounded">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white " style="min-height:550px">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-primary text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center" id="menu">
                    <li class="nav-item col text-center" >
                        <router-link to="/" class="nav-link align-middle px-0">
                            <i class="fab fa-buffer"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/todo" class="nav-link align-middle px-0">
                            <i class="fas fa-list-ol "></i> <span class="ms-1 d-none d-sm-inline">Todo</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/addnew" class="nav-link align-middle px-0">
                             <span class="ms-1 d-none d-sm-inline">Add New</span>
                        </router-link>
                    </li>
               
                    
                </ul>

            </div>
        </div>
       
    </div>
</div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
