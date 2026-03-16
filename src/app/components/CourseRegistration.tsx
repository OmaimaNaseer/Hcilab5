import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";
import { BookOpen, Clock, User, CheckCircle2, XCircle, AlertCircle, Search, Filter } from "lucide-react";

export function CourseRegistration() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>(['CS-401', 'CS-402']);

  const availableCourses = [
    {
      code: "CS-401",
      title: "Artificial Intelligence",
      credits: 3,
      instructor: "Dr. Muhammad Asif",
      schedule: "Mon, Wed 09:00-10:30 AM",
      seats: { total: 60, available: 12 },
      prerequisites: "CS-301, CS-302",
      type: "Core"
    },
    {
      code: "CS-402",
      title: "Machine Learning",
      credits: 3,
      instructor: "Dr. Fatima Khan",
      schedule: "Tue, Thu 11:00-12:30 PM",
      seats: { total: 60, available: 8 },
      prerequisites: "CS-301, MATH-201",
      type: "Core"
    },
    {
      code: "CS-403",
      title: "Mobile Application Development",
      credits: 3,
      instructor: "Mr. Imran Shah",
      schedule: "Mon, Wed 02:00-03:30 PM",
      seats: { total: 50, available: 25 },
      prerequisites: "CS-201",
      type: "Elective"
    },
    {
      code: "CS-404",
      title: "Cloud Computing",
      credits: 3,
      instructor: "Ms. Ayesha Malik",
      schedule: "Tue, Thu 09:00-10:30 AM",
      seats: { total: 45, available: 0 },
      prerequisites: "CS-303",
      type: "Elective"
    },
    {
      code: "CS-405",
      title: "Cybersecurity Fundamentals",
      credits: 3,
      instructor: "Dr. Usman Ali",
      schedule: "Wed, Fri 01:00-02:30 PM",
      seats: { total: 55, available: 18 },
      prerequisites: "CS-303",
      type: "Elective"
    },
  ];

  const toggleCourse = (courseCode: string, available: number) => {
    if (available === 0) return;
    
    setSelectedCourses(prev => 
      prev.includes(courseCode)
        ? prev.filter(c => c !== courseCode)
        : [...prev, courseCode]
    );
  };

  const totalCredits = availableCourses
    .filter(c => selectedCourses.includes(c.code))
    .reduce((sum, c) => sum + c.credits, 0);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Course Registration</h1>
        <p className="text-blue-100">Spring 2026 Semester • Registration Period: March 1-20, 2026</p>
      </div>

      {/* Registration Summary */}
      <Card className="p-6 border-2 border-blue-200 bg-blue-50">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Registration Summary</h2>
            <div className="flex items-center space-x-6 text-sm">
              <div>
                <span className="text-gray-600">Selected Courses: </span>
                <span className="font-semibold text-blue-600">{selectedCourses.length}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Credits: </span>
                <span className="font-semibold text-blue-600">{totalCredits}</span>
              </div>
              <div>
                <span className="text-gray-600">Max Credits: </span>
                <span className="font-semibold text-gray-700">18</span>
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Submit Registration
          </Button>
        </div>
      </Card>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button variant="outline" className="flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </Button>
      </div>

      {/* Available Courses */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Courses</h2>
        <div className="space-y-4">
          {availableCourses.map((course) => {
            const isSelected = selectedCourses.includes(course.code);
            const isFull = course.seats.available === 0;
            const seatsLow = course.seats.available > 0 && course.seats.available <= 10;

            return (
              <Card 
                key={course.code} 
                className={`p-6 transition-all cursor-pointer ${
                  isSelected 
                    ? 'border-2 border-blue-500 bg-blue-50' 
                    : isFull 
                      ? 'opacity-60 cursor-not-allowed' 
                      : 'hover:shadow-lg'
                }`}
                onClick={() => toggleCourse(course.code, course.seats.available)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-blue-600' : 'bg-gray-100'
                      }`}>
                        <BookOpen className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                          <Badge variant={course.type === 'Core' ? 'default' : 'secondary'}>
                            {course.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{course.code} • {course.credits} Credit Hours</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pl-15">
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{course.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{course.schedule}</span>
                      </div>
                    </div>

                    <div className="mt-3 pl-15 text-sm">
                      <span className="text-gray-600">Prerequisites: </span>
                      <span className="text-gray-900 font-medium">{course.prerequisites}</span>
                    </div>
                  </div>

                  <div className="ml-6 flex flex-col items-end space-y-2">
                    {isSelected ? (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">Selected</span>
                      </div>
                    ) : isFull ? (
                      <div className="flex items-center space-x-2 text-red-600">
                        <XCircle className="w-5 h-5" />
                        <span className="font-medium">Full</span>
                      </div>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Add Course
                      </Button>
                    )}

                    <div className={`text-sm px-3 py-1 rounded-full ${
                      isFull 
                        ? 'bg-red-100 text-red-700'
                        : seatsLow
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-green-100 text-green-700'
                    }`}>
                      {course.seats.available}/{course.seats.total} seats
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Important Notes */}
      <Card className="p-6 bg-amber-50 border-amber-200">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Important Registration Guidelines</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Minimum 12 credit hours required for full-time status</li>
              <li>Maximum 18 credit hours allowed per semester</li>
              <li>Prerequisites must be completed before enrolling</li>
              <li>Late registration fee applies after March 20, 2026</li>
              <li>Course withdrawal deadline: April 15, 2026</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
