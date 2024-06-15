<template>
    <div class="col-12 col-sm-6 col-xxl-3 d-flex">
        <div class="card" :class="classeCard">
            <div class="card-body py-4">
                <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                        <h3 class="mb-2">{{ number }}</h3>
                        <p class="mb-2">{{ title }}</p>
                        <div class="mb-0">
                            <span class="text-muted">{{ message }}</span>
                        </div>
                    </div>
                    <div class="d-inline-block ms-3">
                        <div class="stat">
                            <i :class="icone"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        title: String,
        message: String,
        number: Number,
        icone: String,
        classeCard: {
            type: String,
            default: 'flex-fill'
        }
    }
}
</script>