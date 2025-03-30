
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Data for statistics
const leetCodeData = [
  { difficulty: 'Easy', solved: 120, total: 150, color: '#00b8a3' },
  { difficulty: 'Medium', solved: 85, total: 150, color: '#ffc01e' },
  { difficulty: 'Hard', solved: 35, total: 95, color: '#ff375f' },
];

const hackerRankData = [
  { category: 'Algorithms', stars: 5, color: '#38b2ac' },
  { category: 'Data Structures', stars: 5, color: '#38b2ac' },
  { category: 'Mathematics', stars: 4, color: '#38b2ac' },
  { category: 'SQL', stars: 5, color: '#38b2ac' },
  { category: 'Functional Programming', stars: 3, color: '#38b2ac' },
];

const contestData = [
  { name: 'Weekly Contest 342', rank: 750, outOf: 15000 },
  { name: 'Biweekly Contest 89', rank: 820, outOf: 12500 },
  { name: 'Weekly Contest 337', rank: 650, outOf: 16000 },
  { name: 'Google Kickstart 2023', rank: 1200, outOf: 25000 },
];

// Colors for the pie chart
const COLORS = ['#00b8a3', '#ffc01e', '#ff375f', '#6c5ce7'];

// Calculated statistics for pie chart
const totalSolvedProblems = leetCodeData.reduce((acc, item) => acc + item.solved, 0);
const pieChartData = leetCodeData.map(item => ({
  name: item.difficulty,
  value: Math.round((item.solved / totalSolvedProblems) * 100),
  color: item.color
}));

// Function to render star ratings
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-lg">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

const Statistics: React.FC = () => {
  return (
    <section id="statistics" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Coding Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* LeetCode Card */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">LeetCode</CardTitle>
                <Badge className="bg-[#f89f1b] text-white">
                  {totalSolvedProblems} problems solved
                </Badge>
              </div>
              <CardDescription>Problem solving statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={leetCodeData} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="difficulty" />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-background/95 border border-border p-3 rounded-lg shadow-lg">
                              <p className="font-medium">{data.difficulty}</p>
                              <p className="text-sm">Solved: <span className="font-medium">{data.solved}</span>/{data.total}</p>
                              <p className="text-sm">Completion: <span className="font-medium">{Math.round((data.solved / data.total) * 100)}%</span></p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="solved" fill="#8A2BE2" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-8 pt-4 border-t border-border">
                <h4 className="text-base font-medium mb-3">Problem Distribution</h4>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HackerRank Card */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">HackerRank</CardTitle>
                <Badge className="bg-[#2ec866] text-white">
                  5 ⭐ Programmer
                </Badge>
              </div>
              <CardDescription>Skills certification & badges</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Proficiency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hackerRankData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.category}</TableCell>
                      <TableCell>
                        <StarRating rating={item.stars} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-8 pt-4 border-t border-border">
                <h4 className="text-base font-medium mb-3">Contest Performance</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Contest</TableHead>
                      <TableHead>Rank</TableHead>
                      <TableHead>Percentile</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contestData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.rank}/{item.outOf}</TableCell>
                        <TableCell>
                          {`Top ${Math.round((item.rank / item.outOf) * 100)}%`}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            These statistics are regularly updated as I continue to solve new problems and participate in contests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
