<template>
    <div class="wrapper">
      <Sidebar />
      <div class="main-panel">
        <div class="main-header">
          <div class="main-header-logo">
            <!-- Logo Header -->
            <div class="logo-header" data-background-color="dark">
              <a href="index.html" class="logo">
                <img src="assets/img/kaiadmin/logo_light.svg" alt="navbar brand" class="navbar-brand" height="20" />
              </a>
              <div class="nav-toggle">
                <button class="btn btn-toggle toggle-sidebar">
                  <i class="gg-menu-right"></i>
                </button>
                <button class="btn btn-toggle sidenav-toggler">
                  <i class="gg-menu-left"></i>
                </button>
              </div>
              <button class="topbar-toggler more">
                <i class="gg-more-vertical-alt"></i>
              </button>
            </div>
            <!-- End Logo Header -->
          </div>
          <!-- Navbar Header -->
          <nav class="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
            <div class="container-fluid">
              <nav class="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button type="submit" class="btn btn-search pe-1">
                      <i class="fa fa-search search-icon"></i>
                    </button>
                  </div>
                  <input type="text" placeholder="Search courses, students..." class="form-control" />
                </div>
              </nav>

              <ul class="navbar-nav topbar-nav ms-md-auto align-items-center">
                <li class="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false" aria-haspopup="true">
                    <i class="fa fa-search"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-search animated fadeIn">
                    <form class="navbar-left navbar-form nav-search">
                      <div class="input-group">
                        <input type="text" placeholder="Search courses, students..." class="form-control" />
                      </div>
                    </form>
                  </ul>
                </li>

                <!-- Message Dropdown -->
                <li class="nav-item topbar-icon dropdown hidden-caret">
                  <a class="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-envelope"></i>
                    <span class="notification">4</span>
                  </a>
                  <ul class="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                    <li>
                      <div class="dropdown-title d-flex justify-content-between align-items-center">
                        Messages
                        <a href="#" class="small">Mark all as read</a>
                      </div>
                    </li>
                    <li>
                      <div class="message-notif-scroll scrollbar-outer">
                        <div class="notif-center">
                          <a href="#">
                            <div class="notif-img">
                              <img src="assets/img/jm_denis.jpg" alt="Img Profile" />
                            </div>
                            <div class="notif-content">
                              <span class="subject">James Smith</span>
                              <span class="block">I submitted my assignment</span>
                              <span class="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-img">
                              <img src="assets/img/chadengle.jpg" alt="Img Profile" />
                            </div>
                            <div class="notif-content">
                              <span class="subject">Jane Doe</span>
                              <span class="block">Question about Module 3</span>
                              <span class="time">15 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-img">
                              <img src="assets/img/mlane.jpg" alt="Img Profile" />
                            </div>
                            <div class="notif-content">
                              <span class="subject">Michael Lane</span>
                              <span class="block">Quiz results are ready</span>
                              <span class="time">1 hour ago</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a class="see-all" href="javascript:void(0);">See all messages<i class="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>

                <!-- Notification Dropdown -->
                <li class="nav-item topbar-icon dropdown hidden-caret">
                  <a class="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                    <span class="notification">3</span>
                  </a>
                  <ul class="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                    <li>
                      <div class="dropdown-title">You have 3 new notifications</div>
                    </li>
                    <li>
                      <div class="notif-scroll scrollbar-outer">
                        <div class="notif-center">
                          <a href="#">
                            <div class="notif-icon notif-primary">
                              <i class="fa fa-user-plus"></i>
                            </div>
                            <div class="notif-content">
                              <span class="block">
                                New student enrolled
                              </span>
                              <span class="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-icon notif-success">
                              <i class="fa fa-check"></i>
                            </div>
                            <div class="notif-content">
                              <span class="block">
                                Course "Web Development" published
                              </span>
                              <span class="time">10 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-icon notif-warning">
                              <i class="fa fa-bell"></i>
                            </div>
                            <div class="notif-content">
                              <span class="block">
                                Upcoming deadline: Final Projects
                              </span>
                              <span class="time">12 hours</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a class="see-all" href="javascript:void(0);">See all notifications<i class="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>

                <!-- User Profile Dropdown -->
                <li class="nav-item topbar-user dropdown hidden-caret">
                  <a class="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
                    <div class="avatar-sm">
                      <img src="assets/img/profile.jpg" alt="..." class="avatar-img rounded-circle" />
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-user animated fadeIn">
                    <div class="dropdown-user-scroll scrollbar-outer">
                      <li>
                        <div class="user-box">
                          <div class="avatar-lg">
                            <img src="assets/img/profile.jpg" alt="image profile" class="avatar-img rounded" />
                          </div>
                          <div class="u-text">
                            <h4>Admin User</h4>
                            <p class="text-muted">admin@example.com</p>
                            <a href="#" class="btn btn-rounded btn-danger btn-sm">View Profile</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">My Profile</a>
                        <a class="dropdown-item" href="#">Account Setting</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Logout</a>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <!-- End Navbar -->
        </div>
    
        <div class="container">
          <div class="page-inner">
            <!-- Page Header -->
            <div class="page-header">
              <h4 class="page-title">My Courses</h4>
              <ul class="breadcrumbs">
                <li class="nav-home">
                  <a href="index.html">
                    <i class="fas fa-home"></i>
                  </a>
                </li>
                <li class="separator">
                  <i class="fas fa-angle-right"></i>
                </li>
                <li class="nav-item"><a href="lms-dashboard.html">Home</a></li>
                <li class="separator">
                  <i class="fas fa-angle-right"></i>
                </li>
                <li class="nav-item"><a href="courses.html">My Courses</a></li>
              </ul>
              <div class="ms-md-auto py-2 py-md-0">
                <a href="#" class="btn btn-primary btn-round">
                  <i class="fas fa-plus"></i> Add New Course
                </a>
              </div>
            </div>

            <!-- Course Filtering Options -->
            <div class="row mb-4">
              <div class="col-md-8">
                <div class="btn-group mb-3 mb-md-0" role="group" aria-label="Course status filters">
                  <button type="button" class="btn btn-primary active">All</button>
                  <button type="button" class="btn btn-light">Published</button>
                  <button type="button" class="btn btn-light">Draft</button>
                  <button type="button" class="btn btn-light">Archived</button>
                </div>
                <div class="btn-group mb-3 ms-md-2 mb-md-0" role="group" aria-label="Category filters">
                  <button type="button" class="btn btn-light">Development</button>
                  <button type="button" class="btn btn-light">Design</button>
                  <button type="button" class="btn btn-light">Business</button>
                  <button type="button" class="btn btn-light">Marketing</button>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search courses...">
                  <button class="btn btn-primary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="row mb-4">
              <div class="col-sm-6 col-md-4">
                <div class="card card-stats card-primary card-round">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-5">
                        <div class="icon-big text-center">
                          <i class="fas fa-book"></i>
                        </div>
                      </div>
                      <div class="col-7 col-stats">
                        <div class="numbers">
                          <p class="card-category">Total Courses</p>
                          <h4 class="card-title">42</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="col-sm-6 col-md-4">
                <div class="card card-stats card-success card-round">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-5">
                        <div class="icon-big text-center">
                          <i class="fas fa-certificate"></i>
                        </div>
                      </div>
                      <div class="col-7 col-stats">
                        <div class="numbers">
                          <p class="card-category">Completion Rate</p>
                          <h4 class="card-title">68%</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="card card-stats card-secondary card-round">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-5">
                        <div class="icon-big text-center">
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                      <div class="col-7 col-stats">
                        <div class="numbers">
                          <p class="card-category">Avg. Rating</p>
                          <h4 class="card-title">4.7</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Category Filter -->
            <div class="row mb-4">
              <div class="col-12">
                <div class="card card-round">
                  <div class="card-body">
                    <h5 class="fw-bold">Categories</h5>
                    <div class="btn-group flex-wrap">
                      <button class="btn btn-outline-primary active m-1">All Categories</button>
                      <button class="btn btn-outline-primary m-1">Web Development</button>
                      <button class="btn btn-outline-primary m-1">Data Science</button>
                      <button class="btn btn-outline-primary m-1">Design</button>
                      <button class="btn btn-outline-primary m-1">Marketing</button>
                      <button class="btn btn-outline-primary m-1">Mobile Development</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Course Cards Section -->
            <div class="card">
              <div class="card-header">
                <div class="card-head-row">
                  <div class="card-title">Course Listings</div>
                  <div class="card-tools">
                    <div class="btn-group">
                      <button class="btn btn-outline-primary btn-xs dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By
                      </button>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li><a class="dropdown-item" href="#">Most Popular</a></li>
                        <li><a class="dropdown-item" href="#">Highest Rated</a></li>
                        <li><a class="dropdown-item" href="#">Recently Added</a></li>
                        <li><a class="dropdown-item" href="#">Price: Low to High</a></li>
                        <li><a class="dropdown-item" href="#">Price: High to Low</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <!-- Course Card 1 -->
                  <div v-for="(course, index) in courses" :key="index" class="col-md-6 col-lg-4 mb-4">
                    <div class="card card-round">
                      <div class="position-relative">
                        <img
                            src="@hublms/assets/img/examples/example1.jpeg"
                            :alt="course.Name || 'Course'"
                            class="card-img-top"
                          />
                        <div class="ribbon ribbon-top-right"><span class="bg-info">New</span></div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                          <span class="badge bg-info">Data Science</span>
                          <span class="badge bg-success">Published</span>
                        </div>
                        <h4 class="card-title fw-bold mb-2">{{course.Name}}</h4>
                        <div class="course-footer">
                          <div class="d-flex align-items-center">
                            <img
                              :src="course.instructorImage || '@hublms/assets/img/profile.jpg'"
                              alt="Instructor"
                              class="instructor-avatar mr-2"
                            />
                            <span>{{ course.instructorName || 'Instructor' }}</span>
                          </div>
                          <div class="d-flex align-items-center">
                            <router-link :to="`/course-landing?id=${course.id}`" class="btn btn-sm btn-primary mr-2"
                              >Continue</router-link
                            >
                            <router-link :to="`/course-landing?id=${course.id}`" class="btn btn-sm btn-outline-secondary">
                              <i class="fa fa-edit"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                          <div class="avatar-sm me-2">
                            <img src="@hublms/assets/img/chadengle.jpg" alt="Sarah Johnson" class="avatar-img rounded-circle">
                          </div>
                          <span class="ms-2">Sarah Johnson</span>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                          <span><i class="fas fa-users me-1"></i> 512 Students</span>
                          <span><i class="fas fa-clock me-1"></i> 38h</span>
                        </div>
                        <div class="progress mb-2" style="height: 5px;">
                          <div class="progress-bar bg-success" role="progressbar" style="width: 92%" aria-valuenow="92"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex justify-content-between mb-2">
                          <div>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <span class="ms-1">5.0</span>
                          </div>
                          <div class="fw-bold text-success">$59.99</div>
                        </div>
                      </div>
                    </div>
                  </div>

               

                  <!-- Pagination -->
                  <div class="row mt-4">
                    <div class="col-md-6 d-flex align-items-center">
                      <p class="mb-0">Showing 1 to 8 of 42 entries</p>
                    </div>
                    <div class="col-md-6">
                      <nav aria-label="Course pagination" class="float-md-end">
                        <ul class="pagination">
                          <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li class="page-item active"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">4</a></li>
                          <li class="page-item"><a class="page-link" href="#">5</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer">
          <div class="container-fluid d-flex justify-content-between">
            <nav class="pull-left">
              <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="#">Help</a></li>
              </ul>
            </nav>
            <div class="copyright ml-auto">
              2025, made with <i class="fa fa-heart heart text-danger"></i> by
              Kaiadmin
            </div>
          </div>
        </footer>
      
      </div>
    </div>
    <!--   Core JS Files   -->
</template>

<script>

import '../assets/styles/bootstrap.min.css'
import '../assets/styles/kaiadmin.css'
import Sidebar from '../components/layout/sidebar.vue'
import '../assets/styles/demo.css'
import '../assets/styles/fonts.css'
// No need to import JPG images here

export default {
  name: 'My-Courses',
  components: {
    Sidebar,
  },
  data() {
    return {
      selectedCourse: null,
      activeCourses: 0,
      draftCourses: 0,
      archivedCourses: 0
    }
  },
  async asyncData({ app }) {
    try {
      // Fetch courses data from the backend
      const response = await app.$client.get('hublms/courses/')
        console.log(response);
      
      // Calculate statistics
      const courses = response.data.courses || []
      
      console.log(courses);
      // Set selected course to first course if available
      const selectedCourse = courses.length > 0 ? courses[0] : null
      
      return {
        courses,
        
        selectedCourse
      }
    } catch (error) {
      console.error('Error fetching courses:', error)
      return {
        courses: [],
        selectedCourse: null
      }
    }
  },
  head() {
    return {
      script: [
        {
          src: 'js/core/jquery-3.7.1.min.js',
          body: true,
        },
        {
          src: 'js/core/popper.min.js',
          body: true,
        },
        {
          src: 'js/core/bootstrap.min.js',
          body: true,
        },
        {
          src: 'js/plugin/jquery-scrollbar/jquery.scrollbar.min.js',
          body: true,
        },
        {
          src: 'js/plugin/jquery.sparkline/jquery.sparkline.min.js',
          body: true,
        },
        { src: 'js/kaiadmin.min.js', body: true },
        { src: 'js/demo.js', body: true },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      // Wait for jQuery to load
      const checkJQuery = setInterval(() => {
        if (window.$ !== undefined) {
          clearInterval(checkJQuery)

          // Initialize jQuery plugins
          $('[data-bs-toggle="tooltip"]').tooltip()
          $('[data-bs-toggle="popover"]').popover()

          // Initialize sparklines
          $('#lineChart').sparkline([102, 109, 120, 99, 110, 105, 115], {
            type: 'line',
            height: '70',
            width: '100%',
            lineWidth: '2',
            lineColor: '#177dff',
            fillColor: 'rgba(23, 125, 255, 0.14)',
          })

          $('#lineChart2').sparkline([99, 125, 122, 105, 110, 124, 115], {
            type: 'line',
            height: '70',
            width: '100%',
            lineWidth: '2',
            lineColor: '#f3545d',
            fillColor: 'rgba(243, 84, 93, .14)',
          })

          $('#lineChart3').sparkline([105, 103, 123, 100, 95, 105, 115], {
            type: 'line',
            height: '70',
            width: '100%',
            lineWidth: '2',
            lineColor: '#ffa534',
            fillColor: 'rgba(255, 165, 52, .14)',
          })
        }
      }, 100)
    })
  },
}
</script>

