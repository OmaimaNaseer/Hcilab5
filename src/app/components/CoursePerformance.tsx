import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { BookOpen, TrendingUp, Award, FileText, CheckCircle, Clock } from "lucide-react";

export function CoursePerformance() {
  const courses = [
    {
      code: "CS-301",
      title: "Database Systems",
      instructor: "Dr. Ahmed Khan",
      currentGrade: "A",
      gpa: 3.7,
      totalMarks: 850,
      obtainedMarks: 782,
      percentage: 92,
    },
    {
      code: "CS-302",
      title: "Software Engineering",
      instructor: "Ms. Sara Ali",
      currentGrade: "B+",
      gpa: 3.3,
      totalMarks: 850,
      obtainedMarks: 698,
      percentage: 82,
    },
    {
      code: "CS-303",
      title: "Computer Networks",
      instructor: "Mr. Bilal Shah",
      currentGrade: "A-",
      gpa: 3.5,
      totalMarks: 850,
      obtainedMarks: 731,
      percentage: 86,
    },
  ];

  const assessments = [
    {
      course: "CS-301",
      type: "Quiz 1",
      totalMarks: 10,
      obtainedMarks: 9,
      percentage: 90,
      date: "Feb 15, 2026",
      status: "graded"
    },
    {
      course: "CS-301",
      type: "Assignment 1",
      totalMarks: 20,
      obtainedMarks: 18,
      percentage: 90,
      date: "Feb 28, 2026",
      status: "graded"
    },
    {
      course: "CS-301",
      type: "Quiz 2",
      totalMarks: 10,
      obtainedMarks: 10,
      percentage: 100,
      date: "Mar 10, 2026",
      status: "graded"
    },
    {
      course: "CS-301",
      type: "Mid-Term",
      totalMarks: 100,
      obtainedMarks: 0,
      percentage: 0,
      date: "Mar 25, 2026",
      status: "upcoming"
    },
    {
      course: "CS-302",
      type: "Quiz 1",
      totalMarks: 10,
      obtainedMarks: 8,
      percentage: 80,
      date: "Feb 18, 2026",
      status: "graded"
    },
    {
      course: "CS-302",
      type: "Assignment 1",
      totalMarks: 20,
      obtainedMarks: 16,
      percentage: 80,
      date: "Mar 5, 2026",
      status: "graded"
    },
    {
      course: "CS-303",
      type: "Quiz 1",
      totalMarks: 10,
      obtainedMarks: 9,
      percentage: 90,
      date: "Feb 20, 2026",
      status: "graded"
    },
    {
      course: "CS-303",
      type: "Lab Project 1",
      totalMarks: 30,
      obtainedMarks: 25,
      percentage: 83,
      date: "Mar 8, 2026",
      status: "graded"
    },
  ];

  const semesterGPA = 3.5;
  const cgpa = 3.45;

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-amber-600 bg-amber-100';
    return 'text-gray-600 bg-gray-100';
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Academic Performance</h1>
        <p className="text-blue-100">Track your progress across courses, quizzes, and assignments</p>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-green-600 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Current CGPA</p>
              <p className="text-3xl font-bold text-green-600">{cgpa.toFixed(2)}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Out of 4.0 scale</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-blue-600 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Semester GPA</p>
              <p className="text-3xl font-bold text-blue-600">{semesterGPA.toFixed(2)}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Spring 2026</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-3 bg-indigo-600 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Enrolled Courses</p>
              <p className="text-3xl font-bold text-indigo-600">{courses.length}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Active this semester</p>
        </Card>
      </div>

      {/* Course Performance Cards */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Course-wise Performance</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <Card key={course.code} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <Badge className={getGradeColor(course.currentGrade)}>
                      Grade: {course.currentGrade}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{course.code} • {course.instructor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Current Score</p>
                  <p className={`text-2xl font-bold ${getPercentageColor(course.percentage)}`}>
                    {course.percentage}%
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>{course.obtainedMarks}/{course.totalMarks} marks</span>
                </div>
                <Progress value={course.percentage} className="h-2" />
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">GPA Impact: <span className="font-semibold text-gray-900">{course.gpa.toFixed(1)}</span></p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Detailed Assessments */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment Breakdown</h2>
        <Card className="p-6">
          <Tabs defaultValue="CS-301" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {courses.map((course) => (
                <TabsTrigger key={course.code} value={course.code}>
                  {course.code}
                </TabsTrigger>
              ))}
            </TabsList>

            {courses.map((course) => (
              <TabsContent key={course.code} value={course.code} className="mt-6">
                <div className="space-y-3">
                  {assessments
                    .filter((a) => a.course === course.code)
                    .map((assessment, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`p-2 rounded-lg ${
                            assessment.status === 'graded' 
                              ? 'bg-green-100' 
                              : 'bg-amber-100'
                          }`}>
                            {assessment.status === 'graded' ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Clock className="w-5 h-5 text-amber-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium text-gray-900">{assessment.type}</h4>
                              <Badge variant="outline" className="text-xs">
                                {assessment.date}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              {assessment.status === 'graded' 
                                ? `${assessment.obtainedMarks}/${assessment.totalMarks} marks`
                                : `Total: ${assessment.totalMarks} marks`
                              }
                            </p>
                          </div>
                        </div>
                        {assessment.status === 'graded' ? (
                          <div className="text-right">
                            <p className={`text-xl font-bold ${getPercentageColor(assessment.percentage)}`}>
                              {assessment.percentage}%
                            </p>
                          </div>
                        ) : (
                          <Badge variant="secondary">Upcoming</Badge>
                        )}
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 text-center">
          <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600">Total Assessments</p>
        </Card>
        <Card className="p-6 text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">8</p>
          <p className="text-sm text-gray-600">Completed</p>
        </Card>
        <Card className="p-6 text-center">
          <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">4</p>
          <p className="text-sm text-gray-600">Upcoming</p>
        </Card>
        <Card className="p-6 text-center">
          <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">87%</p>
          <p className="text-sm text-gray-600">Average Score</p>
        </Card>
      </div>
    </div>
  );
}
