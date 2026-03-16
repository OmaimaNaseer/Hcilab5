import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Calendar, CheckCircle, XCircle, Clock, AlertTriangle, TrendingUp } from "lucide-react";

export function Attendance() {
  const courses = [
    {
      code: "CS-301",
      title: "Database Systems",
      instructor: "Dr. Ahmed Khan",
      totalClasses: 30,
      attended: 28,
      percentage: 93,
      status: "safe"
    },
    {
      code: "CS-302",
      title: "Software Engineering",
      instructor: "Ms. Sara Ali",
      totalClasses: 28,
      attended: 24,
      percentage: 86,
      status: "safe"
    },
    {
      code: "CS-303",
      title: "Computer Networks",
      instructor: "Mr. Bilal Shah",
      totalClasses: 32,
      attended: 29,
      percentage: 91,
      status: "safe"
    },
    {
      code: "CS-304",
      title: "Web Engineering",
      instructor: "Mr. Hassan Ahmed",
      totalClasses: 26,
      attended: 20,
      percentage: 77,
      status: "warning"
    },
    {
      code: "CS-305",
      title: "Data Science",
      instructor: "Dr. Zainab Khan",
      totalClasses: 30,
      attended: 21,
      percentage: 70,
      status: "critical"
    },
  ];

  const recentAttendance = [
    { course: "CS-301", date: "Mar 16, 2026", day: "Monday", status: "present", time: "09:00 AM" },
    { course: "CS-302", date: "Mar 15, 2026", day: "Sunday", status: "present", time: "11:00 AM" },
    { course: "CS-303", date: "Mar 14, 2026", day: "Saturday", status: "present", time: "02:00 PM" },
    { course: "CS-304", date: "Mar 13, 2026", day: "Friday", status: "absent", time: "10:00 AM" },
    { course: "CS-305", date: "Mar 12, 2026", day: "Thursday", status: "present", time: "01:00 PM" },
    { course: "CS-301", date: "Mar 11, 2026", day: "Wednesday", status: "present", time: "09:00 AM" },
    { course: "CS-302", date: "Mar 10, 2026", day: "Tuesday", status: "absent", time: "11:00 AM" },
  ];

  const monthlyStats = [
    { month: "January", percentage: 94 },
    { month: "February", percentage: 91 },
    { month: "March", percentage: 86 },
  ];

  const overallAttendance = Math.round(
    courses.reduce((sum, c) => sum + c.percentage, 0) / courses.length
  );

  const totalClasses = courses.reduce((sum, c) => sum + c.totalClasses, 0);
  const totalAttended = courses.reduce((sum, c) => sum + c.attended, 0);

  const getStatusColor = (status: string) => {
    if (status === 'safe') return 'bg-green-100 text-green-700 border-green-200';
    if (status === 'warning') return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-red-100 text-red-700 border-red-200';
  };

  const getStatusIcon = (status: string) => {
    if (status === 'safe') return <CheckCircle className="w-5 h-5" />;
    if (status === 'warning') return <AlertTriangle className="w-5 h-5" />;
    return <XCircle className="w-5 h-5" />;
  };

  const getStatusText = (status: string, percentage: number) => {
    if (status === 'safe') return 'Good Standing';
    if (status === 'warning') return `${(75 - percentage).toFixed(0)}% away from minimum`;
    return 'Below Minimum (75%)';
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 75) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Attendance Tracker</h1>
        <p className="text-blue-100">Monitor your class attendance and maintain minimum requirements</p>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Overall Attendance</p>
              <p className={`text-3xl font-bold ${getPercentageColor(overallAttendance)}`}>
                {overallAttendance}%
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Across all courses</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Classes Attended</p>
              <p className="text-3xl font-bold text-gray-900">{totalAttended}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Out of {totalClasses} total</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Classes Missed</p>
              <p className="text-3xl font-bold text-gray-900">{totalClasses - totalAttended}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Absences recorded</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-3xl font-bold text-gray-900">86%</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">March 2026</p>
        </Card>
      </div>

      {/* Attendance Requirement Alert */}
      <Card className="p-6 bg-amber-50 border-2 border-amber-200">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Attendance Requirement</h3>
            <p className="text-sm text-gray-700">
              Minimum 75% attendance is required to be eligible for final examinations. 
              Students below this threshold may face academic consequences.
            </p>
          </div>
        </div>
      </Card>

      {/* Course-wise Attendance */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Course-wise Attendance</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <Card key={course.code} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(course.status)}`}>
                      {getStatusIcon(course.status)}
                      <span className="ml-1">{getStatusText(course.status, course.percentage)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{course.code} • {course.instructor}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-sm text-gray-600 mb-1">Attendance</p>
                  <p className={`text-2xl font-bold ${getPercentageColor(course.percentage)}`}>
                    {course.percentage}%
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>{course.attended}/{course.totalClasses} classes</span>
                </div>
                <Progress value={course.percentage} className="h-2" />
              </div>

              {course.percentage < 75 && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700">
                    ⚠️ You need to attend at least{' '}
                    <strong>{Math.ceil((75 * course.totalClasses) / 100 - course.attended)}</strong>{' '}
                    more classes to meet the minimum requirement.
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Attendance Log */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Attendance Log</h2>
        <Card className="p-6">
          <div className="space-y-3">
            {recentAttendance.map((record, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`p-2 rounded-lg ${
                    record.status === 'present' 
                      ? 'bg-green-100' 
                      : 'bg-red-100'
                  }`}>
                    {record.status === 'present' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{record.course}</h4>
                      <Badge variant="outline" className="text-xs">
                        {record.time}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {record.day}, {record.date}
                    </p>
                  </div>
                </div>
                <Badge 
                  className={
                    record.status === 'present'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }
                >
                  {record.status === 'present' ? 'Present' : 'Absent'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Monthly Trend */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Attendance Trend</h2>
        <Card className="p-6">
          <div className="space-y-4">
            {monthlyStats.map((month) => (
              <div key={month.month}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{month.month} 2026</span>
                  <span className={`text-sm font-semibold ${getPercentageColor(month.percentage)}`}>
                    {month.percentage}%
                  </span>
                </div>
                <Progress value={month.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
