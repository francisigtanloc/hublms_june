<template>
  <body>
    <div class="wrapper">
      <Sidebar />

      <div class="main-panel">
        <div class="content">
          <div class="container">
            <div
              class="page-header d-flex justify-content-between align-items-center"
            >
              <h4 class="page-title">My Courses</h4>
              <div class="d-flex align-items-center">
                <div class="input-group mr-3" style="width: 250px">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search courses..."
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                <select class="form-control" style="width: auto">
                  <option>All Categories</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Data Science</option>
                </select>
              </div>
            </div>

            <!-- Course Cards -->
            <div class="row">

            <div v-for="(course, index) in courses" :key="index">
            <!-- Course 1: Web Development Masterclass -->
              <div class="col-md-6 col-lg-4">
                <div class="card course-card">
                  <div class="course-img-container">
                    <img
                      src="@hublms/assets/img/examples/example1.jpeg"
                      alt="Web Development"
                      class="course-img"
                    />
                    <div class="course-badge">
                      <span class="badge badge-primary">Development</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{{ course.Name }}</h5>
                    <p class="card-text">
                      {{ course.Description }}
                    </p>
                  </div>
                  <div class="course-progress-container">
                    <div class="d-flex justify-content-between mb-1">
                      <span class="text-muted">Progress</span>
                      <span>75%</span>
                    </div>
                    <div class="progress" style="height: 6px">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 75%"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="course-footer">
                    <div class="d-flex align-items-center">
                      <img
                        src="@hublms/assets/img/profile.jpg"
                        alt="Instructor"
                        class="instructor-avatar mr-2"
                      />
                      <span>David Wilson</span>
                    </div>
                    <div class="absolute top-3 right-3">
                      <router-link :to="`/course-landing?id=${course.id}`" class="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                      </router-link>
                    </div>
                 
                    <router-link :to="`/course-landing?id=${course.id}`" class="btn btn-sm btn-primary"
                      >Continue</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
              

              <!-- Course 2: UX/UI Design Fundamentals -->
              <div class="col-md-6 col-lg-4">
                <div class="card course-card">
                  <div class="course-img-container">
                    <img
                      src="@hublms/assets/img/examples/example2.jpeg"
                      alt="UX/UI Design"
                      class="course-img"
                    />
                    <div class="course-badge">
                      <span class="badge badge-info">Design</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">UX/UI Design Fundamentals</h5>
                    <p class="card-text">
                      Learn the principles of user experience and interface
                      design. Create visually appealing and usable designs.
                    </p>
                  </div>
                  <div class="course-progress-container">
                    <div class="d-flex justify-content-between mb-1">
                      <span class="text-muted">Progress</span>
                      <span>45%</span>
                    </div>
                    <div class="progress" style="height: 6px">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 45%"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="course-footer">
                    <div class="d-flex align-items-center">
                      <img
                        src="@hublms/assets/img/profile2.jpg"
                        alt="Instructor"
                        class="instructor-avatar mr-2"
                      />
                      <span>Emily Johnson</span>
                    </div>
                    <a href="course.html" class="btn btn-sm btn-primary"
                      >Continue</a
                    >
                  </div>
                </div>
              </div>

              <!-- Course 3: Digital Marketing Strategy -->
              <div class="col-md-6 col-lg-4">
                <div class="card course-card">
                  <div class="course-img-container">
                    <img
                      src="@hublms/assets/img/examples/example3.jpeg"
                      alt="Digital Marketing"
                      class="course-img"
                    />
                    <div class="course-badge">
                      <span class="badge badge-success">Marketing</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Digital Marketing Strategy</h5>
                    <p class="card-text">
                      Master SEO, social media marketing, content strategy, and
                      paid advertising for business growth.
                    </p>
                  </div>
                  <div class="course-progress-container">
                    <div class="d-flex justify-content-between mb-1">
                      <span class="text-muted">Progress</span>
                      <span>90%</span>
                    </div>
                    <div class="progress" style="height: 6px">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 90%"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="course-footer">
                    <div class="d-flex align-items-center">
                      <img
                        src="@hublms/assets/img/profile.jpg"
                        alt="Instructor"
                        class="instructor-avatar mr-2"
                      />
                      <span>Michael Thompson</span>
                    </div>
                    <a href="course.html" class="btn btn-sm btn-primary"
                      >Continue</a
                    >
                  </div>
                </div>
              </div>

              <!-- Course 4: Data Science Essentials -->
              <div class="col-md-6 col-lg-4">
                <div class="card course-card">
                  <div class="course-img-container">
                    <img
                      src="@hublms/assets/img/examples/example4.jpeg"
                      alt="Data Science"
                      class="course-img"
                    />
                    <div class="course-badge">
                      <span class="badge badge-warning">Data Science</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Data Science Essentials</h5>
                    <p class="card-text">
                      Learn Python, data analysis, machine learning, and
                      visualization techniques for data-driven insights.
                    </p>
                  </div>
                  <div class="course-progress-container">
                    <div class="d-flex justify-content-between mb-1">
                      <span class="text-muted">Progress</span>
                      <span>30%</span>
                    </div>
                    <div class="progress" style="height: 6px">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 30%"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="course-footer">
                    <div class="d-flex align-items-center">
                      <img
                        src="@hublms/assets/img/profile2.jpg"
                        alt="Instructor"
                        class="instructor-avatar mr-2"
                      />
                      <span>Sarah Chen</span>
                    </div>
                    <a href="course.html" class="btn btn-sm btn-primary"
                      >Continue</a
                    >
                  </div>
                </div>
              </div>

              <!-- Course 5: Mobile App Development -->
              <div class="col-md-6 col-lg-4">
                <div class="card course-card">
                  <div class="course-img-container">
                    <img
                      src="@hublms/assets/img/examples/example5.jpeg"
                      alt="Mobile Development"
                      class="course-img"
                    />
                    <div class="course-badge">
                      <span class="badge badge-primary">Development</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Mobile App Development</h5>
                    <p class="card-text">
                      Create iOS and Android applications using React Native and
                      Flutter. From concept to app store.
                    </p>
                  </div>
                  <div class="course-progress-container">
                    <div class="d-flex justify-content-between mb-1">
                      <span class="text-muted">Progress</span>
                      <span>60%</span>
                    </div>
                    <div class="progress" style="height: 6px">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="course-footer">
                    <div class="d-flex align-items-center">
                      <img
                        src="@hublms/assets/img/profile.jpg"
                        alt="Instructor"
                        class="instructor-avatar mr-2"
                      />
                      <span>Alex Rodriguez</span>
                    </div>
                    <a href="course.html" class="btn btn-sm btn-primary"
                      >Continue</a
                    >
                  </div>
                </div>
              </div>

              <!-- Course 6: Photography Masterclass -->
              <div class="col-md-6 col-lg-4">
                <div class="card course-card">
                  <div class="course-img-container">
                    <img
                      src="@hublms/assets/img/examples/example6.jpeg"
                      alt="Photography"
                      class="course-img"
                    />
                    <div class="course-badge">
                      <span class="badge badge-info">Design</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Photography Masterclass</h5>
                    <p class="card-text">
                      Learn professional photography techniques, lighting,
                      composition, and post-processing skills.
                    </p>
                  </div>
                  <div class="course-progress-container">
                    <div class="d-flex justify-content-between mb-1">
                      <span class="text-muted">Progress</span>
                      <span>15%</span>
                    </div>
                    <div class="progress" style="height: 6px">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 15%"
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="course-footer">
                    <div class="d-flex align-items-center">
                      <img
                        src="@hublms/assets/img/profile2.jpg"
                        alt="Instructor"
                        class="instructor-avatar mr-2"
                      />
                      <span>Jessica Miller</span>
                    </div>
                    <a href="course.html" class="btn btn-sm btn-primary"
                      >Continue</a
                    >
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

      <!-- Custom template | don't include it in your project! -->
      <div class="custom-template">
        <div class="title">Settings</div>
        <div class="custom-content">
          <div class="switcher">
            <div class="switch-block">
              <h4>Logo Header</h4>
              <div class="btnSwitch">
                <button
                  type="button"
                  class="selected changeLogoHeaderColor"
                  data-color="dark"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="blue"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="purple"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="light-blue"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="green"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="orange"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="red"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="white"
                ></button>
                <br />
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="dark2"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="blue2"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="purple2"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="light-blue2"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="green2"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="orange2"
                ></button>
                <button
                  type="button"
                  class="changeLogoHeaderColor"
                  data-color="red2"
                ></button>
              </div>
            </div>
            <div class="switch-block">
              <h4>Navbar Header</h4>
              <div class="btnSwitch">
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="dark"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="blue"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="purple"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="light-blue"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="green"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="orange"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="red"
                ></button>
                <button
                  type="button"
                  class="selected changeTopBarColor"
                  data-color="white"
                ></button>
                <br />
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="dark2"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="blue2"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="purple2"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="light-blue2"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="green2"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="orange2"
                ></button>
                <button
                  type="button"
                  class="changeTopBarColor"
                  data-color="red2"
                ></button>
              </div>
            </div>
            <div class="switch-block">
              <h4>Sidebar</h4>
              <div class="btnSwitch">
                <button
                  type="button"
                  class="changeSideBarColor"
                  data-color="white"
                ></button>
                <button
                  type="button"
                  class="selected changeSideBarColor"
                  data-color="dark"
                ></button>
                <button
                  type="button"
                  class="changeSideBarColor"
                  data-color="dark2"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-toggle">
          <i class="icon-settings"></i>
        </div>
      </div>
      <!-- End Custom template -->
    </div>
    <!--   Core JS Files   -->
  </body>
</template>

<script>

import '../assets/styles/bootstrap.min.css'
import '../assets/styles/kaiadmin.css'
import Sidebar from '../components/layout/sidebar.vue'
import '../assets/styles/demo.css'
import '../assets/styles/fonts.css'
// No need to import JPG images here

export default {
  name: 'Starting',
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
  
  methods: {
    loadScript(src, id = null) {
      return new Promise((resolve, reject) => {
        console.log(`Loading script: ${src}`)
        // Check if script already exists
        if (id && document.getElementById(id)) {
          console.log(`Script ${id} already loaded`)
          return resolve()
        }
        
        const script = document.createElement('script')
        script.src = src
        if (id) script.id = id
        
        script.onload = () => {
          console.log(`Script loaded successfully: ${src}`)
          resolve()
        }
        script.onerror = (e) => {
          console.error(`Error loading script: ${src}`, e)
          reject(e)
        }
        document.head.appendChild(script)
      })
    },
    loadLocalScript(path) {
      return new Promise((resolve, reject) => {
        try {
          const module = require(path)
          console.log(`Local module loaded: ${path}`)
          resolve(module)
        } catch (error) {
          console.error(`Error loading local module: ${path}`, error)
          reject(error)
        }
      })
    },
    initPlugins() {
      console.log('Initializing plugins')
      try {
        // Check if Bootstrap 5 is available
        if (typeof bootstrap !== 'undefined') {
          console.log('Bootstrap 5 detected - using native Bootstrap initialization')
          
          // Initialize tooltips using Bootstrap 5 syntax
          const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
          })
          console.log('Tooltips initialized via Bootstrap 5')
          
          // Initialize popovers using Bootstrap 5 syntax
          const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
          popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
          })
          console.log('Popovers initialized via Bootstrap 5')
        } 
        // Fallback to jQuery plugins if available
        else if (typeof $.fn.tooltip === 'function') {
          console.log('Using jQuery tooltip plugin')
          $('[data-bs-toggle="tooltip"]').tooltip()
          $('[data-bs-toggle="popover"]').popover()
        } else {
          console.warn('Neither Bootstrap 5 nor jQuery tooltip plugins available')
        }
        
        // Initialize Perfect Scrollbar if available
        if (typeof PerfectScrollbar !== 'undefined') {
          console.log('Initializing Perfect Scrollbar')
          const scrollables = document.querySelectorAll('.scrollbar-container')
          if (scrollables.length > 0) {
            scrollables.forEach(el => {
              new PerfectScrollbar(el)
            })
          }
        }
        
      } catch (error) {
        console.error('Error initializing plugins:', error)
      }
    },
    initSparklines() {
      console.log('Initializing sparklines')
      try {
        // Double-check jQuery and sparkline are available
        if (window.$ && typeof $.fn.sparkline === 'function') {
          console.log('Sparkline plugin available')
          
          // Make sure elements exist before initializing
          const lineChart = document.getElementById('lineChart');
          const lineChart2 = document.getElementById('lineChart2');
          const lineChart3 = document.getElementById('lineChart3');
          
          if (lineChart) {
            $('#lineChart').sparkline([102, 109, 120, 99, 110, 105, 115], {
              type: 'line',
              height: '70',
              width: '100%',
              lineWidth: '2',
              lineColor: '#177dff',
              fillColor: 'rgba(23, 125, 255, 0.14)',
            });
            console.log('lineChart sparkline initialized');
          } else {
            console.warn('Element #lineChart not found');
          }

          if (lineChart2) {
            $('#lineChart2').sparkline([99, 125, 122, 105, 110, 124, 115], {
              type: 'line',
              height: '70',
              width: '100%',
              lineWidth: '2',
              lineColor: '#f3545d',
              fillColor: 'rgba(243, 84, 93, .14)',
            });
            console.log('lineChart2 sparkline initialized');
          } else {
            console.warn('Element #lineChart2 not found');
          }

          if (lineChart3) {
            $('#lineChart3').sparkline([105, 103, 123, 100, 95, 105, 115], {
              type: 'line',
              height: '70',
              width: '100%',
              lineWidth: '2',
              lineColor: '#ffa534',
              fillColor: 'rgba(255, 165, 52, .14)',
            });
            console.log('lineChart3 sparkline initialized');
          } else {
            console.warn('Element #lineChart3 not found');
          }
        } else {
          console.warn('Sparkline plugin not available. jQuery available:', !!window.$, 'Sparkline available:', typeof $.fn?.sparkline === 'function')
          // Try reloading sparkline library as a fallback
          this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.sparkline/2.1.2/jquery.sparkline.min.js', 'sparkline-fallback')
          .then(() => {
            console.log('Tried loading sparkline from fallback source, rechecking availability:', typeof $.fn?.sparkline === 'function')
            if (typeof $.fn?.sparkline === 'function') {
              this.initSparklines() // Try again if successful
            }
          })
          .catch(e => console.error('Failed to load sparkline fallback:', e))
        }
      } catch (error) {
        console.error('Error initializing sparklines:', error)
      }
    }
  },
  mounted() {
    this.$nextTick(async () => {
      if (process.client) {
        console.log('Mounting component in client mode')
        try {
          // Load jQuery from CDN
          await this.loadScript('https://code.jquery.com/jquery-3.7.1.min.js', 'jquery-script')
          console.log('jQuery loaded, global $ =', typeof window.$ !== 'undefined')
          
          // Make sure jQuery is globally available
          if (typeof window.$ === 'undefined' && typeof jQuery !== 'undefined') {
            window.$ = window.jQuery = jQuery
            console.log('Assigned jQuery to window.$')
          }
          
          // When jQuery is loaded, load other dependencies
          await this.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', 'bootstrap-script')
          console.log('Bootstrap loaded (includes Popper.js)')
          
          // Load scrollbar plugin
          await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.scrollbar/0.2.11/jquery.scrollbar.min.js', 'scrollbar-script')
          
          // Load jQuery plugins - use the correct sparkline URL
          await this.loadScript('https://omnipotent.net/jquery.sparkline/2.1.2/jquery.sparkline.min.js', 'sparkline-script')
          console.log('jQuery sparkline loaded, checking availability:', typeof $.fn?.sparkline === 'function')
          
          // Loading additional plugins that might be needed
          try {
            // Perfect scrollbar as a substitute for jquery.scrollbar
            await this.loadScript('https://cdn.jsdelivr.net/npm/perfect-scrollbar@1.5.5/dist/perfect-scrollbar.min.js', 'perfect-scrollbar')
            
            console.log('Loaded alternative scripts from CDN')
          } catch (e) {
            console.warn('Could not load alternative scripts, continuing anyway:', e)
          }
          
          // Initialize plugins when document is ready
          $(document).ready(() => {
            console.log('Document ready, initializing plugins')
            this.initPlugins()
            this.initSparklines()
          })
        } catch (error) {
          console.error('Error in mounted lifecycle:', error)
        }
      }
    })
  },
}
</script>
