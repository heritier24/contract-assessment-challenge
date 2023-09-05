<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="typcn typcn-device-desktop menu-icon"></i>
              <span class="menu-title">Dashboard</span>
              <!-- <div class="badge badge-danger">new</div> -->
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="typcn typcn-document-text menu-icon"></i>
              <span class="menu-title">Users</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <router-link to="/new-user" class="nav-link"
                    >New User<div class="badge badge-danger">new</div></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/all-users" class="nav-link"
                    >All Users</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i class="typcn typcn-film menu-icon"></i>
              <span class="menu-title">Contract</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <router-link to="/all-contract" class="nav-link"
                    >All Contract</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#charts"
              aria-expanded="false"
              aria-controls="charts"
            >
              <i class="typcn typcn-chart-pie-outline menu-icon"></i>
              <span class="menu-title">Notifications</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <router-link to="/about-to-end" class="nav-link"
                    >Contract About To End</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
</template>
