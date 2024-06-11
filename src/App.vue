<template>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar">
      <SidebarComponent />
    </nav>

    <div class="main">
      <NavbarComponent />

      <main class="content">
        <div class="container-fluid p-0">
          <div class="row mb-2 mb-xl-3">
            <div class="col-auto d-none d-sm-block">
              <h3>Dashboard</h3>
            </div>

            <div class="col-auto ms-auto text-end mt-n1">
              <div class="dropdown me-2 d-inline-block position-relative">
                <a class="btn btn-light bg-white shadow-sm dropdown-toggle" href="#" data-bs-toggle="dropdown"
                  data-bs-display="static">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="calendar" class="lucide lucide-calendar align-middle mt-n1">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  Today
                </a>

                <div class="dropdown-menu dropdown-menu-end">
                  <h6 class="dropdown-header">Settings</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>

              <button class="btn btn-primary shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="filter" class="lucide lucide-filter align-middle">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </button>
              <button class="btn btn-primary shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="refresh-cw" class="lucide lucide-refresh-cw align-middle">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card illustration flex-fill">
                <div class="card-body p-0 d-flex flex-fill">
                  <div class="row g-0 w-100">
                    <div class="col-6">
                      <div class="illustration-text p-3 m-1">
                        <h4 class="illustration-text">Welcome Back, Chris!</h4>
                        <p class="mb-0">AppStack Dashboard</p>
                      </div>
                    </div>
                    <div class="col-6 align-self-end text-end">
                      <img src="img/illustrations/customer-support.png" alt="Customer Support"
                        class="img-fluid illustration-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body py-4">
                  <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                      <h3 class="mb-2">$ 24.300</h3>
                      <p class="mb-2">Total Earnings</p>
                      <div class="mb-0">
                        <span class="badge badge-subtle-success me-2">
                          +5.35%
                        </span>
                        <span class="text-muted">Since last week</span>
                      </div>
                    </div>
                    <div class="d-inline-block ms-3">
                      <div class="stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="dollar-sign" class="lucide lucide-dollar-sign align-middle text-success">
                          <line x1="12" x2="12" y1="2" y2="22"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body py-4">
                  <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                      <h3 class="mb-2">43</h3>
                      <p class="mb-2">Pending Orders</p>
                      <div class="mb-0">
                        <span class="badge badge-subtle-danger me-2">
                          -4.25%
                        </span>
                        <span class="text-muted">Since last week</span>
                      </div>
                    </div>
                    <div class="d-inline-block ms-3">
                      <div class="stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="shopping-bag" class="lucide lucide-shopping-bag align-middle text-danger">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                          <path d="M3 6h18"></path>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xxl-3 d-flex">
              <div class="card flex-fill">
                <div class="card-body py-4">
                  <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                      <h3 class="mb-2">$ 18.700</h3>
                      <p class="mb-2">Total Revenue</p>
                      <div class="mb-0">
                        <span class="badge badge-subtle-success me-2">
                          +8.65%
                        </span>
                        <span class="text-muted">Since last week</span>
                      </div>
                    </div>
                    <div class="d-inline-block ms-3">
                      <div class="stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="dollar-sign" class="lucide lucide-dollar-sign align-middle text-info">
                          <line x1="12" x2="12" y1="2" y2="22"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <FooterComponent />
    </div>
  </div>
</template>

<script>
import FooterComponent from "./components/layout/FooterComponent.vue";
import SidebarComponent from "./components/layout/SidebarComponent.vue";
import NavbarComponent from "./components/layout/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  },
};
</script>

<style></style>
