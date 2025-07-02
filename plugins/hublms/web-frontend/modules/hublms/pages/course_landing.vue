<template>
    <div class="wrapper">
      <Sidebar />

      <div class="main-panel">
        <div class="content">
          <!-- Course Hero Section -->
          <div class="course-hero">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <h1>Web Development Masterclass</h1>
                  <div class="course-instructor">
                    <img
                      src="@hublms/assets/img/profile.jpg"
                      alt="Instructor"
                      class="instructor-avatar"
                    />
                    <span>By <strong>David Wilson</strong></span>
                  </div>
                  <p class="lead">
                    Learn HTML, CSS, JavaScript, React, Node.js and more. A
                    complete guide to modern web development.
                  </p>
                  <div class="course-meta">
                    <div class="course-meta-item">
                      <i class="fas fa-graduation-cap"></i>
                      <span>75% Complete</span>
                    </div>
                    <div class="course-meta-item">
                      <i class="fas fa-calendar"></i>
                      <span>Last accessed: June 22, 2025</span>
                    </div>
                    <div class="course-meta-item">
                      <i class="fas fa-clock"></i>
                      <span>25 hours total</span>
                    </div>
                    <div class="course-meta-item">
                      <i class="fas fa-signal"></i>
                      <span>Intermediate</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <img
                    src="@hublms/assets/img/examples/example1.jpeg"
                    alt="Web Development"
                    class="img-fluid rounded"
                  />
                  <a
                    href="course-content.html"
                    class="btn btn-primary btn-block mt-3"
                    >Continue Learning</a
                  >
                  <div class="progress mt-3" style="height: 10px">
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      style="width: 75%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="text-center mt-2">75% Complete</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Content -->
          <div class="container">
            <!-- Course Tabs Navigation -->
            <ul
              id="courseTab"
              class="nav nav-tabs course-nav-tabs"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  id="curriculum-tab"
                  class="nav-link active"
                  data-toggle="tab"
                  href="#curriculum"
                  role="tab"
                  aria-controls="curriculum"
                  aria-selected="true"
                >
                  <i class="fas fa-list mr-2"></i> Curriculum
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  id="description-tab"
                  class="nav-link"
                  data-toggle="tab"
                  href="#description"
                  role="tab"
                  aria-controls="description"
                  aria-selected="false"
                >
                  <i class="fas fa-info-circle mr-2"></i> Description
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  id="resources-tab"
                  class="nav-link"
                  data-toggle="tab"
                  href="#resources"
                  role="tab"
                  aria-controls="resources"
                  aria-selected="false"
                >
                  <i class="fas fa-file-download mr-2"></i> Resources
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  id="discussions-tab"
                  class="nav-link"
                  data-toggle="tab"
                  href="#discussions"
                  role="tab"
                  aria-controls="discussions"
                  aria-selected="false"
                >
                  <i class="fas fa-comment-alt mr-2"></i> Discussions
                </a>
              </li>
            </ul>

            <!-- Tab Content -->
            <div id="courseTabContent" class="tab-content">
              <!-- Curriculum Tab -->
              <div
                id="curriculum"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="curriculum-tab"
              >
                <!-- Section 1: Introduction -->
                <div class="curriculum-section">
                  <div
                    class="curriculum-section-header d-flex justify-content-between"
                    data-toggle="collapse"
                    data-target="#section1"
                  >
                    <span>Section 1: Introduction to Web Development</span>
                    <span>3/3 Completed</span>
                  </div>
                  <div id="section1" class="collapse show">
                    <div class="curriculum-section-content">
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >1.1 Welcome to the Course</a
                        >
                        <div class="curriculum-item-status">
                          <span class="badge badge-success">Completed</span>
                        </div>
                        <div class="curriculum-item-duration">10 min</div>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-file-alt"></i>
                        </div>
                        <a href="lesson.html" class="curriculum-item-link"
                          >1.2 Setting Up Your Development Environment</a
                        >
                        <div class="curriculum-item-status">
                          <span class="badge badge-success">Completed</span>
                        </div>
                        <div class="curriculum-item-duration">15 min</div>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-puzzle-piece"></i>
                        </div>
                        <a href="lesson.html" class="curriculum-item-link"
                          >1.3 Understanding Web Technologies</a
                        >
                        <div class="curriculum-item-status">
                          <span class="badge badge-success">Completed</span>
                        </div>
                        <div class="curriculum-item-duration">20 min</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Section 2: HTML Fundamentals -->
                <div class="curriculum-section">
                  <div
                    class="curriculum-section-header d-flex justify-content-between"
                    data-toggle="collapse"
                    data-target="#section2"
                  >
                    <span>Section 2: HTML Fundamentals</span>
                    <span>4/5 Completed</span>
                  </div>
                  <div id="section2" class="collapse show">
                    <div class="curriculum-section-content">
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >2.1 HTML Document Structure</a
                        >
                        <span class="curriculum-item-status badge badge-success"
                          >Completed</span
                        >
                        <span class="curriculum-item-duration">12:15</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >2.2 HTML Elements and Attributes</a
                        >
                        <span class="curriculum-item-status badge badge-success"
                          >Completed</span
                        >
                        <span class="curriculum-item-duration">18:40</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >2.3 Working with Links and Images</a
                        >
                        <span class="curriculum-item-status badge badge-success"
                          >Completed</span
                        >
                        <span class="curriculum-item-duration">14:55</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >2.4 Forms and Input Elements</a
                        >
                        <span class="curriculum-item-status badge badge-success"
                          >Completed</span
                        >
                        <span class="curriculum-item-duration">22:30</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-question-circle"></i>
                        </div>
                        <a href="quizzes.html" class="curriculum-item-link"
                          >2.5 HTML Quiz</a
                        >
                        <span class="curriculum-item-status badge badge-warning"
                          >Not Started</span
                        >
                        <span class="curriculum-item-duration">20 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Section 3: CSS Styling -->
                <div class="curriculum-section">
                  <div
                    class="curriculum-section-header d-flex justify-content-between"
                    data-toggle="collapse"
                    data-target="#section3"
                  >
                    <span>Section 3: CSS Styling</span>
                    <span>3/6 Completed</span>
                  </div>
                  <div id="section3" class="collapse show">
                    <div class="curriculum-section-content">
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >3.1 Introduction to CSS</a
                        >
                        <span class="curriculum-item-status badge badge-success"
                          >Completed</span
                        >
                        <span class="curriculum-item-duration">16:25</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >3.2 Selectors and Properties</a
                        >
                        <span class="curriculum-item-status badge badge-success"
                          >Completed</span
                        >
                        <span class="curriculum-item-duration">20:10</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >3.3 Box Model and Layout</a
                        >
                        <span class="curriculum-item-status badge badge-success"
                          >Completed</span
                        >
                        <span class="curriculum-item-duration">24:45</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <a
                          href="course-content.html"
                          class="curriculum-item-link"
                          >3.4 Flexbox and Grid</a
                        >
                        <span class="curriculum-item-status badge badge-warning"
                          >In Progress</span
                        >
                        <span class="curriculum-item-duration">28:35</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <a href="#" class="curriculum-item-link"
                          >3.5 Responsive Design</a
                        >
                        <span class="curriculum-item-status badge badge-light"
                          >Locked</span
                        >
                        <span class="curriculum-item-duration">22:15</span>
                      </div>
                      <div class="curriculum-item">
                        <div class="curriculum-item-icon">
                          <i class="fas fa-tasks"></i>
                        </div>
                        <a href="#" class="curriculum-item-link"
                          >3.6 CSS Layout Assignment</a
                        >
                        <span class="curriculum-item-status badge badge-light"
                          >Locked</span
                        >
                        <span class="curriculum-item-duration">45 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Description Tab -->
              <div
                id="description"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div class="card">
                  <div class="card-body">
                    <h4>About This Course</h4>
                    <p class="lead">
                      Master the essential skills needed to build modern,
                      responsive websites from scratch.
                    </p>
                    <p>
                      This comprehensive web development course covers
                      everything you need to know to become a full-stack web
                      developer. Starting with HTML, CSS, and JavaScript
                      fundamentals, you'll progress through advanced topics like
                      React, Node.js, and database integration.
                    </p>

                    <h5 class="mt-4">What You'll Learn</h5>
                    <ul class="list-group list-group-flush mb-4">
                      <li class="list-group-item">
                        <i class="fas fa-check text-success mr-2"></i> HTML5
                        structure and semantic elements
                      </li>
                      <li class="list-group-item">
                        <i class="fas fa-check text-success mr-2"></i> CSS3
                        styling, animations, and responsive design
                      </li>
                      <li class="list-group-item">
                        <i class="fas fa-check text-success mr-2"></i>
                        JavaScript fundamentals and ES6+ features
                      </li>
                      <li class="list-group-item">
                        <i class="fas fa-check text-success mr-2"></i> Front-end
                        frameworks like React and Bootstrap
                      </li>
                      <li class="list-group-item">
                        <i class="fas fa-check text-success mr-2"></i> Back-end
                        development with Node.js and Express
                      </li>
                      <li class="list-group-item">
                        <i class="fas fa-check text-success mr-2"></i> Database
                        integration with MongoDB
                      </li>
                      <li class="list-group-item">
                        <i class="fas fa-check text-success mr-2"></i> Deploying
                        applications to cloud platforms
                      </li>
                    </ul>

                    <h5>Requirements</h5>
                    <ul>
                      <li>
                        Basic computer skills and familiarity with web browsers
                      </li>
                      <li>No prior programming experience required</li>
                      <li>A computer running Windows, macOS, or Linux</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Resources Tab -->
              <div
                id="resources"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="resources-tab"
              >
                <div class="card">
                  <div class="card-body">
                    <h4>Course Resources</h4>
                    <p>
                      Download these resources to enhance your learning
                      experience.
                    </p>

                    <div class="list-group mb-4">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="fas fa-file-pdf mr-2 text-danger"></i>
                          <span>Course Syllabus</span>
                        </div>
                        <span class="badge badge-primary badge-pill">PDF</span>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="fas fa-file-code mr-2 text-primary"></i>
                          <span>HTML & CSS Starter Templates</span>
                        </div>
                        <span class="badge badge-primary badge-pill">ZIP</span>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="fas fa-file-code mr-2 text-primary"></i>
                          <span>JavaScript Exercise Files</span>
                        </div>
                        <span class="badge badge-primary badge-pill">ZIP</span>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i
                            class="fas fa-file-powerpoint mr-2 text-warning"
                          ></i>
                          <span>Responsive Design Slides</span>
                        </div>
                        <span class="badge badge-primary badge-pill">PPT</span>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <i class="fas fa-link mr-2 text-info"></i>
                          <span>Additional Resources & References</span>
                        </div>
                        <span class="badge badge-primary badge-pill">DOC</span>
                      </a>
                    </div>

                    <h5>Recommended Books</h5>
                    <div class="card-deck">
                      <div class="card">
                        <img
                          src="@hublms/assets/img/examples/example7.jpeg"
                          class="card-img-top"
                          alt="Book Cover"
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            HTML & CSS: Design and Build Websites
                          </h5>
                          <p class="card-text small">
                            A comprehensive guide to HTML and CSS fundamentals.
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="@hublms/assets/img/examples/example8.jpeg"
                          class="card-img-top"
                          alt="Book Cover"
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            JavaScript: The Definitive Guide
                          </h5>
                          <p class="card-text small">
                            Master JavaScript with this practical reference.
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="@hublms/assets/img/examples/example9.jpeg"
                          class="card-img-top"
                          alt="Book Cover"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Node.js Web Development</h5>
                          <p class="card-text small">
                            Learn server-side JavaScript with Node.js.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Discussions Tab -->
              <div
                id="discussions"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="discussions-tab"
              >
                <div class="card">
                  <div class="card-body">
                    <h4
                      class="d-flex justify-content-between align-items-center mb-4"
                    >
                      <span>Course Discussions</span>
                      <button class="btn btn-primary btn-sm">New Topic</button>
                    </h4>

                    <!-- Discussion Thread 1 -->
                    <div class="comment">
                      <div class="comment-header">
                        <img
                          src="@hublms/assets/img/profile2.jpg"
                          alt="User"
                          class="comment-avatar"
                        />
                        <span class="comment-author">Sarah Johnson</span>
                        <span class="comment-date">June 18, 2025</span>
                      </div>
                      <div class="comment-content">
                        <h5>Help with Flexbox Layout</h5>
                        <p>
                          I'm struggling with the Flexbox assignment. My items
                          aren't aligning properly in the container. Has anyone
                          else had this issue? Here's what I've tried so far...
                        </p>
                        <div class="d-flex align-items-center mt-3">
                          <button class="btn btn-sm btn-light mr-2">
                            <i class="far fa-thumbs-up mr-1"></i> 12
                          </button>
                          <button class="btn btn-sm btn-light mr-2">
                            <i class="far fa-comment mr-1"></i> Reply
                          </button>
                          <span class="badge badge-secondary ml-auto"
                            >Section 3.4</span
                          >
                        </div>

                        <!-- Replies -->
                        <div class="ml-5 mt-3 border-left pl-3">
                          <div class="comment">
                            <div class="comment-header">
                              <img
                                src="@hublms/assets/img/profile.jpg"
                                alt="User"
                                class="comment-avatar"
                              />
                              <span class="comment-author">David Wilson</span>
                              <span class="comment-date">June 19, 2025</span>
                            </div>
                            <div class="comment-content">
                              <p>
                                Make sure you've set the correct display
                                property on your container. Try adding
                                <code
                                  >display: flex; justify-content:
                                  space-between;</code
                                >
                                to your container class.
                              </p>
                              <div class="d-flex align-items-center mt-2">
                                <button class="btn btn-sm btn-light mr-2">
                                  <i class="far fa-thumbs-up mr-1"></i> 8
                                </button>
                                <button class="btn btn-sm btn-light mr-2">
                                  <i class="far fa-comment mr-1"></i> Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Discussion Thread 2 -->
                    <div class="comment">
                      <div class="comment-header">
                        <img
                          src="@hublms/assets/img/profile.jpg"
                          alt="User"
                          class="comment-avatar"
                        />
                        <span class="comment-author">Michael Chen</span>
                        <span class="comment-date">June 15, 2025</span>
                      </div>
                      <div class="comment-content">
                        <h5>Additional Resources for JavaScript</h5>
                        <p>
                          I found these amazing JavaScript tutorials that really
                          helped me understand the concepts better. Thought I'd
                          share with everyone:
                        </p>
                        <ul>
                          <li>
                            <a href="#">JavaScript.info</a> - Modern JavaScript
                            Tutorial
                          </li>
                          <li>
                            <a href="#">MDN Web Docs</a> - JavaScript Guide
                          </li>
                          <li>
                            <a href="#">Eloquent JavaScript</a> - Online Book
                          </li>
                        </ul>
                        <div class="d-flex align-items-center mt-3">
                          <button class="btn btn-sm btn-light mr-2">
                            <i class="far fa-thumbs-up mr-1"></i> 24
                          </button>
                          <button class="btn btn-sm btn-light mr-2">
                            <i class="far fa-comment mr-1"></i> Reply
                          </button>
                          <span class="badge badge-secondary ml-auto"
                            >General</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Post New Discussion Form -->
                    <div class="card mt-4">
                      <div class="card-body">
                        <h5>Join the Discussion</h5>
                        <form>
                          <div class="form-group">
                            <label for="topicTitle">Topic Title</label>
                            <input
                              id="topicTitle"
                              type="text"
                              class="form-control"
                              placeholder="Enter a title for your discussion"
                            />
                          </div>
                          <div class="form-group">
                            <label for="topicMessage">Message</label>
                            <textarea
                              id="topicMessage"
                              class="form-control"
                              rows="4"
                              placeholder="Type your message here"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <label for="topicSection">Related To</label>
                            <select id="topicSection" class="form-control">
                              <option>General Discussion</option>
                              <option>Section 1: Introduction</option>
                              <option>Section 2: HTML Fundamentals</option>
                              <option>Section 3: CSS Styling</option>
                            </select>
                          </div>
                          <button type="submit" class="btn btn-primary">
                            Post Discussion
                          </button>
                        </form>
                      </div>
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
