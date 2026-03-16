import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bell, BookOpen, Calendar, BarChart3, User, Settings, LogOut, Menu, Search, ChevronRight } from "lucide-react";

export function HomeScreen() {
  const quickStats = [
    { label: "Enrolled Courses", value: "6", icon: BookOpen, color: "bg-blue-500" },
    { label: "Attendance Rate", value: "92%", icon: Calendar, color: "bg-green-500" },
    { label: "CGPA", value: "3.45", icon: BarChart3, color: "bg-indigo-500" },
    { label: "Pending Tasks", value: "4", icon: Bell, color: "bg-amber-500" },
  ];

  const upcomingClasses = [
    { course: "Database Systems", code: "CS-301", time: "09:00 AM", room: "Lab 3", instructor: "Dr. Ahmed Khan" },
    { course: "Software Engineering", code: "CS-302", time: "11:00 AM", room: "Room 204", instructor: "Ms. Sara Ali" },
    { course: "Computer Networks", code: "CS-303", time: "02:00 PM", room: "Lab 1", instructor: "Mr. Bilal Shah" },
  ];

  const recentAnnouncements = [
    { title: "Mid-Term Exam Schedule Released", date: "2 hours ago", type: "exam" },
    { title: "Registration for Spring 2026 Opens", date: "1 day ago", type: "registration" },
    { title: "Campus Closed - Public Holiday", date: "3 days ago", type: "notice" },
  ];

  const quickActions = [
    { label: "Register Courses", icon: BookOpen, path: "/registration" },
    { label: "View Performance", icon: BarChart3, path: "/performance" },
    { label: "Check Attendance", icon: Calendar, path: "/attendance" },
    { label: "Download Transcript", icon: User, path: "#" },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Omaima Naseer!</h1>
            <p className="text-blue-100">Student ID: 2023-CS-001 • BS Computer Science • 6th Semester</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.label} className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Schedule</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {upcomingClasses.map((cls) => (
                <div key={cls.code} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-lg font-bold text-blue-600">{cls.time.split(' ')[0]}</div>
                    <div className="text-xs text-gray-500">{cls.time.split(' ')[1]}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{cls.course}</h3>
                      <Badge variant="outline" className="text-xs">{cls.code}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{cls.instructor}</p>
                    <p className="text-xs text-gray-500 mt-1">📍 {cls.room}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Announcements */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Announcements</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {recentAnnouncements.map((announcement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      announcement.type === 'exam' ? 'bg-red-100' :
                      announcement.type === 'registration' ? 'bg-blue-100' :
                      'bg-gray-100'
                    }`}>
                      {announcement.type === 'exam' ? '📝' :
                       announcement.type === 'registration' ? '📋' :
                       '📢'}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1">{announcement.title}</h3>
                    <p className="text-xs text-gray-500">{announcement.date}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              ))}
              <button className="w-full text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                View All Announcements →
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Academic Progress */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Progress</h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">142</div>
              <div className="text-sm text-gray-600">Total Credit Hours</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">3.45</div>
              <div className="text-sm text-gray-600">Current CGPA</div>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">6/8</div>
              <div className="text-sm text-gray-600">Semesters Completed</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}