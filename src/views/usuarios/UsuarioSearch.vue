<template>
    <div class="card">
        <div class="card-header">           
            <h5 class="card-title"> Buscar usuários</h5>
            <h6 class="card-subtitle text-muted">
              Use os filtros para encontrar registros
            </h6>
        </div>
        <div class="card-body">
            {{ filters }}
            <div class="row">
                <div class="col-md-1 col-sm-12">
                    <label for="id">ID:</label>
                    <input type="number" placeholder="ID" id="id" v-model="filters.id" @blur="search" class="form-control" />
                </div>

                <div class="col-md-3 col-sm-12">
                    <label for="username">Username:</label>
                    <input type="text" placeholder="Username" id="username" @blur="search" v-model="filters.username"
                        class="form-control" />
                </div>

                <div class="col-md-3 col-sm-12">
                    <label for="email">Email:</label>
                    <input type="email" placeholder="Email" id="email" @blur="search" v-model="filters.email" class="form-control" />
                </div>

                <div class="col-md-3 col-sm-12">
                    <label for="role">Role:</label>
                    <select id="role" v-model="filters.role" @change="search" class="form-select">
                        <option value="">Selecione uma role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>               

                <div class="col-md-2 pt-4 col-sm-12">
                    <label class="">Status:</label>
                    <label class="form-check form-check-inline">
                        <input class="form-check-input" v-model="filters.status" type="radio" @change="search" name="inline-radios-example" value="ATIVO">
                        <span class="form-check-label">
                            Ativo
                        </span>
                    </label>
                    <label class="form-check form-check-inline">
                        <input class="form-check-input" v-model="filters.status" @change="search" type="radio" name="inline-radios-example" value="INATIVO">
                        <span class="form-check-label">
                            Inativo
                        </span>
                    </label>                    
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    name: "UsuarioSearch",
    data() {
        return {
            filters: {
                id: '',
                username: '',
                email: '',
                status: [],
                role: ''
            }
        }
    },

    methods: {        
        search() {           
            this.$emit('search', { ...this.filters });
        }
    }
}
</script>
