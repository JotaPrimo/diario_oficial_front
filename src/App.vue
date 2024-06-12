<template>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar">
      <div class="sidebar-content js-simplebar simplebar-scrollable-y" data-simplebar="init">
        <div class="simplebar-wrapper" style="margin: 0px">
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px">
              <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                style="height: 100%; overflow: hidden scroll">
                <div class="simplebar-content" style="padding: 0px">
                  <a class="sidebar-brand" href="/">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20"
                      xml:space="preserve">
                      <path d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
              C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"></path>
                      <path d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"></path>
                      <path d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
              c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"></path>
                    </svg>

                    <span class="align-middle me-3">AppStack</span>
                  </a>

                  <ul class="sidebar-nav">
                    <li class="sidebar-header">Navigation</li>
                    <li class="sidebar-item active">
                      <a data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="sliders" class="lucide lucide-sliders align-middle">
                          <line x1="4" x2="4" y1="21" y2="14"></line>
                          <line x1="4" x2="4" y1="10" y2="3"></line>
                          <line x1="12" x2="12" y1="21" y2="12"></line>
                          <line x1="12" x2="12" y1="8" y2="3"></line>
                          <line x1="20" x2="20" y1="21" y2="16"></line>
                          <line x1="20" x2="20" y1="12" y2="3"></line>
                          <line x1="2" x2="6" y1="14" y2="14"></line>
                          <line x1="10" x2="14" y1="8" y2="8"></line>
                          <line x1="18" x2="22" y1="16" y2="16"></line>
                        </svg>
                        <span class="align-middle">Dashboards</span>
                        <span class="badge badge-sidebar-primary">5</span>
                      </a>
                      <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse show"
                        data-bs-parent="#sidebar">
                        <li class="sidebar-item active">
                          <a class="sidebar-link" href="/dashboard-default">Default</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/dashboard-analytics">Analytics</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/dashboard-saas">SaaS</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/dashboard-social">Social</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/dashboard-crypto">Crypto</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-header">Apps</li>
                    <li class="sidebar-item">
                      <a data-bs-target="#ecommerce" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="shopping-bag" class="lucide lucide-shopping-bag align-middle">
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                          <path d="M3 6h18"></path>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span class="align-middle">E-Commerce</span>
                      </a>
                      <ul id="ecommerce" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ecommerce-products">
                            Products
                            <span class="badge badge-sidebar-primary">New</span>
                          </a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ecommerce-products-details">
                            Product Details
                            <span class="badge badge-sidebar-primary">New</span>
                          </a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ecommerce-orders">
                            Orders
                            <span class="badge badge-sidebar-primary">New</span>
                          </a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ecommerce-customers">Customers</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ecommerce-invoice">Invoice</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ecommerce-pricing">Pricing</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#projects" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="layout" class="lucide lucide-layout align-middle">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M3 9h18"></path>
                          <path d="M9 21V9"></path>
                        </svg>
                        <span class="align-middle">Projects</span>
                      </a>
                      <ul id="projects" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/projects-overview">Overview</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/projects-details">Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="/chat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="list" class="lucide lucide-list align-middle">
                          <line x1="8" x2="21" y1="6" y2="6"></line>
                          <line x1="8" x2="21" y1="12" y2="12"></line>
                          <line x1="8" x2="21" y1="18" y2="18"></line>
                          <line x1="3" x2="3.01" y1="6" y2="6"></line>
                          <line x1="3" x2="3.01" y1="12" y2="12"></line>
                          <line x1="3" x2="3.01" y1="18" y2="18"></line>
                        </svg>
                        <span class="align-middle">Chat</span>
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="/file-manager">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="files" class="lucide lucide-files align-middle">
                          <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                          <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path>
                          <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"></path>
                        </svg>
                        <span class="align-middle">File Manager</span>
                        <span class="badge badge-sidebar-primary">New</span>
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="/calendar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="calendar" class="lucide lucide-calendar align-middle">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span class="align-middle">Calendar</span>
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#email" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="mail" class="lucide lucide-mail align-middle">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span class="align-middle">Email</span>
                        <span class="badge badge-sidebar-primary">New</span>
                      </a>
                      <ul id="email" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/email-inbox">Inbox</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/email-details">Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#tasks" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="trello" class="lucide lucide-trello align-middle">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <rect width="3" height="9" x="7" y="7"></rect>
                          <rect width="3" height="5" x="14" y="7"></rect>
                        </svg>
                        <span class="align-middle">Tasks</span>
                      </a>
                      <ul id="tasks" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/tasks-list">
                            List
                            <span class="badge badge-sidebar-primary">New</span>
                          </a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/tasks-kanban">Kanban</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-header">Pages</li>
                    <li class="sidebar-item">
                      <a data-bs-target="#pages" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="layout" class="lucide lucide-layout align-middle">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M3 9h18"></path>
                          <path d="M9 21V9"></path>
                        </svg>
                        <span class="align-middle">Pages</span>
                      </a>
                      <ul id="pages" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/pages-profile">Profile</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/pages-settings">Settings</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/pages-blank">Blank Page</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#auth" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="users" class="lucide lucide-users align-middle">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span class="align-middle">Auth</span>
                        <span class="badge badge-sidebar-secondary">Special</span>
                      </a>
                      <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-sign-in">Sign In</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-sign-in-cover">Sign In Cover</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-sign-up">Sign Up</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-sign-up-cover">Sign Up Cover</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-reset-password">Reset Password</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-reset-password-cover">Reset Password Cover</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-lock-screen">Lock Screen</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-lock-screen-cover">Lock Screen Cover</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-2fa">2FA</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-2fa-cover">2FA Cover</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-404">404 Page</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/auth-500">500 Page</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="/landing" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="layout-template" class="lucide lucide-layout-template align-middle">
                          <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                          <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                          <rect width="5" height="7" x="16" y="14" rx="1"></rect>
                        </svg>
                        <span class="align-middle">Landing</span>
                        <span class="badge badge-sidebar-primary">New</span>
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#docs" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="book-open" class="lucide lucide-book-open align-middle">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span class="align-middle">Documentation</span>
                      </a>
                      <ul id="docs" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/docs-introduction">Introduction</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/docs-installation">Getting Started</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/docs-customization">Customization</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/docs-plugins">Plugins</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/docs-changelog">Changelog</a>
                        </li>
                      </ul>
                    </li>

                    <li class="sidebar-header">Tools &amp; Components</li>
                    <li class="sidebar-item">
                      <a data-bs-target="#ui" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="grid" class="lucide lucide-grid align-middle">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M3 9h18"></path>
                          <path d="M3 15h18"></path>
                          <path d="M9 3v18"></path>
                          <path d="M15 3v18"></path>
                        </svg>
                        <span class="align-middle">UI Elements</span>
                      </a>
                      <ul id="ui" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-alerts">Alerts</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-buttons">Buttons</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-cards">Cards</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-carousel">Carousel</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-embed-video">Embed Video</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-general">General
                            <span class="badge badge-sidebar-primary">10+</span></a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-grid">Grid</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-modals">Modals</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-offcanvas">Offcanvas</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-placeholders">Placeholders</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-tabs">Tabs</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/ui-typography">Typography</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#icons" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="heart" class="lucide lucide-heart align-middle">
                          <path
                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                          </path>
                        </svg>
                        <span class="align-middle">Icons</span>
                        <span class="badge badge-sidebar-primary">1500+</span>
                      </a>
                      <ul id="icons" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/icons-lucide">Lucide</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/icons-font-awesome">Font Awesome</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#forms" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="check-square" class="lucide lucide-check-square align-middle">
                          <path d="m9 11 3 3L22 4"></path>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span class="align-middle">Forms</span>
                      </a>
                      <ul id="forms" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-layouts">Layouts</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-basic-inputs">Basic Inputs</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-input-groups">Input Groups</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-floating-labels">Floating Labels</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="/tables">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="list" class="lucide lucide-list align-middle">
                          <line x1="8" x2="21" y1="6" y2="6"></line>
                          <line x1="8" x2="21" y1="12" y2="12"></line>
                          <line x1="8" x2="21" y1="18" y2="18"></line>
                          <line x1="3" x2="3.01" y1="6" y2="6"></line>
                          <line x1="3" x2="3.01" y1="12" y2="12"></line>
                          <line x1="3" x2="3.01" y1="18" y2="18"></line>
                        </svg>
                        <span class="align-middle">Tables</span>
                      </a>
                    </li>

                    <li class="sidebar-header">Plugins &amp; Addons</li>
                    <li class="sidebar-item">
                      <a data-bs-target="#forms-plugins" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="check-square" class="lucide lucide-check-square align-middle">
                          <path d="m9 11 3 3L22 4"></path>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span class="align-middle">Form Plugins</span>
                      </a>
                      <ul id="forms-plugins" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-advanced-inputs">Advanced Inputs</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-editors">Editors</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-validation">Validation</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/forms-wizard">Wizard</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#datatables" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="list" class="lucide lucide-list align-middle">
                          <line x1="8" x2="21" y1="6" y2="6"></line>
                          <line x1="8" x2="21" y1="12" y2="12"></line>
                          <line x1="8" x2="21" y1="18" y2="18"></line>
                          <line x1="3" x2="3.01" y1="6" y2="6"></line>
                          <line x1="3" x2="3.01" y1="12" y2="12"></line>
                          <line x1="3" x2="3.01" y1="18" y2="18"></line>
                        </svg>
                        <span class="align-middle">DataTables</span>
                      </a>
                      <ul id="datatables" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/datatables-responsive">Responsive Table</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/datatables-buttons">Table with Buttons</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/datatables-column-search">Column Search</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/datatables-fixed-header">Fixed Header</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/datatables-multi">Multi Selection</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/datatables-ajax">Ajax Sourced Data</a>
                        </li>
                      </ul>
                    </li>

                    <li class="sidebar-item">
                      <a data-bs-target="#charts" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="pie-chart" class="lucide lucide-pie-chart align-middle">
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                        </svg>
                        <span class="align-middle">Charts</span>
                        <span class="badge badge-sidebar-primary">New</span>
                      </a>
                      <ul id="charts" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/charts-chartjs">Chart.js</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/charts-apexcharts">ApexCharts
                            <span class="badge badge-sidebar-primary">New</span></a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a class="sidebar-link" href="/notifications">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="bell" class="lucide lucide-bell align-middle">
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                        <span class="align-middle">Notifications</span>
                      </a>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#maps" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="map-pin" class="lucide lucide-map-pin align-middle">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span class="align-middle">Maps</span>
                      </a>
                      <ul id="maps" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/maps-google">Google Maps</a>
                        </li>
                        <li class="sidebar-item">
                          <a class="sidebar-link" href="/maps-vector">Vector Maps</a>
                        </li>
                      </ul>
                    </li>
                    <li class="sidebar-item">
                      <a data-bs-target="#multi" data-bs-toggle="collapse" class="sidebar-link collapsed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="share-2" class="lucide lucide-share-2 align-middle">
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                        </svg>
                        <span class="align-middle">Multi Level</span>
                      </a>
                      <ul id="multi" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                          <a data-bs-target="#multi-2" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            Two Levels
                          </a>
                          <ul id="multi-2" class="sidebar-dropdown list-unstyled collapse">
                            <li class="sidebar-item">
                              <a class="sidebar-link" data-bs-target="#">Item 1</a>
                              <a class="sidebar-link" data-bs-target="#">Item 2</a>
                            </li>
                          </ul>
                        </li>
                        <li class="sidebar-item">
                          <a data-bs-target="#multi-3" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            Three Levels
                          </a>
                          <ul id="multi-3" class="sidebar-dropdown list-unstyled collapse">
                            <li class="sidebar-item">
                              <a data-bs-target="#multi-3-1" data-bs-toggle="collapse" class="sidebar-link collapsed">
                                Item 1
                              </a>
                              <ul id="multi-3-1" class="sidebar-dropdown list-unstyled collapse">
                                <li class="sidebar-item">
                                  <a class="sidebar-link" data-bs-target="#">Item 1</a>
                                  <a class="sidebar-link" data-bs-target="#">Item 2</a>
                                </li>
                              </ul>
                            </li>
                            <li class="sidebar-item">
                              <a class="sidebar-link" data-bs-target="#">Item 2</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div class="sidebar-cta">
                    <div class="sidebar-cta-content">
                      <strong class="d-inline-block mb-2">Monthly Sales Report</strong>
                      <div class="mb-3 text-sm">
                        Your monthly sales report is ready for download!
                      </div>

                      <div class="d-grid">
                        <a href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/"
                          class="btn btn-primary" target="_blank">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="simplebar-placeholder" style="width: 260px; height: 1657px"></div>
        </div>
        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
          <div class="simplebar-scrollbar" style="width: 0px; display: none"></div>
        </div>
        <div class="simplebar-track simplebar-vertical" style="visibility: visible">
          <div class="simplebar-scrollbar" style="
              height: 548px;
              transform: translate3d(0px, 0px, 0px);
              display: block;
            "></div>
        </div>
      </div>
    </nav>
    <div class="main">
      <nav class="navbar navbar-expand navbar-bg">
        <a class="sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>

        <form class="d-none d-sm-inline-block">
          <div class="input-group input-group-navbar">
            <input type="text" class="form-control" placeholder="Search projects…" aria-label="Search" />
            <button class="btn" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                data-lucide="search" class="lucide lucide-search align-middle">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </div>
        </form>

        <ul class="navbar-nav">
          <li class="nav-item px-2 dropdown d-none d-sm-inline-block">
            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Mega menu
            </a>
            <div class="dropdown-menu dropdown-menu-start dropdown-mega" aria-labelledby="servicesDropdown">
              <div class="d-md-flex align-items-start justify-content-start">
                <div class="dropdown-mega-list">
                  <div class="dropdown-header">UI Elements</div>
                  <a class="dropdown-item" href="#">Alerts</a>
                  <a class="dropdown-item" href="#">Buttons</a>
                  <a class="dropdown-item" href="#">Cards</a>
                  <a class="dropdown-item" href="#">Carousel</a>
                  <a class="dropdown-item" href="#">General</a>
                  <a class="dropdown-item" href="#">Grid</a>
                  <a class="dropdown-item" href="#">Modals</a>
                  <a class="dropdown-item" href="#">Tabs</a>
                  <a class="dropdown-item" href="#">Typography</a>
                </div>
                <div class="dropdown-mega-list">
                  <div class="dropdown-header">Forms</div>
                  <a class="dropdown-item" href="#">Layouts</a>
                  <a class="dropdown-item" href="#">Basic Inputs</a>
                  <a class="dropdown-item" href="#">Input Groups</a>
                  <a class="dropdown-item" href="#">Advanced Inputs</a>
                  <a class="dropdown-item" href="#">Editors</a>
                  <a class="dropdown-item" href="#">Validation</a>
                  <a class="dropdown-item" href="#">Wizard</a>
                </div>
                <div class="dropdown-mega-list">
                  <div class="dropdown-header">Tables</div>
                  <a class="dropdown-item" href="#">Basic Tables</a>
                  <a class="dropdown-item" href="#">Responsive Table</a>
                  <a class="dropdown-item" href="#">Table with Buttons</a>
                  <a class="dropdown-item" href="#">Column Search</a>
                  <a class="dropdown-item" href="#">Muulti Selection</a>
                  <a class="dropdown-item" href="#">Ajax Sourced Data</a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav navbar-align">
            <li class="nav-item dropdown">
              <a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                <div class="position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="message-circle" class="lucide lucide-message-circle align-middle text-body">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <span class="indicator">4</span>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                <div class="dropdown-menu-header">
                  <div class="position-relative">4 New Messages</div>
                </div>
                <div class="list-group">
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="img/avatars/avatar-5.jpg" class="img-fluid rounded-circle" alt="Ashley Briggs"
                          width="40" height="40" />
                      </div>
                      <div class="col-10 ps-2">
                        <div>Ashley Briggs</div>
                        <div class="text-muted small mt-1">
                          Nam pretium turpis et arcu. Duis arcu tortor.
                        </div>
                        <div class="text-muted small mt-1">15m ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="img/avatars/avatar-2.jpg" class="img-fluid rounded-circle" alt="Carl Jenkins"
                          width="40" height="40" />
                      </div>
                      <div class="col-10 ps-2">
                        <div>Carl Jenkins</div>
                        <div class="text-muted small mt-1">
                          Curabitur ligula sapien euismod vitae.
                        </div>
                        <div class="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="img/avatars/avatar-4.jpg" class="img-fluid rounded-circle" alt="Stacie Hall"
                          width="40" height="40" />
                      </div>
                      <div class="col-10 ps-2">
                        <div>Stacie Hall</div>
                        <div class="text-muted small mt-1">
                          Pellentesque auctor neque nec urna.
                        </div>
                        <div class="text-muted small mt-1">4h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="img/avatars/avatar-3.jpg" class="img-fluid rounded-circle" alt="Bertha Martin"
                          width="40" height="40" />
                      </div>
                      <div class="col-10 ps-2">
                        <div>Bertha Martin</div>
                        <div class="text-muted small mt-1">
                          Aenean tellus metus, bibendum sed, posuere ac, mattis
                          non.
                        </div>
                        <div class="text-muted small mt-1">5h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="dropdown-menu-footer">
                  <a href="#" class="text-muted">Show all messages</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                <div class="position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="bell-off" class="lucide lucide-bell-off align-middle text-body">
                    <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"></path>
                    <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                    <path d="m2 2 20 20"></path>
                  </svg>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                <div class="dropdown-menu-header">4 New Notifications</div>
                <div class="list-group">
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="alert-circle" class="lucide lucide-alert-circle text-danger">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" x2="12" y1="8" y2="12"></line>
                          <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                      </div>
                      <div class="col-10">
                        <div>Update completed</div>
                        <div class="text-muted small mt-1">
                          Restart server 12 to complete the update.
                        </div>
                        <div class="text-muted small mt-1">2h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="bell" class="lucide lucide-bell text-warning">
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                      </div>
                      <div class="col-10">
                        <div>Lorem ipsum</div>
                        <div class="text-muted small mt-1">
                          Aliquam ex eros, imperdiet vulputate hendrerit et.
                        </div>
                        <div class="text-muted small mt-1">6h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="home" class="lucide lucide-home text-primary">
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <div class="col-10">
                        <div>Login from 192.186.1.1</div>
                        <div class="text-muted small mt-1">8h ago</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="list-group-item">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="user-plus" class="lucide lucide-user-plus text-success">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <line x1="19" x2="19" y1="8" y2="14"></line>
                          <line x1="22" x2="16" y1="11" y2="11"></line>
                        </svg>
                      </div>
                      <div class="col-10">
                        <div>New connection</div>
                        <div class="text-muted small mt-1">
                          Anna accepted your request.
                        </div>
                        <div class="text-muted small mt-1">12h ago</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="dropdown-menu-footer">
                  <a href="#" class="text-muted">Show all notifications</a>
                </div>
              </div>
            </li>
            <li class="nav-item nav-theme-toggle dropdown">
              <a class="nav-icon js-theme-toggle" href="#">
                <div class="position-relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="sun" class="lucide lucide-sun align-middle text-body nav-theme-toggle-light">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="moon" class="lucide lucide-moon align-middle text-body nav-theme-toggle-dark">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-flag dropdown-toggle" href="#" id="languageDropdown" data-bs-toggle="dropdown">
                <img src="img/flags/us.png" alt="English" />
              </a>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                <a class="dropdown-item" href="#">
                  <img src="img/flags/us.png" alt="English" width="20" class="align-middle me-1" />
                  <span class="align-middle">English</span>
                </a>
                <a class="dropdown-item" href="#">
                  <img src="img/flags/es.png" alt="Spanish" width="20" class="align-middle me-1" />
                  <span class="align-middle">Spanish</span>
                </a>
                <a class="dropdown-item" href="#">
                  <img src="img/flags/de.png" alt="German" width="20" class="align-middle me-1" />
                  <span class="align-middle">German</span>
                </a>
                <a class="dropdown-item" href="#">
                  <img src="img/flags/nl.png" alt="Dutch" width="20" class="align-middle me-1" />
                  <span class="align-middle">Dutch</span>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="settings" class="lucide lucide-settings align-middle">
                  <path
                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                  </path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </a>

              <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                <img src="img/avatars/avatar.jpg" class="img-fluid rounded-circle me-1 mt-n2 mb-n2" alt="Chris Wood"
                  width="40" height="40" />
                <span>Chris Wood</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="/pages-profile"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" data-lucide="user"
                    class="lucide lucide-user align-middle me-1">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile</a>
                <a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" data-lucide="pie-chart" class="lucide lucide-pie-chart align-middle me-1">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                  Analytics</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/pages-settings">Settings &amp; Privacy</a>
                <a class="dropdown-item" href="#">Help</a>
                <a class="dropdown-item" href="#">Sign out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

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

              <button class="btn btn-primary shadow-sm" >
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

          <div class="row">
            <div class="col-12 col-lg-12 d-flex">
              <div class="card flex-fill w-100">
                <div class="card-header">
                  <div class="card-actions float-end">
                    <div class="dropdown position-relative">
                      <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          data-lucide="more-horizontal" class="lucide lucide-more-horizontal align-middle">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>

                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <h5 class="card-title mb-0">Sales / Revenue</h5>
                </div>
                <div class="card-body d-flex w-100">
                  <div class="align-self-center chart chart-lg">
                  <button type="button" class="btn bt-sm btn-primary" @click="showAlert">Alert</button>                 
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
import messageService from "./services/messageService.js";
import FooterComponent from "./components/layout/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
  },
  methods: {
    showAlert() {
      messageService.success("Operação realizada com sucesso");
    }
  }
};
</script>

<style></style>
