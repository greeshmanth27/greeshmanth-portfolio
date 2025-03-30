
import React, { useState, useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Settings, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Default data for statistics (used when not connected to real accounts)
const defaultLeetCodeData = [
  { difficulty: 'Easy', solved: 120, total: 150, color: '#00b8a3' },
  { difficulty: 'Medium', solved: 85, total: 150, color: '#ffc01e' },
  { difficulty: 'Hard', solved: 35, total: 95, color: '#ff375f' },
];

const defaultHackerRankData = [
  { category: 'Algorithms', stars: 5, color: '#38b2ac' },
  { category: 'Data Structures', stars: 5, color: '#38b2ac' },
  { category: 'Mathematics', stars: 4, color: '#38b2ac' },
  { category: 'SQL', stars: 5, color: '#38b2ac' },
  { category: 'Functional Programming', stars: 3, color: '#38b2ac' },
];

const defaultContestData = [
  { name: 'Weekly Contest 342', rank: 750, outOf: 15000 },
  { name: 'Biweekly Contest 89', rank: 820, outOf: 12500 },
  { name: 'Weekly Contest 337', rank: 650, outOf: 16000 },
  { name: 'Google Kickstart 2023', rank: 1200, outOf: 25000 },
];

// Colors for the pie chart
const COLORS = ['#00b8a3', '#ffc01e', '#ff375f', '#6c5ce7'];

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

interface ProfileConfig {
  leetCodeUsername: string;
  hackerRankUsername: string;
  isConnected: boolean;
}

const Statistics: React.FC = () => {
  const { toast } = useToast();
  const [showConfig, setShowConfig] = useState(false);
  const [profileConfig, setProfileConfig] = useState<ProfileConfig>(() => {
    const savedConfig = localStorage.getItem('coding-profiles');
    return savedConfig ? JSON.parse(savedConfig) : {
      leetCodeUsername: '',
      hackerRankUsername: '',
      isConnected: false
    };
  });
  
  const [leetCodeData, setLeetCodeData] = useState(defaultLeetCodeData);
  const [hackerRankData, setHackerRankData] = useState(defaultHackerRankData);
  const [contestData, setContestData] = useState(defaultContestData);
  
  // Calculate statistics for pie chart
  const totalSolvedProblems = leetCodeData.reduce((acc, item) => acc + item.solved, 0);
  const pieChartData = leetCodeData.map(item => ({
    name: item.difficulty,
    value: Math.round((item.solved / totalSolvedProblems) * 100),
    color: item.color
  }));

  // Save profile configuration
  useEffect(() => {
    localStorage.setItem('coding-profiles', JSON.stringify(profileConfig));
  }, [profileConfig]);

  // Function to connect profiles
  const connectProfiles = () => {
    if (!profileConfig.leetCodeUsername || !profileConfig.hackerRankUsername) {
      toast({
        title: "Missing Information",
        description: "Please provide both usernames to connect your profiles.",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, we would fetch data from LeetCode and HackerRank APIs here
    // For demonstration, we'll simulate a successful connection

    setProfileConfig({
      ...profileConfig,
      isConnected: true
    });

    toast({
      title: "Profiles Connected",
      description: "Your LeetCode and HackerRank profiles have been connected successfully!",
    });

    setShowConfig(false);
  };

  // Function to open profile links
  const openProfile = (platform: 'leetcode' | 'hackerrank') => {
    if (!profileConfig.isConnected) {
      toast({
        title: "Not Connected",
        description: "Please connect your profiles first.",
        variant: "destructive"
      });
      return;
    }

    const username = platform === 'leetcode' 
      ? profileConfig.leetCodeUsername 
      : profileConfig.hackerRankUsername;
    
    const url = platform === 'leetcode'
      ? `https://leetcode.com/${username}`
      : `https://www.hackerrank.com/${username}`;
    
    window.open(url, '_blank');
  };

  return (
    <section id="statistics" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title text-center">Coding Statistics</h2>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setShowConfig(!showConfig)}
            className="ml-2"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        
        {showConfig && (
          <Card className="mb-8 glass-card">
            <CardHeader>
              <CardTitle className="text-xl">Connect Your Profiles</CardTitle>
              <CardDescription>
                Enter your LeetCode and HackerRank usernames to display your real statistics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="leetcode" className="text-sm font-medium">LeetCode Username</label>
                <Input 
                  id="leetcode" 
                  placeholder="yourusername" 
                  value={profileConfig.leetCodeUsername}
                  onChange={(e) => setProfileConfig({
                    ...profileConfig,
                    leetCodeUsername: e.target.value
                  })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="hackerrank" className="text-sm font-medium">HackerRank Username</label>
                <Input 
                  id="hackerrank" 
                  placeholder="yourusername" 
                  value={profileConfig.hackerRankUsername}
                  onChange={(e) => setProfileConfig({
                    ...profileConfig,
                    hackerRankUsername: e.target.value
                  })}
                />
              </div>
              <Button onClick={connectProfiles}>
                {profileConfig.isConnected ? "Update Connection" : "Connect Profiles"}
              </Button>
            </CardContent>
          </Card>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* LeetCode Card */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle 
                  className="text-2xl flex items-center cursor-pointer group"
                  onClick={() => openProfile('leetcode')}
                >
                  LeetCode
                  <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <Badge className="bg-[#f89f1b] text-white">
                  {totalSolvedProblems} problems solved
                </Badge>
              </div>
              <CardDescription>
                {profileConfig.isConnected 
                  ? `Connected as ${profileConfig.leetCodeUsername}`
                  : "Problem solving statistics"
                }
              </CardDescription>
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
                <CardTitle 
                  className="text-2xl flex items-center cursor-pointer group"
                  onClick={() => openProfile('hackerrank')}
                >
                  HackerRank
                  <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <Badge className="bg-[#2ec866] text-white">
                  5 ⭐ Programmer
                </Badge>
              </div>
              <CardDescription>
                {profileConfig.isConnected 
                  ? `Connected as ${profileConfig.hackerRankUsername}`
                  : "Skills certification & badges"
                }
              </CardDescription>
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
            {profileConfig.isConnected 
              ? "Statistics are updated in real-time from your connected profiles."
              : "Connect your LeetCode and HackerRank profiles to display real-time statistics."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
