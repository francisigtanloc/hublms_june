<template>
    <div class="min-h-screen bg-white">
     
      <!-- Main Content -->
      <main class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 class="text-3xl font-bold text-gray-800">Courses</h1>
          <div class="mt-4 md:mt-0 flex space-x-4">
            <router-link to="/course-form" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              Create Course
            </router-link>
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search Courses..." 
                class="w-full md:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div class="absolute left-3 top-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Tabs -->
        <div class="border-b border-gray-200 mb-6">
          <div class="flex">
            <button class="px-4 py-2 font-medium text-gray-800 border-b-2 border-red-500 -mb-px">All Courses</button>
            <button class="px-4 py-2 font-medium text-gray-500">My Courses</button>
          </div>
        </div>
  
        <!-- Course Count and Filters -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div class="text-lg font-medium text-gray-800 mb-4 md:mb-0">26 Courses</div>
          <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <div class="relative">
              <select class="appearance-none w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Alphabetical</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
              <div class="absolute right-3 top-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div class="relative">
              <select class="appearance-none w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>All Categories</option>
                <option>Development</option>
                <option>Design</option>
                <option>Business</option>
              </select>
              <div class="absolute right-3 top-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div class="relative">
              <select class="appearance-none w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>All Instructors</option>
                <option>John</option>
                <option>Maverick</option>
              </select>
              <div class="absolute right-3 top-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div class="flex border rounded-lg">
              <button class="px-3 py-2 bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
              </button>
              <button class="px-3 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Course Grid -->
        <div v-if="courses && courses.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Course Card 1 -->
          

        <div v-for="(course, index) in courses" :key="index">
            <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <img src="/placeholder.svg" alt="Course thumbnail" class="w-full h-48 object-cover" />
              <div class="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
                IN PROGRESS
              </div>
              <div class="absolute top-3 right-3">
                <router-link :to="`/course-form?id=${course.id}`" class="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                </router-link>
              </div>
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500 mb-2">4 Lessons</div>
              <h3 class="text-lg font-bold mb-4">{{ course.Name }}</h3>
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <img src="/placeholder.svg" alt="Instructor avatar" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm">John</span>
              </div>
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 53%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                53% Complete<br>
                Last activity on February 17, 2020 9:17 am
              </div>
              <div class="mt-4 flex justify-end">
                <router-link :to="`/course-form?id=${course.id}`" class="text-sm text-red-600 hover:text-red-800 font-medium">
                  Edit Course
                </router-link>
              </div>
            </div>
          </div>
        </div>
  
          <!-- Course Card 2 -->
         
  
          <!-- Course Card 3 -->
          <!-- <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <img src="/placeholder.svg" alt="Course thumbnail" class="w-full h-48 object-cover" />
              <div class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
                START COURSE
              </div>
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500 mb-2">4 Lessons</div>
              <h3 class="text-lg font-bold mb-4">Animation and VFX</h3>
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <img src="/placeholder.svg" alt="Instructor avatar" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm">John</span>
              </div>
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 0%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                0% Complete<br>
                Last activity on June 13, 2019 11:11 pm
              </div>
            </div>
          </div> -->
  
          <!-- Course Card 4 -->
          <!-- <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <img src="/placeholder.svg" alt="Course thumbnail" class="w-full h-48 object-cover" />
              <div class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">
                COMPLETE
              </div>
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500 mb-2">6 Lessons</div>
              <h3 class="text-lg font-bold mb-4">Artificial Intelligence</h3>
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <img src="/placeholder.svg" alt="Instructor avatar" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm">Maverick</span>
              </div>
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 100%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                100% Complete<br>
                Last activity on February 17, 2020 9:25 am
              </div>
            </div>
          </div> -->
  
          <!-- Course Card 5 -->
          <!-- <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <img src="/placeholder.svg" alt="Course thumbnail" class="w-full h-48 object-cover" />
              <div class="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
                IN PROGRESS
              </div>
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500 mb-2">5 Lessons</div>
              <h3 class="text-lg font-bold mb-4">History of Architecture</h3>
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <img src="/placeholder.svg" alt="Instructor avatar" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm">John</span>
              </div>
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 35%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                35% Complete<br>
                Last activity on March 5, 2020 3:45 pm
              </div>
            </div>
          </div> -->
  
          <!-- Course Card 6 -->
          <!-- <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <img src="/placeholder.svg" alt="Course thumbnail" class="w-full h-48 object-cover" />
              <div class="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
                IN PROGRESS
              </div>
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500 mb-2">8 Lessons</div>
              <h3 class="text-lg font-bold mb-4">Machine Learning Fundamentals</h3>
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <img src="/placeholder.svg" alt="Instructor avatar" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm">Maverick</span>
              </div>
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 65%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                65% Complete<br>
                Last activity on April 2, 2020 10:30 am
              </div>
            </div>
          </div> -->
  
          <!-- Course Card 7 -->
          <!-- <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <img src="/placeholder.svg" alt="Course thumbnail" class="w-full h-48 object-cover" />
              <div class="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
                IN PROGRESS
              </div>
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500 mb-2">6 Lessons</div>
              <h3 class="text-lg font-bold mb-4">Music Production</h3>
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <img src="/placeholder.svg" alt="Instructor avatar" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm">John</span>
              </div>
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 40%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                40% Complete<br>
                Last activity on March 15, 2020 2:20 pm
              </div>
            </div>
          </div> -->
  
          <!-- Course Card 8 -->
          <!-- <div class="border rounded-lg overflow-hidden">
            <div class="relative">
              <img src="/placeholder.svg" alt="Course thumbnail" class="w-full h-48 object-cover" />
              <div class="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
                IN PROGRESS
              </div>
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500 mb-2">7 Lessons</div>
              <h3 class="text-lg font-bold mb-4">Illustration Techniques</h3>
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <img src="/placeholder.svg" alt="Instructor avatar" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm">Maverick</span>
              </div>
              <div class="mb-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 25%"></div>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                25% Complete<br>
                Last activity on April 10, 2020 4:15 pm
              </div>
            </div>
          </div> -->
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
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
      title: 'Courses Management',
    }
  },
  methods: {
    selectCourse(course) {
      this.selectedCourse = course
    }
  }
}
</script>
  
  <style>
  /* Additional styles can be added here if needed */
  </style>