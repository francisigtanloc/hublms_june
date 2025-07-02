<template>
  <body>
    <div class="wrapper">
      <Sidebar />

      <div class="main-panel">
        <div class="main-header">
          <div class="main-header-logo">
            <!-- Logo Header -->
            <div class="logo-header" data-background-color="dark">
              <a href="index.html" class="logo">
                <img
                  src="@hublms/assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  class="navbar-brand"
                  height="20"
                />
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
          <nav
            class="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom"
          >
            <div class="container-fluid">
              <nav
                class="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex"
              >
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button type="submit" class="btn btn-search pe-1">
                      <i class="fa fa-search search-icon"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search ..."
                    class="form-control"
                  />
                </div>
              </nav>

              <ul class="navbar-nav topbar-nav ms-md-auto align-items-center">
                <li
                  class="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none"
                >
                  <a
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <i class="fa fa-search"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-search animated fadeIn">
                    <form class="navbar-left navbar-form nav-search">
                      <div class="input-group">
                        <input
                          type="text"
                          placeholder="Search ..."
                          class="form-control"
                        />
                      </div>
                    </form>
                  </ul>
                </li>
                <li class="nav-item topbar-icon dropdown hidden-caret">
                  <a
                    id="messageDropdown"
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-envelope"></i>
                  </a>
                  <ul
                    class="dropdown-menu messages-notif-box animated fadeIn"
                    aria-labelledby="messageDropdown"
                  >
                    <li>
                      <div
                        class="dropdown-title d-flex justify-content-between align-items-center"
                      >
                        Messages
                        <a href="#" class="small">Mark all as read</a>
                      </div>
                    </li>
                    <li>
                      <div class="message-notif-scroll scrollbar-outer">
                        <div class="notif-center">
                          <a href="#">
                            <div class="notif-img">
                              <img
                                src="@hublms/assets/img/jm_denis.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div class="notif-content">
                              <span class="subject">Jimmy Denis</span>
                              <span class="block"> How are you ? </span>
                              <span class="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-img">
                              <img
                                src="@hublms/assets/img/chadengle.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div class="notif-content">
                              <span class="subject">Chad</span>
                              <span class="block"> Ok, Thanks ! </span>
                              <span class="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-img">
                              <img
                                src="@hublms/assets/img/mlane.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div class="notif-content">
                              <span class="subject">Jhon Doe</span>
                              <span class="block">
                                Ready for the meeting today...
                              </span>
                              <span class="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-img">
                              <img
                                src="@hublms/assets/img/talha.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div class="notif-content">
                              <span class="subject">Talha</span>
                              <span class="block"> Hi, Apa Kabar ? </span>
                              <span class="time">17 minutes ago</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a class="see-all" href="javascript:void(0);"
                        >See all messages<i class="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item topbar-icon dropdown hidden-caret">
                  <a
                    id="notifDropdown"
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-bell"></i>
                    <span class="notification">4</span>
                  </a>
                  <ul
                    class="dropdown-menu notif-box animated fadeIn"
                    aria-labelledby="notifDropdown"
                  >
                    <li>
                      <div class="dropdown-title">
                        You have 4 new notification
                      </div>
                    </li>
                    <li>
                      <div class="notif-scroll scrollbar-outer">
                        <div class="notif-center">
                          <a href="#">
                            <div class="notif-icon notif-primary">
                              <i class="fa fa-user-plus"></i>
                            </div>
                            <div class="notif-content">
                              <span class="block"> New user registered </span>
                              <span class="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-icon notif-success">
                              <i class="fa fa-comment"></i>
                            </div>
                            <div class="notif-content">
                              <span class="block">
                                Rahmad commented on Admin
                              </span>
                              <span class="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-img">
                              <img
                                src="@hublms/assets/img/profile2.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div class="notif-content">
                              <span class="block">
                                Reza send messages to you
                              </span>
                              <span class="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div class="notif-icon notif-danger">
                              <i class="fa fa-heart"></i>
                            </div>
                            <div class="notif-content">
                              <span class="block"> Farrah liked Admin </span>
                              <span class="time">17 minutes ago</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a class="see-all" href="javascript:void(0);"
                        >See all notifications<i class="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item topbar-icon dropdown hidden-caret">
                  <a
                    class="nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    <i class="fas fa-layer-group"></i>
                  </a>
                  <div class="dropdown-menu quick-actions animated fadeIn">
                    <div class="quick-actions-header">
                      <span class="title mb-1">Quick Actions</span>
                      <span class="subtitle op-7">Shortcuts</span>
                    </div>
                    <div class="quick-actions-scroll scrollbar-outer">
                      <div class="quick-actions-items">
                        <div class="row m-0">
                          <a class="col-6 col-md-4 p-0" href="#">
                            <div class="quick-actions-item">
                              <div class="avatar-item bg-danger rounded-circle">
                                <i class="far fa-calendar-alt"></i>
                              </div>
                              <span class="text">Calendar</span>
                            </div>
                          </a>
                          <a class="col-6 col-md-4 p-0" href="#">
                            <div class="quick-actions-item">
                              <div
                                class="avatar-item bg-warning rounded-circle"
                              >
                                <i class="fas fa-map"></i>
                              </div>
                              <span class="text">Maps</span>
                            </div>
                          </a>
                          <a class="col-6 col-md-4 p-0" href="#">
                            <div class="quick-actions-item">
                              <div class="avatar-item bg-info rounded-circle">
                                <i class="fas fa-file-excel"></i>
                              </div>
                              <span class="text">Reports</span>
                            </div>
                          </a>
                          <a class="col-6 col-md-4 p-0" href="#">
                            <div class="quick-actions-item">
                              <div
                                class="avatar-item bg-success rounded-circle"
                              >
                                <i class="fas fa-envelope"></i>
                              </div>
                              <span class="text">Emails</span>
                            </div>
                          </a>
                          <a class="col-6 col-md-4 p-0" href="#">
                            <div class="quick-actions-item">
                              <div
                                class="avatar-item bg-primary rounded-circle"
                              >
                                <i class="fas fa-file-invoice-dollar"></i>
                              </div>
                              <span class="text">Invoice</span>
                            </div>
                          </a>
                          <a class="col-6 col-md-4 p-0" href="#">
                            <div class="quick-actions-item">
                              <div
                                class="avatar-item bg-secondary rounded-circle"
                              >
                                <i class="fas fa-credit-card"></i>
                              </div>
                              <span class="text">Payments</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="nav-item topbar-user dropdown hidden-caret">
                  <a
                    class="dropdown-toggle profile-pic"
                    data-bs-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    <div class="avatar-sm">
                      <img
                        src="@hublms/assets/img/profile.jpg"
                        alt="..."
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <span class="profile-username">
                      <span class="op-7">Hi,</span>
                      <span class="fw-bold">John Doe</span>
                    </span>
                  </a>
                  <ul class="dropdown-menu dropdown-user animated fadeIn">
                    <div class="dropdown-user-scroll scrollbar-outer">
                      <li>
                        <div class="user-box">
                          <div class="avatar-lg">
                            <img
                              src="@hublms/assets/img/profile.jpg"
                              alt="image profile"
                              class="avatar-img rounded"
                            />
                          </div>
                          <div class="u-text">
                            <h4>John Doe</h4>
                            <p class="text-muted">hello@example.com</p>
                            <a
                              href="profile.html"
                              class="btn btn-xs btn-secondary btn-sm"
                              >View Profile</a
                            >
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">My Profile</a>
                        <a class="dropdown-item" href="#">My Balance</a>
                        <a class="dropdown-item" href="#">Inbox</a>
                        <div class="dropdown-divider"></div>
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

        <!-- Content -->
        <div class="content">
          <div class="container">
            <div class="mb-4">
              <h1 class="h3 mb-2">Understanding Web Technologies</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent p-0 m-0">
                  <li class="breadcrumb-item">
                    <a href="dashboard.html" class="text-decoration-none"
                      ><i class="fas fa-home"></i
                    ></a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="my-courses.html" class="text-decoration-none"
                      >My Courses</a
                    >
                  </li>
                  <li class="breadcrumb-item">
                    <a href="course.html" class="text-decoration-none"
                      >Web Development Masterclass</a
                    >
                  </li>
                  <li class="breadcrumb-item active">
                    Understanding Web Technologies
                  </li>
                </ol>
              </nav>
            </div>

            <div class="row">
              <!-- Main Course Content -->
              <div class="col-lg-8">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4 lesson-content">
                    <div
                      class="embed-responsive embed-responsive-16by9 mb-4"
                      style="width: 100%; height: auto"
                    >
                      <iframe
                        class="embed-responsive-item"
                        src="https://www.youtube.com/embed/3JluqTojuME"
                        style="width: 100%; height: 500px"
                        allowfullscreen
                      ></iframe>
                    </div>

                    <h2>Introduction to Web Technologies</h2>
                    <p>
                      Welcome to this comprehensive overview of web
                      technologies! In this lesson, we'll explore the
                      fundamental technologies that power the modern web and how
                      they work together to create the interactive experiences
                      we use every day.
                    </p>

                    <h3>The Three Core Technologies</h3>
                    <p>
                      The web is built on three core technologies that work
                      together:
                    </p>

                    <div class="row mb-4">
                      <div class="col-md-4">
                        <div class="card bg-light">
                          <div class="card-body text-center">
                            <i class="fas fa-code fa-3x text-primary mb-3"></i>
                            <h4>HTML</h4>
                            <p class="mb-0">Structure</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="card bg-light">
                          <div class="card-body text-center">
                            <i
                              class="fas fa-paint-brush fa-3x text-success mb-3"
                            ></i>
                            <h4>CSS</h4>
                            <p class="mb-0">Presentation</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="card bg-light">
                          <div class="card-body text-center">
                            <i class="fas fa-cogs fa-3x text-warning mb-3"></i>
                            <h4>JavaScript</h4>
                            <p class="mb-0">Behavior</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3>HTML: The Structure</h3>
                    <p>
                      HTML (HyperText Markup Language) provides the basic
                      structure of web pages. It's a markup language that
                      defines the meaning and structure of web content using a
                      series of elements or tags.
                    </p>

                    <p>Here's a simple example of HTML code:</p>
                    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My First Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

                    <h3>CSS: The Presentation</h3>
                    <p>
                      CSS (Cascading Style Sheets) is used to style and layout
                      web pages — for example, to alter the font, color, size,
                      and spacing of your content, split it into multiple
                      columns, or add animations and other decorative features.
                    </p>

                    <p>Here's a simple example of CSS:</p>
                    <pre><code>body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  line-height: 1.6;
  color: #666;
}</code></pre>

                    <h3>JavaScript: The Behavior</h3>
                    <p>
                      JavaScript is a programming language that enables
                      interactive web pages. It is an essential part of web
                      applications, and the vast majority of websites use it for
                      client-side page behavior.
                    </p>

                    <p>Here's a simple example of JavaScript:</p>
                    <pre><code>// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the button element
  const button = document.querySelector('#myButton');
  
  // Add a click event listener to the button
  button.addEventListener('click', function() {
    alert('Button was clicked!');
  });
});</code></pre>

                    <h3>How They Work Together</h3>
                    <p>
                      These three technologies work together to create web
                      pages:
                    </p>
                    <ul>
                      <li>
                        <strong>HTML</strong> provides the structure and content
                        of the page
                      </li>
                      <li>
                        <strong>CSS</strong> controls how the HTML elements look
                        on the page
                      </li>
                      <li>
                        <strong>JavaScript</strong> adds interactivity to the
                        page
                      </li>
                    </ul>

                    <div class="card border-0 shadow-sm mb-4">
                      <div class="card-body p-4">
                        <h5 class="mb-3">Take Notes</h5>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="4"
                            placeholder="Write your notes about this lesson here..."
                          ></textarea>
                        </div>
                        <button id="save-notes" class="btn btn-primary">
                          Save Notes
                        </button>
                      </div>
                    </div>

                    <div
                      class="lesson-navigation mt-4 d-flex justify-content-between"
                    >
                      <a href="course.html" class="btn btn-light border"
                        ><i class="fas fa-arrow-left mr-2"></i>Previous
                        Lesson</a
                      >
                      <a href="course.html" class="btn btn-primary"
                        >Next Lesson<i class="fas fa-arrow-right ml-2"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Course Navigation Sidebar (Right) -->
              <div class="col-lg-4">
                <!-- Course Progress Card -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-body p-4">
                    <h5 class="mb-3">Course Progress</h5>
                    <div class="d-flex justify-content-between mb-2">
                      <span>Web Development Masterclass</span>
                      <span class="font-weight-bold">42%</span>
                    </div>
                    <div class="progress mb-4" style="height: 8px">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 42%"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <button
                      id="mark-complete"
                      class="btn btn-success btn-block"
                    >
                      Mark as Complete
                    </button>
                  </div>
                </div>

                <!-- Course Navigation Card -->
                <div class="card border-0 shadow-sm mb-4">
                  <div class="card-body p-0">
                    <h5 class="p-3 mb-0 border-bottom">Course Navigation</h5>
                    <div class="list-group list-group-flush">
                      <!-- Section 1 -->
                      <div class="list-group-item border-0 bg-light">
                        <strong
                          >Section 1: Introduction to Web Development</strong
                        >
                      </div>
                      <a
                        href="course-content.html"
                        class="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="fas fa-check-circle text-success mr-2"></i>
                          <span>1.1 Welcome to the Course</span>
                        </div>
                        <span class="text-muted small">10 min</span>
                      </a>
                      <a
                        href="course-content.html"
                        class="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="fas fa-check-circle text-success mr-2"></i>
                          <span>1.2 Setting Up Your Environment</span>
                        </div>
                        <span class="text-muted small">15 min</span>
                      </a>
                      <a
                        href="course-content.html"
                        class="list-group-item list-group-item-action border-0 bg-primary text-white d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="fas fa-play-circle mr-2"></i>
                          <span>1.3 Understanding Web Technologies</span>
                        </div>
                        <span class="badge badge-light">20 min</span>
                      </a>

                      <!-- Section 2 -->
                      <div class="list-group-item border-0 bg-light">
                        <strong>Section 2: HTML Fundamentals</strong>
                      </div>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="far fa-circle text-muted mr-2"></i>
                          <span>2.1 HTML Basics</span>
                        </div>
                        <span class="text-muted small">25 min</span>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="far fa-circle text-muted mr-2"></i>
                          <span>2.2 HTML Elements</span>
                        </div>
                        <span class="text-muted small">30 min</span>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="far fa-circle text-muted mr-2"></i>
                          <span>2.3 HTML Forms</span>
                        </div>
                        <span class="text-muted small">35 min</span>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Lesson Resources Card -->
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-0">
                    <h5 class="p-3 mb-0 border-bottom">Lesson Resources</h5>
                    <ul class="list-group list-group-flush">
                      <li
                        class="list-group-item border-0 d-flex justify-content-between align-items-center py-2 px-3"
                      >
                        <a href="#" class="text-decoration-none"
                          ><i class="fas fa-file-pdf mr-2 text-danger"></i>
                          Lesson Slides</a
                        >
                        <span class="badge badge-light">PDF</span>
                      </li>
                      <li
                        class="list-group-item border-0 d-flex justify-content-between align-items-center py-2 px-3"
                      >
                        <a href="#" class="text-decoration-none"
                          ><i class="fas fa-file-code mr-2 text-primary"></i>
                          Code Examples</a
                        >
                        <span class="badge badge-light">ZIP</span>
                      </li>
                      <li
                        class="list-group-item border-0 d-flex justify-content-between align-items-center py-2 px-3"
                      >
                        <a href="#" class="text-decoration-none"
                          ><i class="fas fa-link mr-2 text-info"></i> Additional
                          Reading</a
                        >
                        <span class="badge badge-light">URL</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    return {}
  },
  head() {
    return {
      script: [
        {
          src: '../assets/js/core/jquery-3.7.1.min.js',
          body: true,
        },
        {
          src: '../assets/js/core/popper.min.js',
          body: true,
        },
        {
          src: '../assets/js/core/bootstrap.min.js',
          body: true,
        },
        {
          src: '../assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js',
          body: true,
        },
        {
          src: '../assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js',
          body: true,
        },
        { src: '../assets/js/kaiadmin.min.js', body: true },
        { src: '../assets/js/demo.js', body: true },
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